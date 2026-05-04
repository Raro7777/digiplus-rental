import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons } from "@/components/home/CtaButtons";

export const metadata: Metadata = {
  title: "주요 상품",
  description:
    "신도리코 D470, 태흥아이에스 bizhub 주력 복합기 렌탈과 부천·인천·시흥·안산 사업장 맞춤 상담.",
};

const flagship = [
  {
    name: "신도리코 D470 컬러 복합기 렌탈",
    href: "/products/ricoh-d470",
    quoteHref: "/quote?product=d470",
    note: "A3 컬러 · 사무실·학원·병원·제조 사무",
  },
  {
    name: "태흥아이에스 bizhub 복합기 렌탈",
    href: "/products/konica-bizhub",
    quoteHref: "/quote?product=bizhub",
    note: "중소형 사무실 · 합리형 · 교체 상담",
  },
];

const categories = [
  { name: "흑백 복합기", note: "문서 위주 사무실에 적합" },
  { name: "컬러 복합기", note: "학원·병원·홍보물 등 컬러 필요 시" },
  { name: "소형 사무실용", note: "1~5인, 출력량 적은 환경" },
  { name: "고속 출력형", note: "공장·제조 사무, 대량 출력" },
  { name: "기존 렌탈 교체", note: "약정·요금 비교 상담" },
];

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold text-slate-900">주요 상품</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        홈페이지에서는 주력 모델 2종을 중심으로 신뢰 있게 안내합니다. 스펙
        나열이 아니라, 월 출력량·컬러 비율·설치 환경을 기준으로 적정 장비와
        렌탈 조건을 설명드립니다.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-900">주력 복합기 렌탈</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {flagship.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-2xl border-2 border-brand-navy/10 bg-slate-50 p-6"
            >
              <h3 className="text-lg font-semibold text-brand-navy">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.note}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href={p.href}
                  className="inline-flex rounded-lg bg-brand-navy px-4 py-2 text-sm font-semibold text-white hover:bg-brand-navy/90"
                >
                  상세 보기
                </Link>
                <Link
                  href={p.quoteHref}
                  className="inline-flex rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  견적 문의
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-slate-900">유형별 상담</h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          아래 유형은 상담 시 참고용 분류입니다. 실제 추천은 D470·bizhub 등
          주력 라인과 출력 환경을 함께 검토합니다.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article
              key={c.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{c.name}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{c.note}</p>
              <Link
                href="/quote"
                className="mt-5 inline-flex justify-center rounded-lg bg-brand-blue py-2.5 text-sm font-semibold text-white hover:bg-brand-blue/90"
              >
                상담 요청
              </Link>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-14 rounded-2xl border border-slate-100 bg-slate-50 p-6">
        <p className="text-sm font-medium text-slate-900">다음 단계</p>
        <CtaButtons className="mt-4" />
      </div>
    </div>
  );
}
