"use client";

import React from "react";
import { useWaitlistModal } from "./WaitlistModalProvider";
import HeroBanner from "./HeroBanner";

type Params = { success?: string; error?: string };

export default function WaitlistPageClient({ params }: { params: Params }) {
  const { openModal } = useWaitlistModal();
  const p = params ?? {};

  return (
    <>
      <div className="min-h-screen bg-white text-neutral-900">
        {/* Success banner - 상단 노출 (직접 /waitlist?success=1 접속 시) */}
        {p.success && (
          <div className="w-full border-b border-green-200 bg-green-50 py-3 text-center text-sm font-semibold text-green-800">
            대기 신청이 완료되었습니다. 베타 오픈 시 연락드리겠습니다.
          </div>
        )}
        {/* Top Nav */}
        <header className="sticky top-0 z-30 w-full border-b border-neutral-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <a href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl border border-neutral-200 bg-neutral-50" />
              <div className="leading-tight">
                <div className="text-sm font-semibold">Leviosa AI</div>
                <div className="text-xs text-neutral-500">
                  셀러들을 위한 AI 자동화 프로그램
                </div>
              </div>
            </a>
            <button
              type="button"
              onClick={openModal}
              className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              대기 신청
            </button>
          </div>
        </header>

        {/* Hero - dark banner with image */}
        <HeroBanner
          titleLines={[
            "조용히 매출 늘리는",
            "온라인 셀러들의",
            "'AI 에이전트'",
          ]}
          leadLines={["레비오사 AI 창업자 주하담"]}
        />

        {/* CTA below hero */}
        <section className="bg-black py-10">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <p className="text-base font-medium text-white/85 md:text-lg">
              상품 등록, 가격/재고, 주문/배송, CS… 매출이 커질수록 사람 손이 병목이 됩니다.
              <br />
              <span className="font-semibold text-white">
                레비오사 AI는 반복 업무를 &quot;구조적으로&quot; 자동화합니다.
              </span>
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={openModal}
                className="w-full max-w-sm rounded-2xl bg-red-500 px-6 py-4 text-center text-lg font-extrabold text-white hover:bg-red-600"
              >
                대기 신청하고 먼저 쓰기
              </button>
              <div className="text-xs text-white/70">
                신청 시 알림(이메일/문자) 수신에 동의한 것으로 간주됩니다.
              </div>
            </div>
          </div>
        </section>

        {/* Reality check */}
        <section className="bg-neutral-950">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <p className="break-keep text-center text-base font-medium leading-relaxed text-white/85 md:text-xl md:leading-loose">
              &quot;자동화&quot;라는 말에 홀려 도구만 잔뜩 쌓아두는 분들,
              <br className="hidden md:block" />
              큰 기대만 하고 오시면 실망할 수 있습니다.
              <br />
              <span className="border-b border-red-400 font-semibold text-white">
                레비오사 AI는 있는 그대로의 현실을 기준으로 설계합니다.
              </span>
            </p>
            <div className="mt-6 text-center text-lg font-bold text-red-400 md:text-2xl">
              지금부터 보여드릴 건 &quot;셀러의 진짜 병목&quot;입니다.
            </div>
          </div>
        </section>

        {/* Problem cards */}
        <section className="bg-neutral-50">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-extrabold md:text-3xl">
                매출이 오르면, 망가지는 지점은 늘 동일합니다
              </h2>
              <p className="mt-4 break-keep text-base leading-relaxed text-neutral-600 md:text-lg">
                &quot;열심히&quot;가 아니라 &quot;구조&quot;가 무너집니다.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "상품 등록/수정 폭증",
                  desc: "상품 수가 늘수록, 수정 요청/옵션/이미지/상세페이지가 끝없이 쌓입니다.",
                },
                {
                  title: "가격/재고 실수 = 패널티",
                  desc: "수동 체크는 늦고 틀립니다. 한번의 실수로 클레임/노출 하락/제재가 옵니다.",
                },
                {
                  title: "주문/배송/CS 병목",
                  desc: "주문이 늘면 누락이 생깁니다. 누락은 곧 신뢰 하락, 그리고 매출 하락입니다.",
                },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <div className="text-lg font-bold">{x.title}</div>
                  <div className="mt-2 break-keep text-sm leading-relaxed text-neutral-600">
                    {x.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
                레비오사 AI가 하는 일
              </div>
              <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">
                &quot;사람이 하던 반복 업무&quot;를
                <br className="hidden md:block" /> 자동화 워크플로우로 바꿉니다
              </h2>
              <p className="mt-4 break-keep text-base leading-relaxed text-neutral-600 md:text-lg">
                단일 기능이 아니라, 운영 전체를 묶어 &quot;자동 실행&quot; 되게
                만드는 방향입니다.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "상품 등록/대량 업데이트",
                  bullets: [
                    "템플릿 기반 대량 등록",
                    "옵션/이미지/상세페이지 생성 보조",
                    "멀티 계정/멀티 마켓 운영",
                  ],
                },
                {
                  title: "가격·재고·품절 자동 처리",
                  bullets: [
                    "가격 변경 자동 반영",
                    "품절/재입고 상태 동기화",
                    "실수 방지용 룰/검증",
                  ],
                },
                {
                  title: "주문·배송 자동화",
                  bullets: [
                    "주문 상태 기반 자동 분기",
                    "운송장/배송 처리 연결",
                    "누락 방지 체크",
                  ],
                },
                {
                  title: "CS/운영 알림",
                  bullets: [
                    "운영 이벤트 알림(예: 실패/차단/제재)",
                    "처리 이력 관리",
                    "팀 운영을 위한 표준화",
                  ],
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="text-lg font-bold">{b.title}</div>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                    {b.bullets.map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-900" />
                        <span className="break-keep leading-relaxed">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder story */}
        <section className="bg-neutral-50">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col gap-3">
                <hr className="border-neutral-300" />
                <h3 className="break-keep text-2xl font-extrabold text-red-500 md:text-3xl">
                  &quot;매출 1억을 만들었는데, 자산이 안 남았다&quot;
                </h3>
                <hr className="border-neutral-300" />
              </div>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700 md:text-lg md:leading-loose">
                <p className="break-keep">
                  주하담은 개발자로 커리어를 쌓으며, 동시에 셀러로 직접 부딪혔습니다.
                  2024년 12월에는 월매출 1억을 달성했지만, &quot;사람이 갈아 넣는
                  운영&quot;은 매출이 커질수록 더 위험해졌습니다.
                </p>
                <div className="flex gap-3">
                  <div className="w-[3px] bg-neutral-900" />
                  <p className="break-keep font-bold">
                    그때 결론은 하나였습니다. &quot;운영을 시스템으로 바꿔야 한다.&quot;
                  </p>
                </div>
                <p className="break-keep">
                  레비오사 AI는 &quot;셀러들이 매일 반복하는 운영 업무&quot;를
                  자동화해, 실수/누락/병목을 줄이고, 확장 가능한 구조로 전환시키는
                  제품입니다.
                </p>
                <ul className="rounded-2xl bg-yellow-50 p-5 text-sm font-semibold text-neutral-900 md:text-base">
                  <li>· 실사용자 문제에서 출발 (셀러 본인 운영 경험)</li>
                  <li>· 풀스택 기반으로 실제 자동화 구현/배포</li>
                  <li>
                    · 목표: &quot;셀러 자동화&quot; 하면 가장 먼저 떠오르는 기준
                    서비스
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What you get + CTA */}
        <section className="bg-white" id="apply">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-extrabold md:text-3xl">
                대기 신청하면, 먼저 받는 것
              </h2>
              <p className="mt-4 break-keep text-base leading-relaxed text-neutral-600 md:text-lg">
                베타 초대 + 셀러 자동화 설계 자료(무료) + 우선 온보딩
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "베타 우선 초대",
                  desc: "대기 순서대로, 먼저 사용해보고 피드백 반영.",
                },
                {
                  title: "자동화 설계 체크리스트",
                  desc: "상품/가격/재고/주문/배송/CS를 '프로세스'로 쪼개는 템플릿.",
                },
                {
                  title: "초기 혜택(예정)",
                  desc: "초기 유저 대상 혜택은 대기자에게 먼저 공개.",
                },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
                >
                  <div className="text-lg font-bold">{x.title}</div>
                  <div className="mt-2 break-keep text-sm leading-relaxed text-neutral-600">
                    {x.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Success/Error message + CTA to open modal */}
            <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
              {p.success && (
                <div className="mb-6 rounded-2xl bg-green-50 p-4 text-center text-sm font-semibold text-green-800">
                  대기 신청이 완료되었습니다. 베타 초대 시 연락드리겠습니다.
                </div>
              )}
              {p.error && (
                <div className="mb-6 rounded-2xl bg-red-50 p-4 text-center text-sm font-semibold text-red-800">
                  {p.error === "email_required"
                    ? "이메일을 입력해 주세요."
                    : "오류가 발생했습니다. 잠시 후 다시 시도해 주세요."}
                </div>
              )}
              <div className="text-center">
                <div className="text-xl font-extrabold">레비오사 AI 대기 신청</div>
                <div className="mt-2 text-sm text-neutral-600">
                  이메일과 연락처만 입력하면 됩니다.
                </div>
              </div>
              <button
                type="button"
                onClick={openModal}
                className="mt-6 w-full rounded-2xl bg-red-500 px-6 py-4 text-center text-lg font-extrabold text-white hover:bg-red-600"
              >
                지금 대기 신청하기
              </button>
              <div className="pt-2 text-center text-xs text-neutral-500">
                제출 시 개인정보 처리에 동의한 것으로 간주됩니다.
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-neutral-50">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-extrabold md:text-3xl">
                자주 묻는 질문
              </h2>
            </div>
            <div className="mx-auto mt-10 max-w-3xl space-y-3">
              {[
                {
                  q: "어떤 셀러에게 가장 효과가 큰가요?",
                  a: "상품/주문이 늘면서 '수동 운영'이 한계에 닿는 순간부터 효과가 커집니다. 특히 가격/재고/배송 누락이 잦아지는 구간에서요.",
                },
                {
                  q: "레비오사 AI는 '툴'인가요, '시스템'인가요?",
                  a: "단일 기능이 아니라 운영 프로세스를 기준으로 자동 분기/실행되는 '시스템' 방향입니다.",
                },
                {
                  q: "언제부터 쓸 수 있나요?",
                  a: "대기 신청자 순서대로 베타 초대를 드립니다. (정확한 일정은 대기자에게 먼저 공유됩니다.)",
                },
              ].map((x) => (
                <div
                  key={x.q}
                  className="rounded-2xl border border-neutral-200 bg-white p-6"
                >
                  <div className="font-bold">{x.q}</div>
                  <div className="mt-2 break-keep text-sm leading-relaxed text-neutral-600">
                    {x.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-neutral-900">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="text-xl font-extrabold text-white md:text-2xl">
                셀러 자동화의 기준이 되는 서비스.
                <br className="hidden md:block" />
                레비오사 AI 대기 신청하고 먼저 시작하세요.
              </div>
              <button
                type="button"
                onClick={openModal}
                className="w-full max-w-sm rounded-2xl bg-red-500 px-6 py-4 text-center text-lg font-extrabold text-white hover:bg-red-600"
              >
                대기 신청하기
              </button>
              <div className="text-xs text-white/60">
                © {new Date().getFullYear()} Leviosa AI
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
