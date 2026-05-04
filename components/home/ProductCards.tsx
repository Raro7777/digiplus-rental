import Link from "next/link";

const products = [
  {
    title: "소형 사무실용",
    target: "1~5인 사무실, 소규모 매장",
    desc: "부담 없는 월 렌탈료, 기본 출력 중심",
  },
  {
    title: "표준 컬러 복합기",
    target: "학원, 병원, 일반 사무실",
    desc: "흑백/컬러 출력 균형형",
  },
  {
    title: "고속 출력형",
    target: "공장, 제조업, 출력량 많은 사무실",
    desc: "대량 출력과 안정성 중심",
  },
];

export function ProductCards() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          사용 환경에 맞는 복합기 렌탈 상품
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm font-medium text-brand-blue">
                추천 대상: {p.target}
              </p>
              <p className="mt-3 flex-1 text-sm text-slate-600">{p.desc}</p>
              <Link
                href="/quote"
                className="mt-6 inline-flex justify-center rounded-lg bg-brand-navy py-2.5 text-sm font-semibold text-white hover:bg-brand-navy/90"
              >
                이 상품 견적 받기
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link
            href="/products"
            className="text-sm font-semibold text-brand-blue hover:underline"
          >
            전체 상품 보기 →
          </Link>
        </p>
      </div>
    </section>
  );
}
