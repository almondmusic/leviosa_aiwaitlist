# 레비오사 AI 웨이트리스트

온라인 셀러를 위한 AI 에이전트 서비스 **레비오사 AI**의 대기 신청 랜딩 페이지입니다.

[viewtrap.com](https://viewtrap.com/)의 비즈니스 PT 구조를 참고하여 동일한 형태로 구성했습니다.

## 기능

- **탭 네비게이션**: 온라인 셀러 성공 공식 / 레비오사 AI 소개 / FAQ
- **성공 공식 섹션**: AI 에이전트 소개 및 가치 제안
- **서비스 소개**: 24시간 고객 응대, 다국어 지원 등 핵심 혜택
- **FAQ**: 자주 묻는 질문
- **대기 신청 폼**: 이메일·휴대폰 수집
- **고정 하단 CTA**: 어디서든 대기 신청 유도

## 실행 방법

```bash
npm install
cp .env.example .env.local   # 환경 변수 설정 (Google Sheets)
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 리드 수집 (Google Sheets)

대기 신청 데이터는 Google Sheets에 저장됩니다. 설정 방법은 [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) 참고.

- Vercel 배포 시: Settings → Environment Variables에 동일 변수 등록
- 컬럼: `created_at` | `email` | `phone` | `user_agent` | `referral_code`
- 추천인 코드: URL에 `?ref=코드` 포함 시 자동 기록 (예: `/waitlist?ref=PARTNER01`)

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Google Sheets API (리드 수집)