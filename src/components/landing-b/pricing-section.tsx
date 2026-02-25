"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useWaitlist } from "./waitlist-context";

const plans = [
  {
    name: "Trial",
    price: "무료",
    period: "",
    description: "스마트스토어를 처음 시작하는 셀러를 위한 기본 플랜",
    features: [
      "상품 검색 월 50건",
      "상품 검색 월 50건",
      "기본 AI 응대",
      "단일 채널 관리",
      "기본 매출 리포트",
      "이메일 지원",
    ],
    cta: "무료로 시작하기",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "50,000",
    period: "/월",
    description: "성장하는 중소규모 셀러를 위한 핵심 플랜",
    features: [
      "상품 검색 월 3000회",
      "상품 검색 월 3000회",
      "고급 AI 응대 (맞춤 가이드라인)",
      "상세 매출 분석 리포트",
      "상품명 최적화",
      "상세페이지 자동 생성",
      "최저가 자동 업데이트",
      "우선 이메일 + 채팅 지원",
    ],
    cta: "Starter 시작하기",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "별도 문의",
    period: "",
    description: "대형 셀러 및 기업을 위한 맞춤형 솔루션",
    features: [
      "Starter 플랜의 모든 기능",
      "무제한 채널 연동",
      "API 연동 · 맞춤 개발",
      "전담 매니저 배정",
      "온보딩 교육 제공",
    ],
    cta: "문의하기",
    highlighted: false,
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function PricingSection() {
  const { ref: sectionRef, inView } = useInView(0.1);
  const { open } = useWaitlist();

  return (
    <section id="pricing" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-[500px] w-[700px] rounded-full bg-[radial-gradient(ellipse,_rgba(168,85,247,0.06)_0%,_transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute top-20 left-1/3 -z-10 h-[350px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.04)_0%,_transparent_70%)] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            합리적인 요금제
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            비즈니스 규모에 맞는 플랜을 선택하세요
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition-all duration-700 hover:shadow-lg ${
                plan.highlighted
                  ? "border-violet-300/50 bg-gradient-to-b from-violet-50/50 to-card shadow-lg ring-1 ring-violet-200/30"
                  : "border-border bg-card hover:border-violet-200/40"
              } ${inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              style={{ transitionDelay: inView ? `${200 + i * 150}ms` : "0ms" }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-4 py-1 text-xs font-semibold text-white shadow-md">
                  추천
                </div>
              )}
              <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-foreground">
                  {plan.price.startsWith("별도") ? "" : "\u20A9"}
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                )}
              </div>
              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlighted ? "text-violet-600" : "text-violet-500/70"}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 w-full transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md shadow-violet-500/20 hover:shadow-violet-500/30 hover:from-violet-700 hover:to-purple-700"
                    : "bg-muted text-foreground border border-border hover:bg-muted/80"
                }`}
                onClick={open}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
