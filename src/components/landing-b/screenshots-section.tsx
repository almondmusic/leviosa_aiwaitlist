"use client"

import { useState } from "react"
import Image from "next/image"

const screenshots = [
  {
    src: "/images/feature-product-search.png",
    alt: "Leviosa AI 상품 검색 화면",
    title: "상품 검색",
    description:
      "키워드 기반 상품 검색과 가격 필터, 배송 옵션, 정렬 순서를 지정하여 네이버 커머스 API를 활용한 빠른 상품 탐색이 가능합니다.",
  },
  {
    src: "/images/feature-product-name.png",
    alt: "Leviosa AI 상품명 최적화 화면",
    title: "상품명 최적화",
    description:
      "AI가 기존 상품명을 분석하여 검색 노출에 최적화된 상품명을 자동으로 추천합니다. 개별 및 일괄 처리를 모두 지원합니다.",
  },
  {
    src: "/images/feature-detail-page.png",
    alt: "Leviosa AI 상세페이지 생성 화면",
    title: "상세페이지 생성",
    description:
      "이미지를 업로드하면 AI가 자동으로 매력적인 상세페이지를 생성합니다. 개별/일괄 처리와 이미지 수량 선택이 가능합니다.",
  },
  {
    src: "/images/feature-price-update.png",
    alt: "Leviosa AI 최저가 업데이트 화면",
    title: "최저가 업데이트",
    description:
      "매입가격, 배송비, 수수료율, 최소 마진율을 기반으로 경쟁력 있는 최저가를 자동으로 산출하고 업데이트합니다.",
  },
]

export function ScreenshotsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="screenshots" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            실제 플랫폼 화면을 확인하세요
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            직관적인 인터페이스로 누구나 쉽게 사용할 수 있습니다
          </p>
        </div>

        {/* Tab navigation */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {screenshots.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                activeIndex === i
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground border border-border hover:text-foreground"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Screenshot display */}
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          <div className="flex items-center gap-2 border-b border-border px-5 py-3">
            <div className="h-3 w-3 rounded-full bg-destructive/40" />
            <div className="h-3 w-3 rounded-full bg-accent/50" />
            <div className="h-3 w-3 rounded-full bg-primary/30" />
            <span className="ml-3 text-xs text-muted-foreground">
              Leviosa AI - {screenshots[activeIndex].title}
            </span>
          </div>
          <div className="relative aspect-[16/8] w-full bg-muted">
            <Image
              src={screenshots[activeIndex].src}
              alt={screenshots[activeIndex].alt}
              fill
              className="object-contain object-top p-2"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority={activeIndex === 0}
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 mx-auto max-w-2xl text-center">
          <h3 className="text-xl font-semibold text-foreground">
            {screenshots[activeIndex].title}
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {screenshots[activeIndex].description}
          </p>
        </div>
      </div>
    </section>
  )
}
