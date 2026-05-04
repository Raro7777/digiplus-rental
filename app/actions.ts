"use server";

import { z } from "zod";

export type FormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
};

const interestOptions = [
  "신도리코 D470",
  "태흥아이에스 bizhub",
  "아직 모름",
] as const;

const diagnosisSchema = z.object({
  companyName: z.string().min(1, "회사명을 입력해 주세요."),
  contactName: z.string().min(1, "담당자명을 입력해 주세요."),
  phone: z.string().min(8, "연락처를 입력해 주세요."),
  region: z.string().min(1, "설치 지역을 입력해 주세요."),
  currentModel: z.string().min(1, "현재 사용 중인 모델을 입력해 주세요."),
  interestModel: z.enum(interestOptions, {
    message: "관심 모델을 선택해 주세요.",
  }),
  currentRent: z.string().min(1, "현재 월 렌탈료를 입력해 주세요."),
  monthlyVolume: z.string().min(1, "월 출력량을 입력해 주세요."),
  industry: z.string().optional(),
  colorRatio: z.string().optional(),
  tonerIncluded: z.string().optional(),
  contractRemaining: z.string().optional(),
  message: z.string().optional(),
  privacy: z.literal("on", {
    message: "개인정보 수집에 동의해 주세요.",
  }),
});

const quoteSchema = z.object({
  companyName: z.string().min(1, "회사명을 입력해 주세요."),
  contactName: z.string().min(1, "담당자명을 입력해 주세요."),
  phone: z.string().min(8, "연락처를 입력해 주세요."),
  region: z.string().min(1, "설치 지역을 입력해 주세요."),
  desiredProduct: z.string().optional(),
  monthlyVolume: z.string().optional(),
  colorUse: z.string().optional(),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
  privacy: z.literal("on", {
    message: "개인정보 수집에 동의해 주세요.",
  }),
});

function parseFormData(formData: FormData) {
  return Object.fromEntries(formData.entries());
}

export async function submitDiagnosis(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const raw = parseFormData(formData);
  const parsed = diagnosisSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      ok: false,
      message: "입력 내용을 확인해 주세요.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  console.info("[렌탈료 진단]", JSON.stringify(parsed.data, null, 2));

  return {
    ok: true,
    message:
      "렌탈료 진단 신청이 완료되었습니다. 디지플러스 담당자가 사용량과 조건을 확인한 뒤 맞춤 견적을 안내드리겠습니다.",
  };
}

export async function submitQuote(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const raw = parseFormData(formData);
  const parsed = quoteSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      ok: false,
      message: "입력 내용을 확인해 주세요.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  console.info("[견적 문의]", JSON.stringify(parsed.data, null, 2));

  return {
    ok: true,
    message: "견적 문의가 접수되었습니다. 담당자가 빠르게 연락드리겠습니다.",
  };
}
