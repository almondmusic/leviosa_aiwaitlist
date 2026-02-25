import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { validatePhone, normalizePhoneForStorage } from "@/lib/phone";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** 스프레드시트 셀에 넣을 때 줄바꿈(\n, \r) 제거 — 한 행이 여러 줄로 쪼개지는 것 방지 */
function sanitizeForSheet(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, phone = "", honeypot, referral_code = "", variant = "" } = body;

    // Honeypot: 봇이 채우면 거부
    if (honeypot) {
      return NextResponse.json({ success: true }); // 봇엔 성공처럼 보이게
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "이메일을 입력해 주세요." },
        { status: 400 },
      );
    }

    const trimmedEmail = email.trim();
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "올바른 이메일 형식을 입력해 주세요." },
        { status: 400 },
      );
    }

    const rawPhone = typeof phone === "string" ? phone.trim() : "";
    if (rawPhone && !validatePhone(rawPhone)) {
      return NextResponse.json(
        { error: "연락처는 010-XXXX-XXXX 형식으로 입력해 주세요." },
        { status: 400 },
      );
    }
    const normalizedPhone = rawPhone ? normalizePhoneForStorage(rawPhone) : "";

    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) {
      console.error("GOOGLE_SHEET_ID missing");
      return NextResponse.json(
        { error: "서버 설정 오류입니다. (GOOGLE_SHEET_ID)" },
        { status: 500 },
      );
    }

    let auth: InstanceType<typeof google.auth.JWT>;

    // 방식 1: Base64 인코딩된 JSON (권장 - .env 포맷 이슈 없음)
    const credentialsBase64 = process.env.GOOGLE_CREDENTIALS_BASE64;
    if (credentialsBase64) {
      try {
        const credentials = JSON.parse(
          Buffer.from(credentialsBase64, "base64").toString("utf-8"),
        );
        auth = new google.auth.JWT({
          email: credentials.client_email,
          key: credentials.private_key,
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });
      } catch (e) {
        console.error("GOOGLE_CREDENTIALS_BASE64 parse error:", e);
        return NextResponse.json(
          { error: "서버 설정 오류입니다. (GOOGLE_CREDENTIALS_BASE64 형식)" },
          { status: 500 },
        );
      }
    } else {
      // 방식 2: 개별 환경변수
      const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
      const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
      if (!clientEmail || !privateKey) {
        console.error("GOOGLE_CLIENT_EMAIL or GOOGLE_PRIVATE_KEY missing");
        return NextResponse.json(
          { error: "서버 설정 오류입니다. (Google 인증 정보 확인)" },
          { status: 500 },
        );
      }
      auth = new google.auth.JWT({
        email: clientEmail,
        key: privateKey,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });
    }

    const sheets = google.sheets({ version: "v4", auth });

    // 시트 이름을 API에서 조회 (설정 오류 방지)
    const meta = await sheets.spreadsheets.get({
      spreadsheetId: sheetId,
      fields: "sheets.properties.title",
    });
    const firstSheetTitle =
      meta.data.sheets?.[0]?.properties?.title ?? "Sheet1";
    const sheetRef =
      /^[A-Za-z0-9_]+$/.test(firstSheetTitle)
        ? firstSheetTitle
        : `'${firstSheetTitle.replace(/'/g, "''")}'`;

    const sourceVariant =
      typeof variant === "string" && (variant === "a" || variant === "b")
        ? variant
        : "";

    const userAgent = sanitizeForSheet(req.headers.get("user-agent") ?? "");
    const referral = sanitizeForSheet(
      typeof referral_code === "string" ? referral_code.trim() : "",
    );

    // A열부터 확실히 채우기: 다음 빈 행 번호를 구한 뒤 해당 행 A:F에 update
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: `${sheetRef}!A:A`,
    });
    const rows = existing.data.values ?? [];
    const nextRow = rows.length + 1;
    const updateRange = `${sheetRef}!A${nextRow}:F${nextRow}`;

    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: updateRange,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            trimmedEmail,
            normalizedPhone,
            userAgent,
            referral,
            sourceVariant,
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Collect API error:", error);
    return NextResponse.json(
      { error: "제출에 실패했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 },
    );
  }
}
