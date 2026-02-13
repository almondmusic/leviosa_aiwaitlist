# Google Sheets 리드 수집 설정 가이드

## 1️⃣ 구글 시트 준비

1. [Google Sheets](https://sheets.google.com)에서 새 스프레드시트 생성
2. 첫 행에 열 제목 입력:
   - **A**: `created_at`
   - **B**: `email`
   - **C**: `phone`
   - **D**: `user_agent`
   - **E**: `referral_code`
3. URL에서 시트 ID 복사: `https://docs.google.com/spreadsheets/d/여기ID/edit`

## 2️⃣ Google Cloud 세팅

1. [Google Cloud Console](https://console.cloud.google.com) 접속
2. 새 프로젝트 생성
3. **Google Sheets API** 검색 후 활성화
4. **서비스 계정** 생성 (IAM 및 관리자 → 서비스 계정)
5. JSON 키 발급 후 다운로드
6. JSON 파일에서 `client_email`, `private_key` 확인
7. 구글 시트 **공유** 버튼 → 서비스 계정 이메일을 **편집자** 권한으로 추가

## 3️⃣ 환경 변수

`.env.local` 또는 Vercel Environment Variables에 추가:

### 방법 A: Base64 (권장 - 401 오류 방지)

서비스 계정 JSON 전체를 Base64로 인코딩해 한 줄로 넣습니다.

```bash
# 터미널에서 JSON 파일을 Base64로 인코딩
cat your-service-account-key.json | base64
```

`.env.local`:
```
GOOGLE_CREDENTIALS_BASE64=eyJ0eXBlIjoic2VydmljZV9hY2NvdW50Ii4uLn0=
GOOGLE_SHEET_ID=1CTADnx8pteWvBosatnEoDr_MCNJwrbWm7BGZMLaI4F0
```

### 방법 B: 개별 변수

| 변수 | 설명 |
|------|------|
| `GOOGLE_CLIENT_EMAIL` | 서비스 계정 이메일 |
| `GOOGLE_PRIVATE_KEY` | JSON의 `private_key` (줄바꿈 `\n` 그대로 포함, 따옴표로 감싸기) |
| `GOOGLE_SHEET_ID` | 스프레드시트 ID |

⚠️ `private_key`는 `"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"` 형태로, `\n`을 그대로 두고 따옴표로 감싸세요.

### 401 Unauthorized 발생 시

1. **방법 A 시도**: Base64 방식이 포맷 오류를 줄여줍니다.
2. **시트 공유 확인**: 구글 시트 → 공유 → 서비스 계정 이메일을 **편집자**로 추가했는지 확인.
3. **API 활성화**: Google Cloud Console에서 **Google Sheets API**가 활성화돼 있는지 확인.

## 4️⃣ 보안 (적용됨)

- **Honeypot**: 봇이 채우는 숨김 필드로 스팸 차단
- **이메일 형식 검증**: 정규식으로 유효성 검사
- **Rate limit**: 추후 Upstash 등으로 확장 가능

## 5️⃣ 데이터 흐름

```
프론트 input → POST /api/collect → Google Sheets API append → 구글시트 저장
```

## 6️⃣ Vercel 환경 변수 적용

1. Vercel 대시보드 → 프로젝트 선택 → **Settings** → **Environment Variables**
2. 아래 3개 변수 추가:

| Name | Value | Environment |
|------|-------|-------------|
| `GOOGLE_CREDENTIALS_BASE64` | `cat key.json \| base64` 결과 전체 붙여넣기 | Production, Preview, Development |
| `GOOGLE_SHEET_ID` | 스프레드시트 URL의 `d/.../edit` 사이 ID | Production, Preview, Development |
| `GOOGLE_SHEET_NAME` | 첫 시트 이름 (선택, 없으면 자동 조회) | Production, Preview, Development |

3. 저장 후 **Redeploy** 하면 적용됨
