"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import WaitlistModal from "./WaitlistModal";

type WaitlistModalContextType = {
  openModal: () => void;
  closeModal: () => void;
};

const WaitlistModalContext = createContext<WaitlistModalContextType | null>(
  null
);

export function useWaitlistModal() {
  const ctx = useContext(WaitlistModalContext);
  if (!ctx) {
    return {
      openModal: () => {
        window.location.href = "/waitlist";
      },
      closeModal: () => {},
    };
  }
  return ctx;
}

export default function WaitlistModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  const handleSuccess = useCallback(() => {
    setOpen(false);
    setSuccessToast(true);
  }, []);

  useEffect(() => {
    if (!successToast) return;
    const t = setTimeout(() => setSuccessToast(false), 4000);
    return () => clearTimeout(t);
  }, [successToast]);

  return (
    <WaitlistModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <WaitlistModal
        isOpen={open}
        onClose={closeModal}
        onSuccess={handleSuccess}
      />
      {successToast && (
        <div
          role="alert"
          className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-green-200 bg-green-50 px-6 py-4 text-center text-sm font-semibold text-green-800 shadow-lg md:bottom-8"
        >
          대기 신청이 완료되었습니다. 베타 오픈 시 연락드리겠습니다.
        </div>
      )}
    </WaitlistModalContext.Provider>
  );
}
