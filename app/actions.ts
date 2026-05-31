"use server";

import type { ZodError } from "zod";
import { storeLead } from "@/lib/leads/store";
import {
  diagnosisSchema,
  quoteSchema,
  toDiagnosisLead,
  toQuoteLead,
} from "@/lib/leads/validation";

export type FormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
};

function parseFormData(formData: FormData) {
  return Object.fromEntries(formData.entries());
}

function fieldErrors(error: ZodError) {
  return error.flatten().fieldErrors as Record<string, string[]>;
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
      fieldErrors: fieldErrors(parsed.error),
    };
  }

  if (parsed.data.website) {
    return {
      ok: true,
      message:
        "렌탈료 진단 신청이 완료되었습니다. 디지플러스 담당자가 사용량과 조건을 확인한 뒤 맞춤 견적을 안내드리겠습니다.",
    };
  }

  await storeLead(toDiagnosisLead(parsed.data));

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
      fieldErrors: fieldErrors(parsed.error),
    };
  }

  if (parsed.data.website) {
    return {
      ok: true,
      message: "견적 문의가 접수되었습니다. 담당자가 빠르게 연락드리겠습니다.",
    };
  }

  await storeLead(toQuoteLead(parsed.data));

  return {
    ok: true,
    message: "견적 문의가 접수되었습니다. 담당자가 빠르게 연락드리겠습니다.",
  };
}
