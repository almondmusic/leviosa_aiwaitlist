import { Shield } from "lucide-react"
import { LogoWordmark } from "./logo-wordmark"

const footerLinks = {
  제품: ["기능 소개", "요금제", "업데이트", "로드맵"],
  지원: ["고객 센터", "개발자 문서", "API 레퍼런스", "커뮤니티"],
  회사: ["회사 소개", "채용", "블로그", "뉴스"],
  법적: ["이용약관", "개인정보 처리방침", "쿠키 정책"],
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="pr-2">
              <LogoWordmark />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              네이버 스마트스토어 셀러를 위한
              <br />
              AI 자동화 플랫폼
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-3.5 w-3.5" />
              <span>데이터 보안 및 개인정보 보호</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-foreground">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Leviosa AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              한국어
            </a>
            <span className="text-xs text-border">|</span>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              English
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
