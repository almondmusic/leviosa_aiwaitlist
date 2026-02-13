"use client";

import { useState, useEffect, useRef } from "react";

type TabId = "success" | "intro" | "faq";

export default function TabNav() {
  const [activeTab, setActiveTab] = useState<TabId>("success");
  const scrollTargetId = useRef<string | null>(null);

  const tabs: { id: TabId; label: string; sectionId: string }[] = [
    {
      id: "success",
      label: "온라인셀러 성공공식",
      sectionId: "success-area",
    },
    { id: "intro", label: "레비오사 AI 소개", sectionId: "intro-area" },
    { id: "faq", label: "레비오사 AI FAQ", sectionId: "faq-area" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      scrollTargetId.current = id;
      const tabId = tabs.find((t) => t.sectionId === id)?.id ?? "intro";
      setActiveTab(tabId);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const sectionIds = ["success-area", "intro-area", "faq-area"];
    const tabIds: TabId[] = ["success", "intro", "faq"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((sectionId, index) => {
      const el = document.getElementById(sectionId);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (!entry.isIntersecting) return;
          const targetId = (entry.target as HTMLElement).id;
          if (scrollTargetId.current !== null) {
            if (scrollTargetId.current === targetId) {
              scrollTargetId.current = null;
              setActiveTab(tabIds[index] ?? "intro");
            }
          } else {
            setActiveTab(tabIds[index] ?? "intro");
          }
        },
        {
          root: null,
          rootMargin: "-20% 0px -70% 0px",
          threshold: 0,
        },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="sticky left-0 right-0 top-[50px] z-[10] bg-[#272727] md:top-[60px]">
      <div className="mx-auto max-w-[1502px]">
        <div className="relative mx-auto max-w-[900px]">
          <ul className="flex w-full" id="tab-area">
            {tabs.map((tab) => (
              <li key={tab.id} className="relative flex flex-1">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    scrollToSection(tab.sectionId);
                  }}
                  className={`flex h-full min-h-[48px] w-full flex-1 items-center justify-center px-2 py-3 text-center text-sm font-medium md:min-h-[56px] md:px-4 md:py-4 md:text-[20px] ${
                    activeTab === tab.id ? "text-white" : "text-[#919191]"
                  }`}
                >
                  {tab.label}
                </button>
                {activeTab === tab.id && (
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-red-500 md:h-[2px]" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
