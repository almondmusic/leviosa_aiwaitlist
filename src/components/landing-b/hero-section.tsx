"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useWaitlist } from "./waitlist-context";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { open } = useWaitlist();
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative overflow-hidden pt-28 pb-8 lg:pt-36 lg:pb-12">
      {/* Warm cream base with layered purple ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-background" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,_rgba(139,92,246,0.10)_0%,_rgba(168,85,247,0.05)_35%,_transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute -top-20 -right-40 -z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(192,132,252,0.07)_0%,_transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-32 -z-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.06)_0%,_transparent_70%)] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className={`mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200/60 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 shadow-sm transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-violet-500" />
            {"네이버 스마트스토어 셀러를 위한 AI 자동화 플랫폼"}
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            <span
              className={`inline-block transition-all duration-700 delay-100 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <span className="text-foreground">{"스마트스토어 운영,"}</span>
            </span>
            <br className="hidden sm:block" />
            <span
              className={`inline-block transition-all duration-700 delay-300 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                {"AI"}
              </span>
              <span className="text-foreground">{"가 자동으로 "}</span>
              <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                {"해결"}
              </span>
              <span className="text-foreground/60">{"해 드립니다"}</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-500 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {
              "상품 등록, CS, 재고 관리까지 자동화하여 시간을 절약하고 매출을 키우세요."
            }
          </p>

          {/* CTA Buttons */}
          <div
            className={`mt-8 flex flex-col items-center gap-4 sm:flex-row transition-all duration-700 delay-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-purple-600 px-8 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:from-violet-700 hover:to-purple-700 transition-all"
              onClick={open}
            >
              {"무료 진단 받기"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border/80 px-8 text-foreground hover:bg-muted"
              onClick={open}
            >
              {"가입 대기 신청"}
            </Button>
          </div>

          {/* Trust metrics */}
          <div
            className={`mt-10 flex items-center gap-8 transition-all duration-700 delay-[900ms] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{"100+"}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {"활성 셀러"}
              </p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{"90%"}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {"시간 절약"}
              </p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{"4.9"}</p>
              <p className="mt-1 text-xs text-muted-foreground">{"만족도"}</p>
            </div>
          </div>

          {/* Demo Video Area */}
          <div
            className={`mt-14 w-full max-w-5xl transition-all duration-1000 delay-[1100ms] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl border border-violet-200/30 bg-card shadow-2xl shadow-violet-500/10">
              <div className="flex items-center gap-2 border-b border-border/40 bg-muted/50 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>
                <div className="ml-3 flex-1">
                  <div className="mx-auto flex max-w-md items-center gap-2 rounded-md bg-background/80 px-3 py-1">
                    <div className="h-3 w-3 rounded-full border border-border" />
                    <span className="text-xs text-muted-foreground">
                      {"leviosa.ai/dashboard"}
                    </span>
                  </div>
                </div>
              </div>
              <AnimatedDemoShowcase />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Multi-scene animated demo ─── */
const SCENE_DURATION = 5000;
const TRANSITION = 600;
const TOTAL_SCENES = 4;

function AnimatedDemoShowcase() {
  const [scene, setScene] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [sceneProgress, setSceneProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setScene((s) => (s + 1) % TOTAL_SCENES);
        setSceneProgress(0);
        setTransitioning(false);
      }, TRANSITION);
    }, SCENE_DURATION);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (transitioning) return;
    const step = 40;
    const timer = setInterval(() => {
      setSceneProgress((p) => Math.min(p + 1, 100));
    }, step);
    return () => clearInterval(timer);
  }, [scene, transitioning]);

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#faf7f2]">
      {/* Scene indicator dots */}
      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {Array.from({ length: TOTAL_SCENES }).map((_, i) => (
          <button
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              scene === i
                ? "w-6 bg-gradient-to-r from-violet-500 to-purple-500"
                : "w-1.5 bg-foreground/20"
            }`}
            aria-label={`Scene ${i + 1}`}
          />
        ))}
      </div>

      <div
        className={`absolute inset-0 transition-all ${
          transitioning
            ? "scale-[0.97] opacity-0 duration-500"
            : "scale-100 opacity-100 duration-500"
        }`}
      >
        {scene === 0 && <SceneDashboard progress={sceneProgress} />}
        {scene === 1 && <SceneAIOptimization progress={sceneProgress} />}
        {scene === 2 && <SceneCSAutomation progress={sceneProgress} />}
        {scene === 3 && <SceneAnalytics progress={sceneProgress} />}
      </div>
    </div>
  );
}

/* ─── Scene 1 : Dashboard Overview ─── */
function SceneDashboard({ progress }: { progress: number }) {
  const eased = 1 - Math.pow(1 - Math.min(progress / 50, 1), 3);
  const orders = Math.round(eased * 1547);
  const revenue = Math.round(eased * 2340);
  const conversion = (eased * 4.8).toFixed(1);

  return (
    <div className="flex h-full">
      <Sidebar activeIndex={0} />
      <div className="flex-1 overflow-hidden p-4 lg:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {"오늘의 대시보드"}
            </h3>
            <p className="text-[10px] text-muted-foreground">
              {"2026년 2월 19일 수요일"}
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="rounded-lg bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700 border border-emerald-200/60">
              {"스토어 연동됨"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            {
              label: "오늘 주문",
              value: orders.toLocaleString(),
              sub: "+18%",
              color: "text-emerald-600",
            },
            {
              label: "매출",
              value: `${revenue}만`,
              sub: "+27%",
              color: "text-emerald-600",
            },
            {
              label: "전환율",
              value: `${conversion}%`,
              sub: "+0.8%p",
              color: "text-violet-600",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-xl bg-background p-3 border border-border/40"
              style={{ opacity: Math.min(1, progress / 15 - i * 0.3) }}
            >
              <p className="text-[10px] text-muted-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-base lg:text-lg font-bold text-foreground">
                {stat.value}
              </p>
              <p className={`text-[9px] font-medium ${stat.color}`}>
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-background border border-border/40 p-3 h-[calc(100%-140px)] min-h-[80px]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-foreground">
              {"주간 매출 추이"}
            </span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                <span className="text-[9px] text-muted-foreground">
                  {"이번 주"}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-violet-200" />
                <span className="text-[9px] text-muted-foreground">
                  {"지난 주"}
                </span>
              </div>
            </div>
          </div>
          <MiniLineChart progress={progress} />
        </div>
      </div>
    </div>
  );
}

/* ─── Scene 2 : AI Product Optimization ─── */
function SceneAIOptimization({ progress }: { progress: number }) {
  const items = [
    { name: "프리미엄 무선 이어폰 블루투스 5.3", before: 62, after: 94 },
    { name: "스테인리스 텀블러 500ml 보온보냉", before: 45, after: 87 },
    { name: "오가닉 코튼 반팔 티셔츠 남여공용", before: 58, after: 91 },
    { name: "접이식 노트북 거치대 알루미늄", before: 38, after: 82 },
  ];
  const visibleItems = Math.min(items.length, Math.floor(progress / 12) + 1);

  return (
    <div className="flex h-full">
      <Sidebar activeIndex={2} />
      <div className="flex-1 overflow-hidden p-4 lg:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {"AI 상품명 최적화"}
            </h3>
            <p className="text-[10px] text-muted-foreground">
              {"네이버 검색 알고리즘 기반 자동 최적화"}
            </p>
          </div>
          <div className="rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-3 py-1.5 text-[10px] font-medium text-white">
            {"일괄 최적화 시작"}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {items.map((item, i) => {
            const show = i < visibleItems;
            const barProgress = show
              ? Math.min(1, (progress - i * 12) / 30)
              : 0;
            const currentScore = Math.round(
              item.before + (item.after - item.before) * barProgress,
            );
            return (
              <div
                key={i}
                className="rounded-xl bg-background border border-border/40 p-3 transition-all duration-500"
                style={{
                  opacity: show ? 1 : 0,
                  transform: show ? "translateY(0)" : "translateY(12px)",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[11px] font-medium text-foreground truncate flex-1 mr-3">
                    {item.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-muted-foreground">
                      {"Before"}
                    </span>
                    <span className="rounded bg-violet-50 px-1.5 py-0.5 text-[10px] font-semibold text-violet-600 border border-violet-200/40">
                      {item.before}
                    </span>
                    <svg
                      className="h-3 w-3 text-muted-foreground/50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    <span className="text-[9px] text-muted-foreground">
                      {"After"}
                    </span>
                    <span
                      className={`rounded px-1.5 py-0.5 text-[10px] font-semibold border ${
                        currentScore >= 80
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200/40"
                          : "bg-amber-50 text-amber-700 border-amber-200/40"
                      }`}
                    >
                      {currentScore}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${currentScore}%`,
                        background:
                          currentScore >= 80
                            ? "linear-gradient(90deg, #8b5cf6, #10b981)"
                            : "linear-gradient(90deg, #f59e0b, #8b5cf6)",
                      }}
                    />
                  </div>
                  {currentScore >= item.after && (
                    <span className="text-[9px] font-medium text-emerald-600 animate-in fade-in duration-300">
                      {"완료"}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="mt-3 flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200/50 px-3 py-2 transition-all duration-700"
          style={{
            opacity: progress > 40 ? 1 : 0,
            transform: progress > 40 ? "translateY(0)" : "translateY(8px)",
          }}
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex-shrink-0">
            <span className="text-[10px] font-bold text-white">{"AI"}</span>
          </div>
          <p className="text-[10px] text-violet-800">
            {"검색 키워드 분석 완료 — "}
            <span className="font-semibold">
              {"평균 노출 순위 3.2위 → 1.4위"}
            </span>
            {" 개선 예측"}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Scene 3 : CS Automation Chat ─── */
function SceneCSAutomation({ progress }: { progress: number }) {
  const messages = [
    {
      role: "customer",
      name: "김지현",
      text: "주문한 상품이 아직 안 왔는데 확인 부탁드려요.",
      delay: 5,
    },
    {
      role: "ai",
      name: "AI 상담봇",
      text: "안녕하세요, 김지현님! 주문번호 #38291을 확인했습니다. 현재 배송 상태를 조회해 드릴게요.",
      delay: 20,
    },
    { role: "system", name: "", text: "배송 조회 API 호출 중...", delay: 35 },
    {
      role: "ai",
      name: "AI 상담봇",
      text: "상품이 오늘 오전 CJ대한통운에서 출발했으며, 내일 오전 도착 예정입니다. 송장번호: 629384710283",
      delay: 50,
    },
    {
      role: "customer",
      name: "김지현",
      text: "감사합니다! 빠른 답변 덕분에 안심이 되네요 :-)",
      delay: 70,
    },
    {
      role: "ai",
      name: "AI 상담봇",
      text: "도움이 되어 기쁩니다! 추가 문의 사항이 있으시면 언제든 말씀해 주세요.",
      delay: 82,
    },
  ];

  return (
    <div className="flex h-full">
      <Sidebar activeIndex={3} />
      <div className="flex-1 overflow-hidden p-4 lg:p-5 flex flex-col">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {"AI 고객 상담"}
            </h3>
            <p className="text-[10px] text-muted-foreground">
              {"자동 응답 · 배송조회 · 교환/반품 처리"}
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] text-emerald-700 font-medium">
              {"AI 활성화"}
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-hidden rounded-xl bg-background border border-border/40">
          <div className="flex items-center gap-2 border-b border-border/30 px-3 py-2">
            <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
              <span className="text-[9px] font-semibold text-amber-700">
                {"김"}
              </span>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-foreground">
                {"김지현"}
              </p>
              <p className="text-[8px] text-muted-foreground">
                {"주문 #38291 · VIP 고객"}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-3 overflow-y-auto max-h-[calc(100%-42px)]">
            {messages.map((msg, i) => {
              const visible = progress >= msg.delay;
              if (!visible) return null;

              if (msg.role === "system") {
                return (
                  <div
                    key={i}
                    className="flex justify-center animate-in fade-in slide-in-from-bottom-2 duration-500"
                  >
                    <span className="rounded-full bg-muted px-3 py-0.5 text-[9px] text-muted-foreground">
                      {msg.text}
                    </span>
                  </div>
                );
              }

              const isCustomer = msg.role === "customer";
              return (
                <div
                  key={i}
                  className={`flex items-end gap-1.5 animate-in fade-in slide-in-from-bottom-3 duration-500 ${
                    isCustomer ? "justify-end" : "justify-start"
                  }`}
                >
                  {!isCustomer && (
                    <div className="h-5 w-5 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-[7px] font-bold text-white">
                        {"AI"}
                      </span>
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] rounded-2xl px-3 py-2 ${
                      isCustomer
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    <p className="text-[10px] leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              );
            })}
            {progress > 15 && progress < 50 && (
              <div className="flex items-end gap-1.5">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-[7px] font-bold text-white">
                    {"AI"}
                  </span>
                </div>
                <div className="rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5">
                  <div className="flex gap-1">
                    <div
                      className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className="mt-2 flex items-center justify-between rounded-lg bg-emerald-50 border border-emerald-200/50 px-3 py-1.5 transition-all duration-700"
          style={{ opacity: progress > 60 ? 1 : 0 }}
        >
          <span className="text-[9px] font-medium text-emerald-800">
            {"오늘 AI 자동 응답: 47건"}
          </span>
          <span className="text-[9px] font-semibold text-emerald-700">
            {"평균 응답 시간: 1.2초"}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Scene 4 : Analytics ─── */
function SceneAnalytics({ progress }: { progress: number }) {
  const eased = 1 - Math.pow(1 - Math.min(progress / 60, 1), 3);

  const channels = [
    { name: "네이버 검색", pct: 42, color: "bg-emerald-500" },
    { name: "직접 유입", pct: 28, color: "bg-violet-500" },
    { name: "SNS 광고", pct: 18, color: "bg-amber-500" },
    { name: "기타", pct: 12, color: "bg-muted-foreground/40" },
  ];

  const topProducts = [
    { name: "프리미엄 무선 이어폰", sales: 324, Starter: "+34%" },
    { name: "스테인리스 텀블러", sales: 281, Starter: "+21%" },
    { name: "오가닉 코튼 티셔츠", sales: 198, Starter: "+15%" },
  ];

  return (
    <div className="flex h-full">
      <Sidebar activeIndex={5} />
      <div className="flex-1 overflow-hidden p-4 lg:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {"분석 리포트"}
            </h3>
            <p className="text-[10px] text-muted-foreground">
              {"이번 달 성과 분석 · AI 인사이트"}
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-lg border border-border/50 px-2 py-1">
            <span className="text-[10px] text-muted-foreground">
              {"2026년 2월"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 h-[calc(100%-52px)]">
          <div className="rounded-xl bg-background border border-border/40 p-3 flex flex-col">
            <span className="text-[10px] font-semibold text-foreground mb-2">
              {"월간 매출"}
            </span>
            <div className="flex-1 flex items-end gap-[3px]">
              {[38, 45, 32, 60, 55, 72, 68, 85, 78, 92, 88, 96].map((v, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col justify-end h-full"
                >
                  <div
                    className="w-full rounded-t transition-all duration-700 ease-out"
                    style={{
                      height: `${v * eased}%`,
                      background:
                        i >= 10 ? "#7c3aed" : i >= 8 ? "#a78bfa" : "#ede9fe",
                      transitionDelay: `${i * 40}ms`,
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-1 flex justify-between">
              <span className="text-[8px] text-muted-foreground">{"3월"}</span>
              <span className="text-[8px] text-muted-foreground">{"2월"}</span>
            </div>
          </div>

          <div className="rounded-xl bg-background border border-border/40 p-3 flex flex-col">
            <span className="text-[10px] font-semibold text-foreground mb-2">
              {"유입 경로"}
            </span>
            <div className="flex-1 flex flex-col justify-center gap-2">
              {channels.map((ch, i) => (
                <div
                  key={i}
                  style={{ opacity: Math.min(1, progress / 20 - i * 0.2) }}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[9px] text-foreground">
                      {ch.name}
                    </span>
                    <span className="text-[9px] font-semibold text-foreground">
                      {Math.round(ch.pct * eased)}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full ${ch.color} transition-all duration-1000 ease-out`}
                      style={{
                        width: `${ch.pct * eased}%`,
                        transitionDelay: `${i * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 rounded-xl bg-background border border-border/40 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold text-foreground">
                {"인기 상품 TOP 3"}
              </span>
              <span className="text-[9px] text-violet-600 font-medium">
                {"AI 추천 키워드 반영"}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {topProducts.map((p, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border/30 p-2 transition-all duration-500"
                  style={{
                    opacity: Math.min(1, (progress - 20) / 20 - i * 0.3),
                    transform:
                      progress > 20 + i * 6
                        ? "translateY(0)"
                        : "translateY(8px)",
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-50 text-[9px] font-bold text-violet-600">
                      {i + 1}
                    </span>
                    <span className="text-[10px] font-medium text-foreground truncate">
                      {p.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-foreground">
                      {Math.round(p.sales * eased)}
                      {"건"}
                    </span>
                    <span className="text-[9px] font-medium text-emerald-600">
                      {p.Starter}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Shared sidebar ─── */
function Sidebar({ activeIndex }: { activeIndex: number }) {
  const items = [
    "대시보드",
    "상품 관리",
    "AI 최적화",
    "CS 자동화",
    "재고 관리",
    "분석/리포트",
  ];
  return (
    <div className="hidden md:flex w-48 flex-col border-r border-border/30 bg-background p-3">
      <div className="flex items-center gap-2 mb-6 px-2">
        <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center">
          <span className="text-[10px] font-bold text-white">{"L"}</span>
        </div>
        <span className="text-xs font-semibold text-foreground">
          {"Leviosa AI"}
        </span>
      </div>
      {items.map((label, i) => (
        <div
          key={i}
          className={`flex items-center gap-2 rounded-lg px-3 py-2 mb-0.5 text-[11px] transition-colors ${
            activeIndex === i
              ? "bg-violet-50 text-violet-700 font-medium"
              : "text-muted-foreground"
          }`}
        >
          <div
            className={`h-1.5 w-1.5 rounded-full ${activeIndex === i ? "bg-violet-500" : "bg-muted-foreground/30"}`}
          />
          {label}
        </div>
      ))}
    </div>
  );
}

/* ─── Mini line chart (SVG) ─── */
function MiniLineChart({ progress }: { progress: number }) {
  const thisWeek = [120, 180, 150, 220, 280, 250, 320];
  const lastWeek = [100, 130, 160, 140, 170, 190, 210];
  const maxVal = 350;
  const w = 100;
  const h = 100;

  const toPath = (data: number[]) =>
    data
      .map((v, i) => {
        const x = (i / (data.length - 1)) * w;
        const y = h - (v / maxVal) * h;
        return `${i === 0 ? "M" : "L"}${x},${y}`;
      })
      .join(" ");

  const clipWidth = Math.min(w, (progress / 80) * w);

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <clipPath id="reveal">
          <rect x="0" y="0" width={clipWidth} height={h} />
        </clipPath>
        <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={toPath(lastWeek)}
        fill="none"
        stroke="#ddd6fe"
        strokeWidth="1.5"
        clipPath="url(#reveal)"
      />
      <path
        d={`${toPath(thisWeek)} L${w},${h} L0,${h} Z`}
        fill="url(#fillGrad)"
        clipPath="url(#reveal)"
      />
      <path
        d={toPath(thisWeek)}
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="2"
        clipPath="url(#reveal)"
      />
    </svg>
  );
}
