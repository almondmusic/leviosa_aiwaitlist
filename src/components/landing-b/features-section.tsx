"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, Search, Bot, FileText, TrendingDown, MessageSquare, BarChart3 } from "lucide-react"

const features = [
  {
    id: "product-search",
    badge: "상품 검색",
    title: "원하는 상품을\n빠르게 찾기",
    description: "키워드 기반 상품 검색과 가격 필터, 배송 옵션으로 빠른 상품 탐색",
    icon: Search,
    color: "bg-violet-50",
    badgeColor: "bg-violet-100 text-violet-700",
    size: "large",
  },
  {
    id: "product-name",
    badge: "상품명 최적화",
    title: "검색 노출을 높이는\nAI 상품명",
    description: "AI가 기존 상품명을 분석하여 검색 노출에 최적화된 상품명을 자동 추천",
    icon: Bot,
    color: "bg-emerald-50",
    badgeColor: "bg-emerald-100 text-emerald-700",
    size: "large",
  },
  {
    id: "detail-page",
    badge: "상세페이지",
    title: "매력적인 상세페이지를\n자동으로 생성",
    description: "이미지 업로드만으로 AI가 자동으로 매력적인 상세페이지를 생성합니다",
    icon: FileText,
    color: "bg-amber-50",
    badgeColor: "bg-amber-100 text-amber-700",
    size: "medium",
  },
  {
    id: "price-update",
    badge: "최저가 업데이트",
    title: "경쟁력 있는\n가격을 자동으로",
    description: "매입가, 배송비, 수수료율 기반 최적 가격 자동 산출",
    icon: TrendingDown,
    color: "bg-fuchsia-50",
    badgeColor: "bg-fuchsia-100 text-fuchsia-700",
    size: "medium",
  },
  {
    id: "cs-bot",
    badge: "CS 자동 응대",
    title: "고객 문의를 AI가 처리",
    description: "24시간 AI 챗봇이 반복 문의를 자동으로 처리합니다",
    icon: MessageSquare,
    color: "bg-purple-50",
    badgeColor: "bg-purple-100 text-purple-700",
    size: "medium",
  },
  {
    id: "analytics",
    badge: "매출 분석",
    title: "데이터 기반의 성장 전략",
    description: "통합 대시보드에서 매출과 주문을 실시간 분석",
    icon: BarChart3,
    color: "bg-sky-50",
    badgeColor: "bg-sky-100 text-sky-700",
    size: "medium",
  },
]

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

function FeatureCardVisual({ feature }: { feature: (typeof features)[number] }) {
  if (feature.id === "product-search") {
    return (
      <div className="mt-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 rounded-xl bg-card p-3 shadow-sm border border-border/40">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{"여성 가디건 봄 신상..."}</span>
        </div>
        <div className="flex flex-col gap-1.5">
          {["여성 니트 가디건 봄 신상", "오버핏 가디건 베이직", "크롭 가디건 데일리"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg bg-card/80 px-3 py-2.5 shadow-sm border border-border/30">
              <div className={`h-8 w-8 rounded-lg ${i === 0 ? "bg-violet-100" : i === 1 ? "bg-emerald-100" : "bg-amber-100"}`} />
              <div className="flex-1">
                <div className="text-xs font-medium text-foreground">{item}</div>
                <div className="text-[10px] text-muted-foreground">{`${(12900 + i * 3200).toLocaleString()}원`}</div>
              </div>
              <div className="text-[10px] font-medium bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">{"선택"}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (feature.id === "product-name") {
    return (
      <div className="mt-6 flex flex-col gap-3">
        <div className="rounded-xl bg-card p-3 shadow-sm border border-border/40">
          <div className="mb-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{"Before"}</div>
          <div className="text-xs text-foreground/70 line-through">{"가디건 여성 니트"}</div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500">
            <ArrowRight className="h-3 w-3 text-white rotate-90" />
          </div>
        </div>
        <div className="rounded-xl bg-card p-3 shadow-sm border border-emerald-200/60 ring-1 ring-emerald-200/30">
          <div className="mb-2 text-[10px] font-semibold text-emerald-600 uppercase tracking-wider">{"AI Optimized"}</div>
          <div className="text-xs font-medium text-foreground">{"[봄신상] 여성 오버핏 니트 가디건 | 데일리 베이직 봄 아우터"}</div>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-medium text-emerald-700">{"검색 노출 +340%"}</span>
            <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[9px] font-medium text-violet-700">{"클릭률 +28%"}</span>
          </div>
        </div>
      </div>
    )
  }

  if (feature.id === "detail-page") {
    return (
      <div className="mt-4 flex items-center gap-3">
        <div className="flex-1 flex flex-col items-center gap-2">
          <div className="w-full aspect-[3/4] rounded-lg bg-card shadow-sm border border-border/40 flex flex-col items-center justify-center p-2">
            <div className="w-full h-1/2 rounded bg-amber-100/60 mb-2" />
            <div className="w-3/4 h-1.5 rounded-full bg-muted mb-1" />
            <div className="w-1/2 h-1.5 rounded-full bg-muted" />
          </div>
          <span className="text-[10px] text-muted-foreground">{"이미지 업로드"}</span>
        </div>
        <ArrowRight className="h-4 w-4 text-amber-500 shrink-0" />
        <div className="flex-1 flex flex-col items-center gap-2">
          <div className="w-full aspect-[3/4] rounded-lg bg-card shadow-sm border border-amber-200/60 ring-1 ring-amber-100 flex flex-col p-2 gap-1">
            <div className="w-full h-1/3 rounded bg-amber-100/80" />
            <div className="w-full h-1 rounded-full bg-foreground/10" />
            <div className="w-3/4 h-1 rounded-full bg-foreground/10" />
            <div className="w-full h-1/4 rounded bg-amber-50" />
            <div className="w-2/3 h-1 rounded-full bg-foreground/10" />
          </div>
          <span className="text-[10px] font-medium text-amber-700">{"AI 상세페이지"}</span>
        </div>
      </div>
    )
  }

  if (feature.id === "price-update") {
    return (
      <div className="mt-4 flex flex-col gap-2">
      <div className="rounded-lg bg-card p-3 shadow-sm border border-border/40">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-medium text-muted-foreground">{"현재 가격"}</span>
            <span className="text-xs font-bold text-foreground">{"25,900원"}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-fuchsia-600">{"최적 가격"}</span>
            <span className="text-xs font-bold text-fuchsia-600">{"21,400원"}</span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
            <div className="h-1.5 w-[72%] rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-500 transition-all" />
          </div>
          <div className="mt-1 text-[9px] text-muted-foreground text-right">{"마진율 18.2%"}</div>
        </div>
      </div>
    )
  }

  if (feature.id === "cs-bot") {
    return (
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center shrink-0">
            <span className="text-[8px] font-bold text-muted-foreground">{"고객"}</span>
          </div>
          <div className="rounded-xl rounded-tl-sm bg-card px-3 py-2 text-[11px] text-foreground shadow-sm border border-border/40">
            {"배송 언제 도착하나요?"}
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="rounded-xl rounded-tr-sm bg-gradient-to-r from-violet-600 to-purple-600 px-3 py-2 text-[11px] text-white shadow-sm">
            {"고객님의 주문 상품은 내일 도착 예정입니다!"}
          </div>
          <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
            <Bot className="h-3 w-3 text-violet-600" />
          </div>
        </div>
        <div className="flex items-center gap-1 justify-end">
          <span className="text-[9px] text-emerald-600 font-medium">{"자동 응답"}</span>
          <span className="text-[9px] text-muted-foreground">{"0.3초"}</span>
        </div>
      </div>
    )
  }

  // analytics
  return (
    <div className="mt-4 flex flex-col gap-2">
      <div className="rounded-lg bg-card p-3 shadow-sm border border-border/40">
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="h-3 w-3 text-sky-600" />
          <span className="text-[10px] font-semibold text-foreground">{"주간 매출 리포트"}</span>
        </div>
        <div className="flex items-end gap-1 h-12">
          {[40, 55, 35, 65, 80, 60, 90].map((height, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t ${i === 6 ? "bg-sky-500" : "bg-sky-200"}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[9px] text-muted-foreground">{"월"}</span>
          <span className="text-[9px] font-medium text-sky-600">{"+23% 성장"}</span>
          <span className="text-[9px] text-muted-foreground">{"일"}</span>
        </div>
      </div>
    </div>
  )
}

export function FeaturesSection() {
  const { ref: sectionRef, inView } = useInView(0.05)

  return (
    <section id="features" ref={sectionRef} className="relative py-20 lg:py-28">
      {/* Layered purple ambient glows on warm cream */}
      <div className="pointer-events-none absolute top-0 left-1/4 -z-10 h-[500px] w-[700px] rounded-full bg-[radial-gradient(ellipse,_rgba(139,92,246,0.06)_0%,_transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-1/4 -z-10 h-[400px] w-[500px] rounded-full bg-[radial-gradient(ellipse,_rgba(192,132,252,0.05)_0%,_transparent_70%)] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-14 text-center transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {"Leviosa AI는 셀러를 위한"}
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">{"올인원 AI 자동화 플랫폼"}</span>
            {"입니다"}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const isLarge = feature.size === "large"
            return (
              <div
                key={feature.id}
                className={`group relative overflow-hidden rounded-2xl ${feature.color} p-6 transition-all duration-700 hover:shadow-lg ${
                  isLarge && i === 0 ? "lg:col-span-1 lg:row-span-2" : ""
                } ${isLarge && i === 1 ? "lg:col-span-2 lg:row-span-1" : ""} ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: inView ? `${100 + i * 80}ms` : "0ms" }}
              >
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${feature.badgeColor}`}>
                    {feature.badge}
                  </span>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {"더 알아보기"}
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>

                <h3 className="mt-4 text-xl font-bold leading-snug text-foreground whitespace-pre-line lg:text-2xl">
                  {feature.title}
                </h3>

                <FeatureCardVisual feature={feature} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
