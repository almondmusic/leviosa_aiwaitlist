import { NextRequest, NextResponse } from "next/server";

function safeParse(s: string): unknown {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  const isJson = request.headers.get("X-Requested-With") === "WaitlistModal";

  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const phone = formData.get("phone")?.toString() ?? "";
    const sellerStage = formData.get("seller_stage")?.toString() ?? "";

    // 모달에서 보낸 추가 필드
    const occupation = formData.get("occupation")?.toString() ?? "";
    const timeSlots = formData.get("timeSlots")?.toString() ?? "";
    const callSlot1 = formData.get("callSlot1")?.toString() ?? "";
    const callSlot2 = formData.get("callSlot2")?.toString() ?? "";
    const callSlot3 = formData.get("callSlot3")?.toString() ?? "";

    if (!email) {
      if (isJson) {
        return NextResponse.json(
          { error: "이메일을 입력해 주세요." },
          { status: 400 },
        );
      }
      return NextResponse.redirect(
        new URL("/waitlist?error=email_required", request.url),
        { status: 302 },
      );
    }

    // TODO: 저장소 연결 (DB, 스프레드시트 등)
    const payload = {
      name,
      email,
      phone,
      sellerStage,
      occupation,
      timeSlots: timeSlots ? timeSlots.split(",") : [],
      callSlot1: callSlot1 ? safeParse(callSlot1) : null,
      callSlot2: callSlot2 ? safeParse(callSlot2) : null,
      callSlot3: callSlot3 ? safeParse(callSlot3) : null,
      // 나머지 필드도 필요 시 formData.get() 로 추가
    };
    console.log("Waitlist signup:", payload);

    if (isJson) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.redirect(new URL("/waitlist?success=1", request.url), {
      status: 302,
    });
  } catch (error) {
    console.error("Waitlist error:", error);
    if (isJson) {
      return NextResponse.json(
        { error: "서버 오류가 발생했습니다." },
        { status: 500 },
      );
    }
    return NextResponse.redirect(
      new URL("/waitlist?error=server_error", request.url),
      { status: 302 },
    );
  }
}
