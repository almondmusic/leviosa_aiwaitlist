"use client";

import { useWaitlistModal } from "./WaitlistModalProvider";

type CTAButtonProps = {
  variant?: "primary" | "secondary";
  size?: "md" | "lg" | "xl";
  label?: string;
};

export default function CTAButton({
  variant = "primary",
  size = "lg",
  label = "대기신청",
}: CTAButtonProps) {
  const { openModal } = useWaitlistModal();

  const handleClick = () => {
    openModal();
  };

  const baseClass =
    "inline-flex items-center justify-center font-bold text-white transition-colors hover:opacity-90 whitespace-nowrap shrink-0";
  const variantClass =
    variant === "primary"
      ? "bg-[#EF5555] hover:bg-[#EF5555]/90"
      : "bg-[#EF5555] px-6 font-semibold text-white md:px-8";
  const sizeClass = {
    md: "h-10 min-w-[100px] px-4 text-sm md:h-11 md:min-w-[120px] md:px-5 md:text-base",
    lg: "h-[58px] w-[300px] text-[20px]",
    xl: "h-[58px] w-[300px] text-[22px] md:w-[430px] md:py-4 md:text-2xl",
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClass} ${variantClass} ${sizeClass[size]} rounded-md`}
      id="landing-apply-button"
    >
      {label}
    </button>
  );
}
