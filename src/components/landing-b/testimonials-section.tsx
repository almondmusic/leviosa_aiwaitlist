"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "김수현",
    role: "패션 스마트스토어 셀러",
    content:
      "매일 3시간씩 걸리던 상품 등록이 30분이면 끝납니다. 덕분에 상품 소싱에 더 집중할 수 있게 되었어요.",
    rating: 5,
    metric: "등록 시간 90% 절약",
  },
  {
    name: "이정민",
    role: "식품 스마트스토어 운영자",
    content:
      "고객 문의 응대가 정말 편해졌어요. AI가 기본 문의를 처리해주니 중요한 건만 직접 답변하면 됩니다.",
    rating: 5,
    metric: "CS 처리시간 80% 감소",
  },
  {
    name: "박도윤",
    role: "생활용품 다채널 셀러",
    content:
      "5개 마켓을 동시에 운영하는데 재고 관리가 한 곳에서 가능해져서 품절 사고가 거의 사라졌습니다.",
    rating: 5,
    metric: "품절 사고 95% 감소",
  },
  {
    name: "최예진",
    role: "화장품 스마트스토어 셀러",
    content:
      "상품명 최적화 기능 덕분에 검색 노출이 확 늘었어요. 매출이 한 달 만에 40% 올랐습니다.",
    rating: 5,
    metric: "매출 40% 성장",
  },
  {
    name: "한승우",
    role: "전자제품 온라인 셀러",
    content:
      "최저가 자동 업데이트가 정말 편리해요. 경쟁사 가격을 일일이 확인할 필요가 없어졌습니다.",
    rating: 5,
    metric: "가격 경쟁력 3배 향상",
  },
  {
    name: "정미래",
    role: "유아용품 셀러",
    content:
      "상세페이지 자동 생성이 대박이에요. 전문 디자이너 없이도 퀄리티 높은 상세페이지를 만들 수 있습니다.",
    rating: 5,
    metric: "디자인 비용 70% 절감",
  },
  {
    name: "오진우",
    role: "스포츠용품 다채널 셀러",
    content:
      "대량 등록 기능 덕분에 신상품 200개를 한 번에 올릴 수 있었어요. 이전에는 일주일 걸리던 작업이에요.",
    rating: 5,
    metric: "등록 속도 10배 향상",
  },
  {
    name: "윤서아",
    role: "인테리어 소품 셀러",
    content:
      "AI 고객 응대 덕분에 밤에도 고객 문의가 바로 처리돼요. 고객 만족도가 눈에 띄게 올랐습니다.",
    rating: 5,
    metric: "고객 만족도 4.8점",
  },
]

const partnerLogos = ["네이버", "카페24", "쿠팡", "11번가", "위메프"]

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

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { ref: sectionRef, inView } = useInView(0.1)

  const itemsPerView = 3
  const maxIndex = testimonials.length - itemsPerView

  const goTo = useCallback(
    (index: number, dir?: number) => {
      if (isAnimating) return
      const nextIndex = Math.max(0, Math.min(index, maxIndex))
      if (nextIndex === current) return
      setDirection(dir ?? (nextIndex > current ? 1 : -1))
      setIsAnimating(true)
      setCurrent(nextIndex)
      setTimeout(() => setIsAnimating(false), 500)
    },
    [current, isAnimating, maxIndex]
  )

  const goNext = useCallback(() => {
    const nextIndex = current >= maxIndex ? 0 : current + 1
    goTo(nextIndex, 1)
  }, [current, maxIndex, goTo])

  const goPrev = useCallback(() => {
    const prevIndex = current <= 0 ? maxIndex : current - 1
    goTo(prevIndex, -1)
  }, [current, maxIndex, goTo])

  useEffect(() => {
    timeoutRef.current = setTimeout(goNext, 4000)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current, goNext])

  return (
    <section id="testimonials" ref={sectionRef} className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#110d1c]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.12)_0%,_transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(192,132,252,0.06)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className={`mb-14 flex flex-col items-center justify-between gap-6 text-center transition-all duration-700 md:flex-row md:text-left ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-amber-300 backdrop-blur-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
              Trusted by thousands
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {"셀러들의 "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                {"실제 후기"}
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-lg text-white/50">
              이미 많은 셀러들이 Leviosa AI로 매출 성장을 경험하고 있습니다
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all hover:border-violet-400/30 hover:bg-white/10 hover:text-white"
              aria-label="이전 후기"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all hover:border-violet-400/30 hover:bg-white/10 hover:text-white"
              aria-label="다음 후기"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all delay-200 duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${current * (100 / itemsPerView + 2)}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-full shrink-0 md:w-[calc(33.333%-1rem)]"
              >
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-violet-400/20 hover:bg-white/[0.06]">
                  <div className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    <span className="inline-block h-1 w-1 rounded-full bg-emerald-400" />
                    {t.metric}
                  </div>

                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-white/70">
                    {`"${t.content}"`}
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-400 text-sm font-bold text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-white/40">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === i
                  ? "w-8 bg-gradient-to-r from-violet-400 to-purple-400"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`후기 ${i + 1}`}
            />
          ))}
        </div>

        <div
          className={`mt-20 text-center transition-all delay-400 duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-6 text-sm font-medium tracking-widest text-white/30 uppercase">
            연동 가능한 플랫폼
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partnerLogos.map((logo) => (
              <div
                key={logo}
                className="flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 text-sm font-medium text-white/50 transition-all hover:border-violet-400/20 hover:text-white/70"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
