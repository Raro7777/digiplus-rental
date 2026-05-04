import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons } from "@/components/home/CtaButtons";

export const metadata: Metadata = {
  title: "태흥아이에스 bizhub 복합기 렌탈",
  description:
    "중소형 사무실과 일반 사업장에 맞춰 컬러·흑백 사용량 기준으로 추천하는 태흥아이에스 bizhub 렌탈 상담.",
};

const faqs = [
  {
    q: "bizhub는 어떤 환경에 맞나요?",
    a: "중소형 사무실, 흑백/컬러 출력량이 일정한 사업장, 합리적인 렌탈료를 원하시는 고객께 라인업별로 추천드립니다.",
  },
  {
    q: "모델명이 확정되지 않았는데 상담 가능한가요?",
    a: "가능합니다. 사용 환경과 출력량을 먼저 확인한 뒤, 적합한 bizhub 주력 모델을 안내드립니다.",
  },
];

export default function KonicaBizhubPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-sm text-brand-blue">
        <Link href="/products" className="hover:underline">
          주요 상품
        </Link>
        <span className="mx-2 text-slate-300">/</span>
        <span className="text-slate-600">태흥아이에스 bizhub</span>
      </p>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">
        태흥아이에스 bizhub 복합기 렌탈
      </h1>
      <p className="mt-4 text-lg font-medium text-slate-800">
        중소형 사무실과 일반 사업장에 맞춰 컬러/흑백 사용량 기준으로 추천 가능한
        복합기 렌탈 상품입니다.
      </p>

      <section className="mt-10 space-y-4 text-slate-600">
        <h2 className="text-xl font-semibold text-slate-900">추천 대상</h2>
        <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed">
          <li>중소형 사무실</li>
          <li>흑백/컬러 출력량이 일정한 사업장</li>
          <li>합리적인 렌탈료를 원하는 고객</li>
          <li>기존 렌탈 교체를 검토하는 고객</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4 text-slate-600">
        <h2 className="text-xl font-semibold text-slate-900">주요 특징</h2>
        <p className="text-sm leading-relaxed">
          태흥아이에스 bizhub 라인업은 사무실·소형 사업장·전문직 사무실 등에서
          사용하기 좋은 복합기 라인입니다. 컬러 사용량, 흑백 출력량, 월 출력량을
          기준으로 적합한 모델을 추천드립니다.
        </p>
      </section>

      <section className="mt-10 space-y-4 text-slate-600">
        <h2 className="text-xl font-semibold text-slate-900">렌탈 상담 기준</h2>
        <p className="text-sm leading-relaxed">
          현재 렌탈료와 월 출력량을 비교해 적정 조건인지 확인하고, 토너·AS 포함
          여부까지 함께 검토합니다.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">자주 묻는 질문</h2>
        <dl className="mt-4 space-y-4">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt className="text-sm font-semibold text-slate-900">{f.q}</dt>
              <dd className="mt-1 text-sm text-slate-600">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href="/quote?product=bizhub"
          className="inline-flex justify-center rounded-lg bg-brand-navy px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy/90"
        >
          bizhub 견적 문의
        </Link>
        <Link
          href="/diagnosis"
          className="inline-flex justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          렌탈료 진단
        </Link>
      </div>
      <div className="mt-6">
        <CtaButtons dense />
      </div>
    </div>
  );
}
