import Link from "next/link";

const flagship = [
  {
    title: "신도리코 D470 컬러 복합기 렌탈",
    target:
      "컬러 출력이 필요한 사무실 · 학원/병원/전문직 사무실 · A3 문서 출력이 필요한 사업장 · 출력 품질과 안정성이 중요한 곳",
    desc: "컬러 출력과 A3 문서 출력이 필요한 사업장에 적합한 복합기입니다. 월 출력량과 컬러 사용 비율에 맞춰 렌탈 조건을 안내드립니다.",
    quote: "/quote?product=d470",
    detail: "/products/ricoh-d470",
    cta1: "D470 견적 받기",
    cta2: "이 모델 상담하기",
  },
  {
    title: "태흥아이에스 bizhub 복합기 렌탈",
    target:
      "중소형 사무실 · 흑백/컬러 출력량이 일정한 사업장 · 합리적인 렌탈료를 원하는 고객 · 기존 렌탈 교체를 검토하는 고객",
    desc: "사무실 사용 환경에 맞춰 컬러/흑백 모델을 추천할 수 있는 복합기 라인업입니다. 현재 렌탈료와 월 출력량을 기준으로 적정 조건을 비교해드립니다.",
    quote: "/quote?product=bizhub",
    detail: "/products/konica-bizhub",
    cta1: "bizhub 견적 받기",
    cta2: "이 모델 상담하기",
  },
];

export function ProductCards() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          주력 복합기 렌탈 상품
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          모델을 과도하게 늘리지 않고, 대표 주력 2종을 중심으로 신뢰 있게
          안내합니다. 상세는 각 상품 페이지에서 확인하실 수 있습니다.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {flagship.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6 lg:p-8"
            >
              <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm font-medium text-brand-blue">
                추천 대상: {p.target}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                {p.desc}
              </p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <Link
                  href={p.quote}
                  className="inline-flex flex-1 justify-center rounded-lg bg-brand-navy py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-navy/90"
                >
                  {p.cta1}
                </Link>
                <Link
                  href={p.detail}
                  className="inline-flex flex-1 justify-center rounded-lg border border-slate-300 bg-white py-2.5 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  {p.cta2}
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link
            href="/products"
            className="text-sm font-semibold text-brand-blue hover:underline"
          >
            기타 유형·상담 흐름 안내 (상품 페이지) →
          </Link>
        </p>
      </div>
    </section>
  );
}
