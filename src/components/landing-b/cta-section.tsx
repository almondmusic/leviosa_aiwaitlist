"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useWaitlist } from "./waitlist-context";

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const { open } = useWaitlist();

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
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-[#110d1c] via-[#1a1030] to-[#110d1c]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.18)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(192,132,252,0.08)_0%,_transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div
        className={`relative mx-auto max-w-3xl px-6 text-center transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {"지금 바로 "}
          <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
            {"시작"}
          </span>
          {"하세요"}
        </h2>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-white/60">
          반복적인 업무에서 벗어나 진짜 중요한 일에 집중하세요.
          <br />
          Leviosa AI가 당신의 성장 파트너가 되겠습니다.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-400 to-orange-500 px-8 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
          >
            무료 진단 받기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 bg-transparent px-8 text-white hover:bg-white/10 hover:text-white"
            onClick={open}
          >
            가입 대기 신청
          </Button>
        </div>
      </div>
    </section>
  );
}
