"use client";

import { useActionState } from "react";
import { submitDiagnosis, type FormState } from "@/app/actions";
import { FieldError } from "@/components/forms/FieldError";

const initial: FormState = { ok: false, message: "" };

const inputClass =
  "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20";
const labelClass = "text-sm font-medium text-slate-700";

export function DiagnosisForm() {
  const [state, formAction, pending] = useActionState(submitDiagnosis, initial);

  if (state.ok) {
    return (
      <div
        className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-6 text-emerald-900"
        role="status"
      >
        <p className="font-semibold">신청이 완료되었습니다.</p>
        <p className="mt-2 text-sm leading-relaxed">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {!state.ok && state.message ? (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="companyName">
            회사명 <span className="text-red-500">*</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            required
            className={inputClass}
            autoComplete="organization"
          />
          <FieldError name="companyName" errors={state.fieldErrors} />
        </div>
        <div>
          <label className={labelClass} htmlFor="contactName">
            담당자명 <span className="text-red-500">*</span>
          </label>
          <input
            id="contactName"
            name="contactName"
            required
            className={inputClass}
            autoComplete="name"
          />
          <FieldError name="contactName" errors={state.fieldErrors} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            required
            className={inputClass}
            inputMode="tel"
            autoComplete="tel"
          />
          <FieldError name="phone" errors={state.fieldErrors} />
        </div>
        <div>
          <label className={labelClass} htmlFor="region">
            설치 지역 <span className="text-red-500">*</span>
          </label>
          <input
            id="region"
            name="region"
            required
            className={inputClass}
            placeholder="예: 시흥 정왕동"
          />
          <FieldError name="region" errors={state.fieldErrors} />
        </div>
        <div>
          <label className={labelClass} htmlFor="currentRent">
            현재 월 렌탈료 <span className="text-red-500">*</span>
          </label>
          <input
            id="currentRent"
            name="currentRent"
            required
            className={inputClass}
            placeholder="없으면 '없음'"
          />
          <FieldError name="currentRent" errors={state.fieldErrors} />
        </div>
        <div>
          <label className={labelClass} htmlFor="monthlyVolume">
            월 출력량 <span className="text-red-500">*</span>
          </label>
          <input
            id="monthlyVolume"
            name="monthlyVolume"
            required
            className={inputClass}
            placeholder="대략 매수 또는 박스 수"
          />
          <FieldError name="monthlyVolume" errors={state.fieldErrors} />
        </div>
        <div>
          <label className={labelClass} htmlFor="industry">
            업종
          </label>
          <input id="industry" name="industry" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="colorRatio">
            컬러 출력 비율
          </label>
          <input
            id="colorRatio"
            name="colorRatio"
            className={inputClass}
            placeholder="예: 20%"
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="currentDevice">
            현재 사용 장비
          </label>
          <input id="currentDevice" name="currentDevice" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="tonerIncluded">
            토너 포함 여부
          </label>
          <input id="tonerIncluded" name="tonerIncluded" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="contractRemaining">
            약정 잔여기간
          </label>
          <input
            id="contractRemaining"
            name="contractRemaining"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="preferredDate">
            희망 설치일
          </label>
          <input id="preferredDate" name="preferredDate" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            문의 내용
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={inputClass}
          />
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <label className="flex items-start gap-3 text-sm text-slate-700">
          <input
            type="checkbox"
            name="privacy"
            value="on"
            required
            className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-blue"
          />
          <span>
            입력하신 정보는 복합기 렌탈 상담 및 견적 안내를 위해 수집되며,
            상담 목적 외에는 사용되지 않습니다. (필수)
          </span>
        </label>
        <FieldError name="privacy" errors={state.fieldErrors} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-brand-navy py-3 text-sm font-semibold text-white shadow hover:bg-brand-navy/90 disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {pending ? "전송 중…" : "렌탈료 진단 신청"}
      </button>
    </form>
  );
}
