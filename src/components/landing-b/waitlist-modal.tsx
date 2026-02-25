"use client"

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWaitlist } from "./waitlist-context"
import { formatPhoneInput, validatePhone } from "@/lib/phone"

export function WaitlistModal() {
  const { isOpen, close } = useWaitlist()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const overlayRef = useRef<HTMLDivElement>(null)

  const referralCode = searchParams.get("ref") ?? ""

  // Reset form when opening
  useEffect(() => {
    if (isOpen) {
      setEmail("")
      setPhone("")
      setHoneypot("")
      setStatus("idle")
      setErrorMsg("")
    }
  }, [isOpen])

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
    }
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, close])

  // Close on overlay click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) close()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setErrorMsg("이메일을 입력해 주세요.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      setErrorMsg("올바른 이메일 형식을 입력해 주세요.")
      return
    }

    if (phone.trim() && !validatePhone(phone)) {
      setErrorMsg("연락처는 010-XXXX-XXXX 형식으로 입력해 주세요.")
      return
    }

    setErrorMsg("")
    setStatus("loading")

    try {
      const res = await fetch("/api/collect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          phone: phone.trim(),
          honeypot,
          referral_code: referralCode,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error ?? "Failed to submit")
      }

      setStatus("success")
    } catch {
      setStatus("error")
      setErrorMsg("신청 중 오류가 발생했습니다. 다시 시도해 주세요.")
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="가입 대기 신청"
    >
      {/* Backdrop blur */}
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-md animate-in fade-in zoom-in-95 duration-300 rounded-2xl border border-border/60 bg-card shadow-2xl shadow-violet-500/10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/50 px-6 py-5">
          <h2 className="text-lg font-bold text-foreground">{"레비오사 AI 대기 신청"}</h2>
          <button
            onClick={close}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="닫기"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {status === "success" ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-purple-100">
                <svg className="h-7 w-7 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground">{"신청이 완료되었습니다!"}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {"셀러 운영 병목 진단 자료를 이메일로 보내드리겠습니다."}
                <br />
                {"감사합니다!"}
              </p>
              <Button
                onClick={close}
                className="mt-6 bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700"
              >
                {"확인"}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                {"대기 신청 시 셀러 운영 병목 진단 자료를 바로 보내드립니다."}
              </p>

              {/* Honeypot field - hidden from real users, bots will fill it */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="absolute -left-[9999px]"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (errorMsg) setErrorMsg("")
                    }}
                    placeholder="이메일 *"
                    className="w-full rounded-xl border border-border/80 bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-violet-400 focus:ring-2 focus:ring-violet-200/50"
                    autoFocus
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(formatPhoneInput(e.target.value))
                      if (errorMsg) setErrorMsg("")
                    }}
                    placeholder="010-XXXX-XXXX (선택)"
                    maxLength={13}
                    className="w-full rounded-xl border border-border/80 bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-violet-400 focus:ring-2 focus:ring-violet-200/50"
                  />
                </div>
              </div>

              {errorMsg && (
                <p className="mt-3 text-xs text-destructive">{errorMsg}</p>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 w-full bg-gradient-to-r from-violet-500 to-purple-500 py-6 text-base font-semibold text-white shadow-lg shadow-violet-500/20 transition-all hover:from-violet-600 hover:to-purple-600 hover:shadow-violet-500/30 disabled:opacity-60"
              >
                {status === "loading" ? "신청 중..." : "대기 신청하기"}
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground/70">
                {"대기 신청 시 알림(이메일/문자) 수신에 동의한 것으로 간주됩니다."}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
