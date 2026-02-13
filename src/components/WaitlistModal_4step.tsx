"use client";

import React, { useState } from "react";

const OCCUPATIONS = [
  "회사원",
  "주부",
  "자영업(오프라인)",
  "자영업(온라인)",
  "전문직",
  "학생",
  "공무원",
  "아르바이트(비정규직)",
  "무직 또는 준비 중",
  "기타",
] as const;

const EDUCATION = [
  "중졸 이하",
  "고졸",
  "대학 중퇴",
  "학사",
  "석사",
  "박사 이상",
] as const;

const TIME_SLOTS = [
  {
    id: "weekday_day",
    label: "평일 낮(적정)",
    waitDays: 30,
    waitingCount: 332,
    barColor: "bg-amber-500",
  },
  {
    id: "weekday_afternoon",
    label: "평일 오후(여유)",
    waitDays: 17,
    waitingCount: 344,
    barColor: "bg-green-500",
  },
  {
    id: "weekday_evening",
    label: "평일 야간(적정)",
    waitDays: 30,
    waitingCount: 680,
    barColor: "bg-amber-500",
  },
  {
    id: "weekend",
    label: "주말(혼잡)",
    waitDays: 64,
    waitingCount: 489,
    barColor: "bg-red-500",
  },
];

const DAYS = ["월", "화", "수", "목", "금", "토", "일"];
const HOURS = Array.from({ length: 24 }, (_, i) =>
  `${i.toString().padStart(2, "0")}:00`
);

export type WaitlistFormData = {
  // Step 1
  occupation: string;
  occupationOther: string;
  prevOccupation: string;
  prevOccupationOther: string;
  education: string;
  major: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  q10: string;
  q11: string;
  revenueGoal: string;
  goalPeriod: string;
  // Step 2
  timeSlots: string[];
  // Step 3
  callSlot1: { day: string; start: string; end: string };
  callSlot2: { day: string; start: string; end: string };
  callSlot3: { day: string; start: string; end: string };
  // Contact (for submit)
  name: string;
  email: string;
  phone: string;
};

const initialFormData: WaitlistFormData = {
  occupation: "",
  occupationOther: "",
  prevOccupation: "",
  prevOccupationOther: "",
  education: "",
  major: "",
  q4: "",
  q5: "",
  q6: "",
  q7: "",
  q8: "",
  q9: "",
  q10: "",
  q11: "",
  revenueGoal: "",
  goalPeriod: "",
  timeSlots: [],
  callSlot1: { day: "", start: "", end: "" },
  callSlot2: { day: "", start: "", end: "" },
  callSlot3: { day: "", start: "", end: "" },
  name: "",
  email: "",
  phone: "",
};

type WaitlistModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
};

export default function WaitlistModal({
  isOpen,
  onClose,
  onSuccess,
}: WaitlistModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<WaitlistFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (key: keyof WaitlistFormData, value: unknown) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const canNextStep1 = () => {
    return (
      formData.occupation &&
      formData.prevOccupation &&
      formData.education &&
      formData.q4 &&
      formData.q5 &&
      formData.q6 &&
      formData.q7 &&
      formData.q8 &&
      formData.q9 &&
      formData.q10 &&
      formData.q11 &&
      formData.revenueGoal &&
      formData.goalPeriod
    );
  };

  const canNextStep2 = () =>
    formData.timeSlots.length >= 2;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const body = new FormData();
      Object.entries(formData).forEach(([k, v]) => {
        if (typeof v === "object" && v !== null && !Array.isArray(v)) {
          body.append(k, JSON.stringify(v));
        } else if (Array.isArray(v)) {
          body.append(k, v.join(","));
        } else {
          body.append(k, String(v ?? ""));
        }
      });
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "X-Requested-With": "WaitlistModal" },
        body,
      });
      if (res.ok) {
        onSuccess?.();
        onClose();
        setStep(1);
        setFormData(initialFormData);
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data?.error ?? "제출에 실패했습니다.");
      }
    } catch (e) {
      alert("오류가 발생했습니다. 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const TOTAL_WAIT = 1826;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200 bg-white px-5 py-4">
          <h2 className="text-lg font-bold">레비오사 AI 대기 신청</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700"
            aria-label="닫기"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5 pb-6">
          {/* Step 1: 12 questions */}
          {step === 1 && (
            <Step1Form formData={formData} update={update} />
          )}

          {/* Step 2: Time slots */}
          {step === 2 && (
            <>
              <p className="text-center text-neutral-600">
                현재 대기 중인 인원은 총{" "}
                <span className="text-xl font-bold text-red-500">{TOTAL_WAIT.toLocaleString()}</span>
                명 입니다.
              </p>
              <p className="mt-4 font-medium">베타 사용 가능한 시간대를 선택해 주세요.</p>
              <p className="mt-1 text-sm text-neutral-500">
                * 가능한 시간대를 2개 이상 선택해 주세요.
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                * 예상 대기일은 상황에 따라 변동될 수 있습니다.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {TIME_SLOTS.map((slot) => {
                  const selected = formData.timeSlots.includes(slot.id);
                  return (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => {
                        const next = selected
                          ? formData.timeSlots.filter((s) => s !== slot.id)
                          : [...formData.timeSlots, slot.id];
                        update("timeSlots", next);
                      }}
                      className={`rounded-xl border-2 p-4 text-left transition ${
                        selected
                          ? "border-red-500 bg-red-50"
                          : "border-neutral-200 hover:border-neutral-300"
                      }`}
                    >
                      <div className="font-semibold">{slot.label}</div>
                      <div className="mt-1 text-sm text-neutral-600">
                        대기 예상: 약 {slot.waitDays}일 ({slot.waitingCount.toLocaleString()}명 대기 중)
                      </div>
                      <div className={`mt-2 h-1 rounded-full ${slot.barColor}`} />
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* Step 3: Call availability */}
          {step === 3 && (
            <>
              <p className="font-medium">
                온보딩을 위한 통화 가능한 요일과 시간을 선택해 주세요.
              </p>
              <div className="mt-3 rounded-xl bg-red-50 p-3 text-sm text-neutral-700">
                * 통화 하루 전에 알림톡으로 안내드리며, 수차례 부재중 시 다음 대기자를 위해 대기 신청이 취소될 수 있습니다.
              </div>
              <div className="mt-4 space-y-4">
                {([1, 2, 3] as const).map((i) => (
                  <CallSlotRow
                    key={i}
                    priority={i}
                    value={formData[`callSlot${i}` as keyof WaitlistFormData] as { day: string; start: string; end: string }}
                    onChange={(v) => update(`callSlot${i}` as keyof WaitlistFormData, v)}
                  />
                ))}
              </div>
            </>
          )}

          {/* Step 4: Thank you + contact */}
          {step === 4 && (
            <>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-600">
                이 정보는 회원이 더 빠르게 수익화할 수 있도록 기초 자료로 활용됩니다.
              </div>
              <div className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="이름(선택)"
                  value={formData.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-red-500"
                />
                <input
                  type="email"
                  placeholder="이메일 *"
                  required
                  value={formData.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-red-500"
                />
                <input
                  type="tel"
                  placeholder="연락처(선택)"
                  value={formData.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-red-500"
                />
              </div>
              <div className="mt-6 rounded-xl border border-neutral-200 bg-green-50 p-5 text-center">
                <p className="font-semibold text-green-800">
                  대기 신청이 완료되면 베타 오픈 시 순서대로 연락드리겠습니다.
                </p>
                <p className="mt-2 text-sm text-green-700">
                  감사합니다.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Progress + Buttons */}
        <div className="sticky bottom-0 border-t border-neutral-200 bg-white px-5 py-4">
          <div className="mb-4 flex justify-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-2 w-2 rounded-full ${
                  s === step ? "bg-red-500" : s < step ? "bg-red-300" : "bg-neutral-200"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((x) => x - 1)}
                className="flex-1 rounded-xl border-2 border-neutral-300 py-3 font-semibold text-neutral-700 hover:bg-neutral-50"
              >
                이전 단계
              </button>
            ) : (
              <div className="flex-1" />
            )}
            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep((x) => x + 1)}
                disabled={
                  (step === 1 && !canNextStep1()) ||
                  (step === 2 && !canNextStep2())
                }
                className="flex-1 rounded-xl bg-neutral-800 py-3 font-semibold text-white disabled:opacity-50"
              >
                다음 단계
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!formData.email || isSubmitting}
                className="flex-1 rounded-xl bg-red-500 py-3 font-semibold text-white disabled:opacity-50"
              >
                {isSubmitting ? "제출 중…" : "대기 신청 완료"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Step1Form({
  formData,
  update,
}: {
  formData: WaitlistFormData;
  update: (key: keyof WaitlistFormData, value: unknown) => void;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-amber-50/80 p-3 text-sm text-neutral-700">
        이 정보는 회원이 더 빠르게 수익화할 수 있도록 기초 자료로 활용됩니다.
      </div>

      <RadioBlock
        label="1. 현재 직업이 무엇인가요? (콘텐츠 기획에 활용될 예정)"
        options={OCCUPATIONS}
        value={formData.occupation}
        onChange={(v) => update("occupation", v)}
        otherValue={formData.occupationOther}
        onOtherChange={(v) => update("occupationOther", v)}
      />
      <RadioBlock
        label="2. 이전에 가졌던 직업은 무엇인가요?"
        options={OCCUPATIONS}
        value={formData.prevOccupation}
        onChange={(v) => update("prevOccupation", v)}
        otherValue={formData.prevOccupationOther}
        onOtherChange={(v) => update("prevOccupationOther", v)}
      />
      <div>
        <p className="mb-2 font-medium">3. 학력이 어떻게 되시나요?</p>
        <div className="flex flex-wrap gap-2">
          {EDUCATION.map((opt) => (
            <label key={opt} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="education"
                value={opt}
                checked={formData.education === opt}
                onChange={() => update("education", opt)}
                className="h-4 w-4"
              />
              <span className="text-sm">{opt}</span>
            </label>
          ))}
        </div>
        <input
          type="text"
          placeholder="3-1. 전공을 입력해 주세요."
          value={formData.major}
          onChange={(e) => update("major", e.target.value)}
          className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-2 text-sm"
        />
      </div>

      {[
        { key: "q4", text: "지금까지 가장 많은 시간을 사용한(또는 사용하고 있는) 취미나 특기가 있으신가요?" },
        { key: "q5", text: "돈을 지출하고 있는(또는 지출한) 취미나 특기는 있으신가요?" },
        { key: "q6", text: "무언가를 판매해 본 경험이 있으신가요?" },
        { key: "q7", text: "정기적으로 참여하는(혹은 참여했던) 오프라인 모임이 있으신가요?" },
        { key: "q8", text: '살면서 구매해 본 상품/서비스 중 "내가 만들어도 이것보다 잘하겠다"라고 느꼈던 것이 있으신가요?' },
        { key: "q9", text: "살면서 구매해본 상품/서비스 중 특별히 만족했던 제품이나 서비스가 떠오르시나요?" },
        { key: "q10", text: "대중에게 얼굴을 노출할 수 없는 결격 사유가 있으신가요?" },
        { key: "q11", text: "SNS 운영 경험이 있으신가요?" },
      ].map(({ key, text }) => (
        <YesNoRow
          key={key}
          label={text}
          value={formData[key as keyof WaitlistFormData] as string}
          onChange={(v) => update(key as keyof WaitlistFormData, v)}
        />
      ))}

      <div>
        <p className="mb-2 font-medium">12. 레비오사 AI에서 달성하고 싶은 매출 목표(월)는 얼마이신가요?</p>
        <div className="flex flex-wrap gap-3">
          {["100만 원 이하", "300만 원", "500만 원", "1,000만 원", "1,000만 원 이상"].map((opt) => (
            <label key={opt} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="revenueGoal"
                value={opt}
                checked={formData.revenueGoal === opt}
                onChange={() => update("revenueGoal", opt)}
                className="h-4 w-4"
              />
              <span className="text-sm">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 font-medium">13. 목표 달성을 위해 얼마의 기간을 예상하시나요?</p>
        <div className="flex flex-wrap gap-3">
          {["3개월 이상", "6개월 이상", "9개월 이상", "1년 이상", "될 때까지 한다"].map((opt) => (
            <label key={opt} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="goalPeriod"
                value={opt}
                checked={formData.goalPeriod === opt}
                onChange={() => update("goalPeriod", opt)}
                className="h-4 w-4"
              />
              <span className="text-sm">{opt}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function RadioBlock({
  label,
  options,
  value,
  onChange,
  otherValue,
  onOtherChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  otherValue: string;
  onOtherChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 font-medium">{label}</p>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <label key={opt} className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name={label}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="h-4 w-4"
            />
            <span className="text-sm">{opt}</span>
          </label>
        ))}
      </div>
      {value === "기타" && (
        <input
          type="text"
          placeholder="입력해 주세요"
          value={otherValue}
          onChange={(e) => onOtherChange(e.target.value)}
          className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-2 text-sm"
        />
      )}
    </div>
  );
}

function YesNoRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium">{label}</p>
      <div className="flex gap-4">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name={label}
            checked={value === "있음"}
            onChange={() => onChange("있음")}
            className="h-4 w-4"
          />
          <span className="text-sm">있음</span>
        </label>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name={label}
            checked={value === "없음"}
            onChange={() => onChange("없음")}
            className="h-4 w-4"
          />
          <span className="text-sm">없음</span>
        </label>
      </div>
    </div>
  );
}

function CallSlotRow({
  priority,
  value,
  onChange,
}: {
  priority: 1 | 2 | 3;
  value: { day: string; start: string; end: string };
  onChange: (v: { day: string; start: string; end: string }) => void;
}) {
  return (
    <div className="rounded-xl border border-neutral-200 p-3">
      <div className="mb-2 text-sm font-semibold">{priority}순위</div>
      <div className="grid grid-cols-3 gap-2">
        <select
          value={value.day}
          onChange={(e) => onChange({ ...value, day: e.target.value })}
          className="rounded-lg border border-neutral-200 px-3 py-2 text-sm"
        >
          <option value="">요일</option>
          {DAYS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <select
          value={value.start}
          onChange={(e) => onChange({ ...value, start: e.target.value })}
          className="rounded-lg border border-neutral-200 px-3 py-2 text-sm"
        >
          <option value="">시작</option>
          {HOURS.map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
        <select
          value={value.end}
          onChange={(e) => onChange({ ...value, end: e.target.value })}
          className="rounded-lg border border-neutral-200 px-3 py-2 text-sm"
        >
          <option value="">종료</option>
          {HOURS.map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
