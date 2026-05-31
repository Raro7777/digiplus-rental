import { z } from "zod";
import type { DiagnosisLeadInput, QuoteLeadInput } from "@/lib/leads/types";

const optionalText = z
  .string()
  .trim()
  .optional()
  .transform((value) => (value ? value : undefined));

const phone = z
  .string()
  .trim()
  .min(8, "연락처를 입력해 주세요.")
  .transform((value) => value.replace(/[^\d+]/g, ""));

const honeypot = z
  .string()
  .optional()
  .transform((value) => value?.trim() ?? "");

const privacy = z.literal("on", {
  message: "개인정보 수집에 동의해 주세요.",
});

const interestOptions = [
  "신도리코 D470",
  "태흥아이에스 bizhub",
  "아직 모름",
] as const;

export const diagnosisSchema = z.object({
  companyName: z.string().trim().min(1, "회사명을 입력해 주세요."),
  contactName: z.string().trim().min(1, "담당자명을 입력해 주세요."),
  phone,
  region: z.string().trim().min(1, "설치 지역을 입력해 주세요."),
  currentModel: z.string().trim().min(1, "현재 사용 중인 모델을 입력해 주세요."),
  interestModel: z.enum(interestOptions, {
    message: "관심 모델을 선택해 주세요.",
  }),
  currentRent: z.string().trim().min(1, "현재 월 렌탈료를 입력해 주세요."),
  monthlyVolume: z.string().trim().min(1, "월 출력량을 입력해 주세요."),
  industry: optionalText,
  colorRatio: optionalText,
  tonerIncluded: optionalText,
  contractRemaining: optionalText,
  message: optionalText,
  privacy,
  website: honeypot,
});

export const quoteSchema = z.object({
  companyName: z.string().trim().min(1, "회사명을 입력해 주세요."),
  contactName: z.string().trim().min(1, "담당자명을 입력해 주세요."),
  phone,
  region: z.string().trim().min(1, "설치 지역을 입력해 주세요."),
  desiredProduct: optionalText,
  monthlyVolume: optionalText,
  colorUse: optionalText,
  preferredDate: optionalText,
  message: optionalText,
  privacy,
  website: honeypot,
});

export function toDiagnosisLead(
  data: z.infer<typeof diagnosisSchema>,
): DiagnosisLeadInput {
  return {
    kind: "diagnosis",
    companyName: data.companyName,
    contactName: data.contactName,
    phone: data.phone,
    region: data.region,
    currentModel: data.currentModel,
    interestModel: data.interestModel,
    currentRent: data.currentRent,
    monthlyVolume: data.monthlyVolume,
    industry: data.industry,
    colorRatio: data.colorRatio,
    tonerIncluded: data.tonerIncluded,
    contractRemaining: data.contractRemaining,
    message: data.message,
  };
}

export function toQuoteLead(data: z.infer<typeof quoteSchema>): QuoteLeadInput {
  return {
    kind: "quote",
    companyName: data.companyName,
    contactName: data.contactName,
    phone: data.phone,
    region: data.region,
    desiredProduct: data.desiredProduct,
    monthlyVolume: data.monthlyVolume,
    colorUse: data.colorUse,
    preferredDate: data.preferredDate,
    message: data.message,
  };
}
