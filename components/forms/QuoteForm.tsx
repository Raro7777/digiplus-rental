"use client";

import { useActionState } from "react";
import { submitQuote, type FormState } from "@/app/actions";
import { FieldError } from "@/components/forms/FieldError";

const initial: FormState = { ok: false, message: "" };

const inputClass =
  "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20";
const labelClass = "text-sm font-medium text-slate-700";

export function QuoteForm() {
  const [state, formAction, pending] = useActionState(submitQuote, initial);

  if (state.ok) {
    return (
      <div
        className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-6 text-emerald-900"
        role="status"
      >
        <p className="font-semibold">접수되었습니다.</p>
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
          <label className={labelClass} htmlFor="q-companyName">
            회사명 <span className="text-red-500">*</span>
          </label>
          <input
            id="q-companyName"
            name="companyName"
            required
            className={inputClass}
            autoComplete="organization"
          />
          <FieldError name="companyName" errors={state.fieldErrors} />
        </div>
        <div>
          <label className={labelClass} htmlFor="q-contactName">
            담당자명 <span className="text-red-500">*</span>
          </label>
          <input
            id="q-contactName"
            name="contactName"
            required
            className={inputClass}
            autoComplete="name"
          />
          <FieldError name="contactName" errors={state.fieldErrors} />
        </div>
        <div>
          <label className={labelClass} htmlFor="q-phone">
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            id="q-phone"
            name="phone"
            required
            className={inputClass}
            inputMode="tel"
            autoComplete="tel"
          />
          <FieldError name="phone" errors={state.fieldErrors} />
        </div>
        <div>
          <label className={labelClass} htmlFor="q-region">
            설치 지역 <span className="text-red-500">*</span>
          </label>
          <input id="q-region" name="region" required className={inputClass} />
          <FieldError name="region" errors={state.fieldErrors} />
        </div>
        <div>
          <label className={labelClass} htmlFor="desiredProduct">
            희망 상품
          </label>
          <input id="desiredProduct" name="desiredProduct" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="q-monthlyVolume">
            월 출력량
          </label>
          <input id="q-monthlyVolume" name="monthlyVolume" className={inputClass} />
        </div>
        <div>
          <span className={labelClass}>컬러 사용 여부</span>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-800">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="colorUse" value="많음" />
              많음
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="colorUse" value="보통" />
              보통
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="colorUse" value="거의 없음" />
              거의 없음
            </label>
          </div>
        </div>
        <div>
          <label className={labelClass} htmlFor="q-preferredDate">
            희망 설치일
          </label>
          <input id="q-preferredDate" name="preferredDate" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="q-message">
            문의 내용
          </label>
          <textarea
            id="q-message"
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
            개인정보 수집·이용에 동의합니다. (필수) — 상담 및 견적 안내 목적에만
            사용됩니다.
          </span>
        </label>
        <FieldError name="privacy" errors={state.fieldErrors} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-brand-blue py-3 text-sm font-semibold text-white shadow hover:bg-brand-blue/90 disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {pending ? "전송 중…" : "견적 문의 보내기"}
      </button>
    </form>
  );
}
