"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend/API
    console.log({ email, phone });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        id="waitlist-form"
        className="rounded-lg border bg-white p-8 text-center shadow-lg"
      >
        <p className="text-xl font-bold text-[#EF5555]">
          대기 신청이 완료되었습니다!
        </p>
        <p className="mt-2 text-gray-600">
          레비오사 AI 오픈 시 가장 먼저 연락드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form
      id="waitlist-form"
      onSubmit={handleSubmit}
      className="rounded-lg border bg-white p-8 shadow-lg md:p-12"
    >
      <h3 className="text-center text-xl font-bold md:text-2xl">
        레비오사 AI 대기 신청
      </h3>
      <p className="mt-2 text-center text-gray-600">
        오픈 시 알림을 받으실 연락처를 입력해 주세요.
      </p>
      <div className="mt-6 space-y-4">
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#EF5555] focus:outline-none focus:ring-2 focus:ring-[#EF5555]/20"
        />
        <input
          type="tel"
          placeholder="휴대폰 번호"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-[#EF5555] focus:outline-none focus:ring-2 focus:ring-[#EF5555]/20"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-[#EF5555] py-4 text-lg font-bold text-white transition-colors hover:bg-[#EF5555]/90"
        >
          대기 신청하기
        </button>
      </div>
      <p className="mt-4 text-center text-sm text-gray-500">
        ※ 대기 신청 시 알림톡과 문자메시지 수신에 동의합니다.
      </p>
    </form>
  );
}
