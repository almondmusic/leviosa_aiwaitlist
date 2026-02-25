"use client";

import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "어떤 스마트스토어와 연동되나요?",
    answer:
      "네이버 스마트스토어를 기본으로 지원하며, 쿠팡, 11번가, 카페24, 위메프 등 주요 이커머스 플랫폼과의 연동을 지원합니다. 네이버 커머스 API를 통해 실시간으로 데이터를 동기화합니다.",
  },
  {
    question: "대기 신청 후 어떤 자료를 받나요?",
    answer:
      "가입 대기 신청을 하시면 Leviosa AI 플랫폼의 상세 기능 소개서, 도입 가이드, 그리고 얼리어답터 전용 할인 혜택 안내를 이메일로 받아보실 수 있습니다.",
  },
  {
    question: "데이터는 안전하게 보호되나요?",
    answer:
      "모든 데이터는 AES-256 암호화를 적용하여 저장되며, TLS 1.3 프로토콜을 통해 전송됩니다. 정보보호 관리체계(ISMS) 인증을 준비 중이며, 개인정보는 관련 법령에 따라 엄격하게 관리됩니다.",
  },
  {
    question: "기존 상품 데이터를 마이그레이션할 수 있나요?",
    answer:
      "네, 엑셀 파일 업로드를 통해 기존 상품 데이터를 일괄 마이그레이션할 수 있습니다. Starter 이상 플랜에서는 전담 지원팀이 마이그레이션 과정을 도와드립니다.",
  },
  {
    question: "무료 플랜에서 유료로 전환하면 데이터가 유지되나요?",
    answer:
      "네, 모든 데이터는 플랜 전환 시에도 그대로 유지됩니다. 업그레이드는 즉시 적용되며, 다운그레이드 시에도 데이터 손실 없이 기능만 제한됩니다.",
  },
  {
    question: "AI 응대 품질은 어떻게 관리되나요?",
    answer:
      "셀러가 직접 답변 가이드라인과 톤을 설정할 수 있으며, AI 응대 내역을 실시간으로 모니터링할 수 있습니다. 지속적인 학습을 통해 응대 품질이 점차 향상됩니다.",
  },
];

export function FaqSection() {
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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={ref} className="relative bg-muted/40 py-24 lg:py-32">
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,_rgba(139,92,246,0.04)_0%,_transparent_70%)] blur-3xl" />
      <div className="mx-auto max-w-3xl px-6">
        <div
          className={`mb-14 text-center transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            자주 묻는 질문
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            궁금한 점이 있으시면 언제든 문의해 주세요
          </p>
        </div>

        <div
          className={`transition-all delay-200 duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-border/60"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline hover:text-violet-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
