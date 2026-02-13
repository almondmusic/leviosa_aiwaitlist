# 레비오사 AI 웨이트리스트 — 파일 구조

## ✅ 버전관리 유지 (필수 소스)

```
leviosa_ai_waitlist/
├── src/                          # 앱 소스
│   ├── app/
│   │   ├── api/waitlist/route.ts  # 대기신청 API
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx              # 메인 랜딩
│   │   └── waitlist/page.tsx
│   └── components/
│       ├── CTAButton.tsx
│       ├── Footer.tsx
│       ├── Header.tsx
│       ├── HeroBanner.tsx
│       ├── TabNav.tsx
│       ├── WaitlistForm.tsx
│       ├── WaitlistModal.tsx
│       ├── WaitlistModalProvider.tsx
│       └── WaitlistPageClient.tsx
├── public/                       # 정적 자산 (이미지 등)
├── package.json
├── package-lock.json
├── next.config.js
├── next-env.d.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── README.md
├── .gitignore
└── PROJECT_STRUCTURE.md          # 이 파일
```

## ❌ .gitignore로 제외 (소스 아님 / 복원 가능)

| 분류      | 경로/패턴                              | 이유                 |
| --------- | -------------------------------------- | -------------------- |
| 빌드/캐시 | `.next/`, `out/`                       | Next 빌드 결과물     |
| 의존성    | `node_modules/`                        | `npm install`로 복원 |
| 환경변수  | `.env`, `.env.*`                       | 시크릿 보호          |
| OS/에디터 | `.DS_Store`, `.idea/` 등               | 로컬/IDE 전용        |
| 툴        | `.specstory/`, `.cursorindexingignore` | 툴 히스토리/설정     |

이후 `git status`에는 위 “필수 소스”만 추적됩니다.
