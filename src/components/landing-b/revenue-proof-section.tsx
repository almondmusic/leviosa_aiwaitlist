"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Plane, Clock, Package, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWaitlist } from "./waitlist-context"

const stats = [
  { label: "월 매출", value: "1억+", suffix: "원 달성", icon: TrendingUp },
  { label: "주문 처리", value: "50+", suffix: "건/일", icon: Package },
  { label: "수동 작업", value: "90%", suffix: "절감", icon: Clock },
]

const timeline = [
  {
    year: "2020",
    title: "연봉 3,000만 원 개발자",
    description: "코드를 짜며 안정적이지만 느린 커리어를 시작했습니다.",
    mood: "neutral" as const,
  },
  {
    year: "2021",
    title: "투자 실패, 빚 1억",
    description:
      "감정으로 들어간 돈은 감정으로 무너졌습니다. 빠른 돈은 없었습니다.",
    mood: "negative" as const,
  },
  {
    year: "2022",
    title: "연봉 1억, 빚 청산",
    description:
      "개발자로 복귀해 빚을 갚았지만, 깨달았습니다. 고연봉은 안정일 뿐, 자유는 아니라는 것을.",
    mood: "neutral" as const,
  },
  {
    year: "2023",
    title: "셀러 시작, 병목 발견",
    description:
      "매출이 커질수록 실수와 피로가 쌓였습니다. 이건 노력이 아니라 구조의 문제였습니다.",
    mood: "neutral" as const,
  },
  {
    year: "2024",
    title: "자동화 도입, 월매출 1억 돌파",
    description:
      "반복을 코드로 바꾸고, 판단을 로직으로 만들었습니다. 구조가 결과를 만들었습니다.",
    mood: "positive" as const,
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

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: string
  suffix: string
  inView: boolean
}) {
  const numericPart = target.replace(/[^0-9]/g, "")
  const nonNumericSuffix = target.replace(/[0-9]/g, "")
  const [count, setCount] = useState(0)
  const targetNum = parseInt(numericPart, 10)

  useEffect(() => {
    if (!inView || isNaN(targetNum)) return
    let frame: number
    const duration = 1500
    const start = performance.now()
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * targetNum))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [inView, targetNum])

  return (
    <span>
      {isNaN(targetNum) ? target : count}
      {nonNumericSuffix}
      <span className="ml-1 text-base font-normal text-white/50">{suffix}</span>
    </span>
  )
}

export function RevenueProofSection() {
  const { ref: sectionRef, inView } = useInView(0.08)
  const { open } = useWaitlist()

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#120e1e] via-[#0e0b1a] to-[#120e1e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,191,36,0.06)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.06)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mb-20 text-center transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1.5 text-sm font-medium text-amber-300">
            <Plane className="h-3.5 w-3.5" />
            Backed by real results
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {"퍼스트 클래스로 두바이 가는 동안,"}
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              {"하루 매출 1,000만 원."}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50">
            서울대 출신 개발자가 빚 1억을 갚고, 자유를 찾기 위해
            <br className="hidden sm:block" />
            매출 1억을 달성한 이야기입니다.
          </p>
        </div>

        {/* Stats row */}
        <div
          className={`mb-20 grid grid-cols-1 gap-4 sm:grid-cols-3 transition-all delay-200 duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-amber-400/20 hover:bg-white/[0.06]"
              style={{
                transitionDelay: inView ? `${300 + i * 100}ms` : "0ms",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10">
                  <stat.icon className="h-6 w-6 text-amber-400" />
                </div>
                <p className="text-sm font-medium text-white/40">{stat.label}</p>
                <p className="mt-2 text-4xl font-extrabold text-white">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div
          className={`relative transition-all delay-400 duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h3 className="mb-12 text-center text-xl font-semibold text-white/70">
            어떻게 가능했을까?
          </h3>
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-white/5 via-white/15 to-white/5 md:left-1/2 md:-translate-x-px" />

            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative mb-12 flex items-start gap-6 transition-all duration-500 last:mb-0 md:gap-0 ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{
                  transitionDelay: inView ? `${600 + i * 150}ms` : "0ms",
                }}
              >
                {/* Mobile layout */}
                <div className="md:hidden">
                  <div
                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
                      item.mood === "positive"
                        ? "border-amber-400/40 bg-amber-400/10 text-amber-300"
                        : item.mood === "negative"
                          ? "border-red-400/30 bg-red-400/10 text-red-300"
                          : "border-white/20 bg-white/5 text-white/60"
                    }`}
                  >
                    {item.year.slice(2)}
                  </div>
                </div>
                <div className="flex-1 md:hidden">
                  <p className="text-xs font-medium text-white/40">{item.year}</p>
                  <h4
                    className={`mt-1 text-base font-bold ${
                      item.mood === "positive"
                        ? "text-amber-300"
                        : item.mood === "negative"
                          ? "text-red-300"
                          : "text-white"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {item.description}
                  </p>
                </div>

                {/* Desktop layout */}
                <div
                  className={`hidden w-1/2 md:block ${
                    i % 2 === 0 ? "pr-12 text-right" : "order-2 pl-12"
                  }`}
                >
                  <p className="text-xs font-medium text-white/40">{item.year}</p>
                  <h4
                    className={`mt-1 text-lg font-bold ${
                      item.mood === "positive"
                        ? "text-amber-300"
                        : item.mood === "negative"
                          ? "text-red-300"
                          : "text-white"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {item.description}
                  </p>
                </div>

                {/* Center dot - desktop */}
                <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-xs font-bold ${
                      item.mood === "positive"
                        ? "border-amber-400/40 bg-amber-400/10 text-amber-300"
                        : item.mood === "negative"
                          ? "border-red-400/30 bg-red-400/10 text-red-300"
                          : "border-white/20 bg-white/5 text-white/60"
                    }`}
                  >
                    {item.year.slice(2)}
                  </div>
                </div>

                {/* Spacer for even items on desktop */}
                {i % 2 === 0 && (
                  <div className="hidden w-1/2 md:block" />
                )}
                {i % 2 !== 0 && (
                  <div className="hidden w-1/2 md:order-1 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quote CTA */}
        <div
          className={`mt-20 text-center transition-all delay-700 duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-sm">
            <blockquote className="text-lg font-medium leading-relaxed text-white/80">
              {"\"사람으로 버티는 순간, 성장은 리스크가 됩니다.\""}
            </blockquote>
            <p className="mt-4 text-sm text-white/40">
              {"감정과 집중력에 의존하는 운영은 언젠가 반드시 터집니다."}
              <br />
              {"구조가 바뀌면, 결과가 바뀝니다."}
            </p>
            <Button
              className="mt-8 bg-gradient-to-r from-amber-400 to-orange-500 px-8 text-sm font-semibold text-[#120e1e] shadow-lg shadow-amber-500/20 transition-all hover:shadow-amber-500/30"
              onClick={open}
            >
              {"지금 시작하기"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
