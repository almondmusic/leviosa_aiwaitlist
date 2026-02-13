"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 h-[var(--top-nav-height)] w-full border-b border-gray-200 bg-white md:h-[var(--md-top-nav-height)]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-[10px] md:px-[30px]">
        <Link
          href="/"
          className="-mt-2 inline-block cursor-pointer md:-mt-1"
          aria-label="레비오사 AI 홈"
        >
          <Image
            src="/leviosaai_logo.png"
            alt="레비오사 AI"
            width={140}
            height={20}
            className="h-12 w-auto md:h-16"
            priority
          />
        </Link>
        {/* <div className="flex items-center gap-2">
                <Link
                href="/auth/login"
                className="inline-flex h-8 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100 md:h-10"
                >
                로그인
                </Link>
                <Link
                href="/auth/login"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-white hover:bg-primary/90"
                >
                회원가입
                </Link>
                </div> */}
      </div>
    </header>
  );
}
