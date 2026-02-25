"use client"

import { useState, useEffect, useRef } from "react"
import { Clock, MessageSquare, Package, ArrowRight, X } from "lucide-react"

const problems = [
  {
    icon: Clock,
    problem: "상품을 일일이 등록하느라 시간이 부족해요",
    solution:
      "AI가 상품 정보를 불러와 자동으로 등록하고 수정합니다. 대량 등록도 엑셀 한 번으로 끝.",
    detail:
      "네이버 커머스 API와 연동하여 상품 정보를 자동으로 크롤링하고, 카테고리 매칭부터 상세 페이지 생성까지 원클릭으로 처리합니다. 기존 대비 등록 시간을 90% 이상 절약할 수 있습니다.",
  },
  {
    icon: MessageSquare,
    problem: "고객 문의가 쏟아져 응답이 늦어요",
    solution:
      "챗봇이 고객 문의에 24시간 응답합니다. 반복 문의는 자동으로, 복잡한 건만 직접.",
    detail:
      "LLM 기반 챗봇이 주문 조회, 배송 상태, 교환/환불 등 반복 문의를 자동으로 처리합니다. 셀러가 설정한 답변 가이드라인에 따라 일관된 톤으로 응대하며, 복잡한 문의만 알림으로 전달합니다.",
  },
  {
    icon: Package,
    problem: "재고 · 주문 관리가 뒤엉켜요",
    solution:
      "통합 대시보드에서 재고와 주문을 실시간으로 관리합니다. 여러 채널도 한눈에.",
    detail:
      "스마트스토어, 쿠팡, 11번가 등 여러 마켓의 재고와 주문을 하나의 대시보드에서 실시간으로 확인하고 관리합니다. 재고 부족 알림과 자동 발주 기능으로 품절 사고를 방지합니다.",
  },
]

function useInView(threshold = 0.15) {
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

export function ProblemsSection() {
  const [openDetail, setOpenDetail] = useState<number | null>(null)
  const { ref: sectionRef, inView } = useInView(0.1)

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute top-1/3 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.05)_0%,_transparent_70%)] blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            이런 고민, 해본 적 있으시죠?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            스마트스토어 운영의 반복적인 문제, Leviosa AI가 해결합니다
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((item, i) => (
            <div
              key={i}
              className={`group relative flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-700 hover:shadow-lg hover:border-violet-200/50 hover:-translate-y-1 ${
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: inView ? `${200 + i * 150}ms` : "0ms" }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-50 to-purple-100 transition-transform duration-300 group-hover:scale-110">
                <item.icon className="h-6 w-6 text-violet-600" />
              </div>
              <p className="mb-3 text-xs font-bold tracking-widest text-amber-500 uppercase">
                Problem
              </p>
              <h3 className="mb-4 text-lg font-semibold leading-snug text-foreground">
                {item.problem}
              </h3>
              <div className="mb-4 h-px w-full bg-gradient-to-r from-border via-violet-200/50 to-border" />
              <p className="mb-1 text-xs font-bold tracking-widest bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent uppercase">
                Solution
              </p>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.solution}
              </p>
              <button
                onClick={() => setOpenDetail(i)}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent transition-all hover:gap-2"
              >
                자세히 보기
                <ArrowRight className="h-3.5 w-3.5 text-violet-600" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {openDetail !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-6 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setOpenDetail(null)}
        >
          <div
            className="relative max-w-lg rounded-2xl border border-border bg-card p-8 shadow-xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenDetail(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="닫기"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-50 to-purple-100">
              {(() => {
                const Icon = problems[openDetail].icon
                return <Icon className="h-5 w-5 text-violet-600" />
              })()}
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">
              {problems[openDetail].problem}
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {problems[openDetail].detail}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
