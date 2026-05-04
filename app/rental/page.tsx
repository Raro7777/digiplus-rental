import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons } from "@/components/home/CtaButtons";

export const metadata: Metadata = {
  title: "복합기 렌탈 안내",
  description:
    "복합기 렌탈 개념, 비용 구조, 토너·약정·초과 매수 등 확인해야 할 조건을 쉽게 설명합니다.",
};

export default function RentalPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold text-slate-900">복합기 렌탈 안내</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        복합기 렌탈은 단순히 장비를 빌리는 것이 아니라, 월 출력량, 토너 사용량,
        유지보수 조건까지 함께 고려해야 합니다. 디지플러스는 고객의 출력 환경을
        먼저 확인한 뒤 과한 장비가 아닌 적정 장비와 렌탈 조건을 안내드립니다.
      </p>

      <ol className="mt-10 space-y-8 text-slate-700">
        {[
          {
            t: "복합기 렌탈이란?",
            d: "장비와 유지·토너·AS 조건을 월 정액으로 이용하는 방식입니다.",
          },
          {
            t: "렌탈과 구매의 차이",
            d: "초기 비용 부담을 줄이고, 계약 기간 동안 관리·소모품을 패키지로 맞출 수 있습니다.",
          },
          {
            t: "렌탈료에 영향을 주는 요소",
            d: "출력량, 컬러 비율, 기본 매수, 토너 포함 여부, 약정, 장비 사양 등이 반영됩니다.",
          },
          {
            t: "토너 포함/미포함",
            d: "포함 시 편의성이 높고, 미포함 시 월 고정료는 낮을 수 있으나 실사용에 따라 변동됩니다.",
          },
          {
            t: "약정기간과 기본 매수",
            d: "계약 조건에 따라 기본 제공 매수와 초과 장당 비용이 달라질 수 있습니다.",
          },
        ].map((s, i) => (
          <li key={s.t} className="border-l-4 border-brand-blue pl-4">
            <h2 className="text-lg font-semibold text-slate-900">
              {i + 1}. {s.t}
            </h2>
            <p className="mt-2 text-sm leading-relaxed">{s.d}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 rounded-2xl bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-slate-900">디지플러스 상담 방식</h2>
        <p className="mt-2 text-sm text-slate-600">
          설치 지역·업종·월 출력량을 확인한 뒤, 흑백/컬러 비율과 토너 조건을
          반영해 견적 방향을 잡습니다.
        </p>
        <CtaButtons className="mt-6" />
        <p className="mt-6 text-center text-sm">
          <Link href="/faq" className="text-brand-blue hover:underline">
            FAQ 보기
          </Link>
        </p>
      </div>
    </div>
  );
}
