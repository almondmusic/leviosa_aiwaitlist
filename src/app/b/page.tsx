import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "레비오사 AI | B",
  description: "레비오사 AI B 버전 랜딩",
};

export default function VariantB() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Header />
      <main>
        {/* B 전용 히어로 — 새 사이트 컨셉으로 자유롭게 수정 */}
        <section className="relative overflow-hidden px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-pretendard text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              B 사이트
              <br />
              <span className="text-[#EF5555]">여기에 새 메시지를 넣으세요</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-400 md:text-xl">
              B는 기존 A와 완전히 다른 랜딩으로 구성할 수 있습니다.
              <br />
              이 영역을 원하는 콘텐츠로 채워보세요.
            </p>
            <div className="mt-10 flex justify-center">
              <CTAButton
                variant="primary"
                size="lg"
                label="대기 신청하기"
              />
            </div>
          </div>
        </section>

        {/* 추가 섹션 예시 — 필요에 따라 복사·수정 */}
        <section className="border-t border-white/10 px-4 py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-pretendard text-2xl font-bold text-white md:text-3xl">
              새 사이트용 섹션
            </h2>
            <p className="mt-4 text-gray-400">
              문구, 이미지, 카드 등을 이곳에 추가하면 됩니다.
            </p>
          </div>
        </section>

        {/* 하단 CTA */}
        <section className="border-t border-white/10 px-4 py-16">
          <div className="mx-auto max-w-xl text-center">
            <CTAButton variant="secondary" size="md" label="대기 신청" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
