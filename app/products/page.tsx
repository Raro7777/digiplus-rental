import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "주요 상품",
  description:
    "소형 사무실용, 컬러 표준, 고속 출력형 등 사용 환경별 복합기 렌탈 상품을 안내합니다.",
};

const categories = [
  { name: "흑백 복합기", note: "문서 위주 사무실에 적합" },
  { name: "컬러 복합기", note: "학원·병원·홍보물 등 컬러 필요 시" },
  { name: "소형 사무실용", note: "1~5인, 출력량 적은 환경" },
  { name: "고속 출력형", note: "공장·제조 사무, 대량 출력" },
  { name: "학원/병원 추천", note: "컬러·내구성 균형" },
  { name: "공장/제조업 추천", note: "속도·안정성 중심" },
  { name: "기존 렌탈 교체", note: "약정·요금 비교 상담" },
];

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold text-slate-900">주요 상품</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        모델명보다 사용 환경 기준으로 상품을 이해할 수 있도록 구성했습니다.
        월 예상 렌탈료·기본 매수·토너/AS 포함 여부는 상담 후 안내드립니다.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <article
            key={c.name}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-brand-navy">{c.name}</h2>
            <p className="mt-2 flex-1 text-sm text-slate-600">{c.note}</p>
            <ul className="mt-4 space-y-1 text-xs text-slate-500">
              <li>· 월 예상 렌탈료: 상담 후 안내</li>
              <li>· 기본 출력매수: 사용량에 따라 조정</li>
              <li>· 토너/AS: 조건별 가능</li>
            </ul>
            <Link
              href="/quote"
              className="mt-5 inline-flex justify-center rounded-lg bg-brand-navy py-2.5 text-sm font-semibold text-white hover:bg-brand-navy/90"
            >
              이 상품 견적 받기
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
