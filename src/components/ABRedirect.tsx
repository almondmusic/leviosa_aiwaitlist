"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const COOKIE_NAME = "ab";
const COOKIE_MAX_AGE_DAYS = 30;

function getVariantFromCookie(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setVariantCookie(value: string) {
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(value)}; path=/; max-age=${60 * 60 * 24 * COOKIE_MAX_AGE_DAYS}; SameSite=Lax`;
}

function clearVariantCookie() {
  document.cookie = `${COOKIE_NAME}=; path=/; max-age=0`;
}

export default function ABRedirect() {
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    const forceReset = searchParams.get("ab") === "reset";
    if (forceReset) clearVariantCookie();

    let variant = getVariantFromCookie();
    if (variant !== "a" && variant !== "b") {
      // 50% 확률로 A 또는 B 배정
      variant = Math.random() < 0.5 ? "a" : "b";
      setVariantCookie(variant);
    }
    window.location.replace(`/${variant}`);
  }, [mounted, searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F8F8]">
      <p className="font-pretendard text-gray-500">이동 중...</p>
    </div>
  );
}
