"use client";

import React, { useState } from "react";

export type WaitlistFormData = {
  email: string;
  phone: string;
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
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitting(true);
    try {
      const body = new FormData();
      body.append("email", email.trim());
      body.append("phone", phone.trim());
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "X-Requested-With": "WaitlistModal" },
        body,
      });
      if (res.ok) {
        onSuccess?.();
        onClose();
        setEmail("");
        setPhone("");
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data?.error ?? "제출에 실패했습니다.");
      }
    } catch {
      alert("오류가 발생했습니다. 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <h2 className="text-lg font-bold">레비오사 AI 대기 신청</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700"
            aria-label="닫기"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5">
          <p className="mb-4 text-sm text-neutral-600">
            대기 신청 시 셀러 운영 병목 진단 자료를 바로 보내드립니다.
          </p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="이메일 *"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-red-500"
            />
            <input
              type="tel"
              placeholder="연락처(선택)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-red-500"
            />
          </div>
          <button
            type="submit"
            disabled={!email.trim() || isSubmitting}
            className="mt-6 w-full rounded-xl bg-red-500 py-3 font-semibold text-white disabled:opacity-50"
          >
            {isSubmitting ? "제출 중…" : "대기 신청하기"}
          </button>
        </form>
      </div>
    </div>
  );
}
