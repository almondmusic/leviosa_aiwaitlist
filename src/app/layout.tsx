import type { Metadata } from "next";
import "./globals.css";
import WaitlistModalProvider from "@/components/WaitlistModalProvider";

export const metadata: Metadata = {
  title: "레비오사 AI | 온라인 셀러를 위한 AI 에이전트",
  description:
    "온라인 셀러를 위한 AI 에이전트 서비스. 레비오사 AI와 함께 비즈니스를 성장시키세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="font-pretendard antialiased" suppressHydrationWarning>
        <WaitlistModalProvider>{children}</WaitlistModalProvider>
      </body>
    </html>
  );
}
