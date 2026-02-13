"use client";

import React, { useState } from "react";

type HeroImageProps = {
  src?: string;
  alt: string;
  fallbackText?: string;
};

function HeroImage({ src, alt, fallbackText }: HeroImageProps) {
  const [imgError, setImgError] = useState(false);

  if (!src || imgError) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-neutral-800/80 text-center text-white/60">
        <p className="text-sm">{fallbackText || alt}</p>
        {src && <p className="mt-1 text-xs">public/ 에 이미지 추가</p>}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover rounded-lg"
      onError={() => setImgError(true)}
    />
  );
}

type HeroBannerProps = {
  titleLines: string[];
  leadLines?: string[];
  image1Src?: string;
  image1Alt?: string;
  image2Src?: string;
  image2Alt?: string;
};

export default function HeroBanner({
  titleLines,
  leadLines = [],
  image1Src,
  image1Alt = "셀러 운영 화면 / 주문 폭주 / 엑셀 지옥",
  image2Src,
  image2Alt = "자동화 대시보드 / 안정화된 운영",
}: HeroBannerProps) {
  return (
    <section className="relative min-h-[320px] overflow-hidden bg-[#1a1a1a] md:min-h-[480px]">
      {/* biz-pt.png 배경 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/biz-pt.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full min-h-[320px] max-w-5xl flex-col justify-center gap-6 px-4 py-12 md:min-h-[480px] md:gap-8 md:px-8 md:py-16">
        {/* 제목 (강조색) */}
        <h2 className="text-left text-[26px] font-bold leading-[1.35] text-white md:text-[44px] lg:text-[50px]">
          {titleLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* 리드 문단 */}
        {leadLines.length > 0 && (
          <div className="max-w-2xl space-y-2 text-left text-[15px] leading-[1.7] text-white/95 md:text-[17px]">
            {leadLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}

        {/* 이미지 2장 영역 */}
        <div className="grid w-full grid-cols-2 gap-4 pt-2 md:gap-6 md:pt-4">
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/10]">
            <HeroImage
              src={image1Src}
              alt={image1Alt}
              fallbackText={image1Alt}
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/10]">
            <HeroImage
              src={image2Src}
              alt={image2Alt}
              fallbackText={image2Alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
