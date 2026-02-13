/** 010-XXXX-XXXX 형식 검증 */
export const PHONE_REGEX = /^010-\d{4}-\d{4}$/;

export function validatePhone(value: string): boolean {
  return PHONE_REGEX.test(value.trim());
}

/**
 * 저장용으로 정규화: 01087376022
 * - 010-8737-6022 → 01087376022
 * - 1087376022 → 01087376022 (앞 0 보정)
 */
export function normalizePhoneForStorage(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10 && digits.startsWith("1")) {
    return "0" + digits; // 1087376022 → 01087376022
  }
  if (digits.length === 11 && digits.startsWith("010")) {
    return digits;
  }
  return digits; // 그 외는 숫자만 반환
}

/**
 * 입력 시 010-XXXX-XXXX 형식으로 포맷
 * 1087376022 붙여넣기 시 010-8737-6022로 변환
 */
export function formatPhoneInput(value: string): string {
  let digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 10 && digits.startsWith("1")) {
    digits = "0" + digits;
  }
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}
