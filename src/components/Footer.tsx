import Link from "next/link";

export default function Footer() {
  return (
    <footer className="min-h-[250px] bg-gray-200 py-[30px] xl:pb-[120px]">
      <div className="mx-auto max-w-7xl px-[10px] md:px-[30px]">
        <div className="block items-start justify-between xl:flex">
          <div className="order-2 grid max-w-full grid-cols-12 gap-2 text-xs text-gray-600 md:gap-x-6">
            {/* <Link
              href="/policy/privacy"
              className="col-span-6 whitespace-nowrap"
            >
              개인정보 처리방침
            </Link>
            <Link href="/faq" className="col-span-3 whitespace-nowrap">
              고객센터
            </Link>
            <Link href="/faq" className="col-span-3 whitespace-nowrap">
              FAQ
            </Link>
            <Link href="/policy/terms" className="col-span-3 whitespace-nowrap">
              이용약관
            </Link> */}
          </div>
          <div className="order-1 space-y-1 text-xs text-gray-600 xl:mt-0">
            <div>
              <span>레비오사 AI</span>
              <br className="block md:hidden" />
              <span className="md:ml-4">온라인 셀러를 위한 AI 에이전트</span>
            </div>
            <div>
              <a href="mailto:leviosa_ai@naver.com">
                메일: leviosa_ai@naver.com
              </a>
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-700">
          © 2026 Leviosa AI. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
