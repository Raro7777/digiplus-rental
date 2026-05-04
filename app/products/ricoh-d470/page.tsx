import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons } from "@/components/home/CtaButtons";

export const metadata: Metadata = {
  title: "신도리코 D470 컬러 복합기 렌탈",
  description:
    "컬러 출력과 A3 문서 출력이 필요한 부천·인천·시흥·안산 사업장에 적합한 신도리코 D470 렌탈 상담.",
};

const faqs = [
  {
    q: "어떤 사업장에 적합한가요?",
    a: "일반 사무실, 학원, 병원, 제조업 사무실 등 컬러 출력과 A3 문서 출력이 모두 필요한 환경에 맞춰 상담드립니다.",
  },
  {
    q: "렌탈 상담은 어떤 기준으로 진행되나요?",
    a: "월 출력량, 컬러 사용 비율, 현재 렌탈료, 토너 포함 여부 등을 확인한 뒤 적정 조건을 안내드립니다.",
  },
];

export default function RicohD470Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-sm text-brand-blue">
        <Link href="/products" className="hover:underline">
          주요 상품
        </Link>
        <span className="mx-2 text-slate-300">/</span>
        <span className="text-slate-600">신도리코 D470</span>
      </p>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">
        신도리코 D470 컬러 복합기 렌탈
      </h1>
      <p className="mt-4 text-lg font-medium text-slate-800">
        컬러 출력과 A3 문서 출력이 필요한 부천·인천·시흥·안산 사업장에 적합한 컬러
        복합기 렌탈 상품입니다.
      </p>

      <section className="mt-10 space-y-4 text-slate-600">
        <h2 className="text-xl font-semibold text-slate-900">추천 대상</h2>
        <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed">
          <li>컬러 출력이 필요한 사무실</li>
          <li>학원·병원·전문직 사무실</li>
          <li>A3 문서 출력이 필요한 사업장</li>
          <li>출력 품질과 안정성이 중요한 곳</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4 text-slate-600">
        <h2 className="text-xl font-semibold text-slate-900">주요 특징</h2>
        <p className="text-sm leading-relaxed">
          A3 컬러 복합기로, 문서·홍보물 등 컬러와 흑백 출력이 함께 필요한
          사업장에서 활용도가 높습니다. 스펙 나열 대신, 실제 사용 패턴을
          기준으로 렌탈 조건을 설계합니다.
        </p>
      </section>

      <section className="mt-10 space-y-4 text-slate-600">
        <h2 className="text-xl font-semibold text-slate-900">렌탈 상담 기준</h2>
        <p className="text-sm leading-relaxed">
          월 출력량·컬러 비율·토너 포함 여부·약정·기본 매수를 확인한 뒤, 과장된
          사양이 아닌 필요에 맞는 조건을 제안드립니다.
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
          href="/quote?product=d470"
          className="inline-flex justify-center rounded-lg bg-brand-navy px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navy/90"
        >
          D470 견적 문의
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
