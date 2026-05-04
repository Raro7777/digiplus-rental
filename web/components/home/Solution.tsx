const cards = [
  {
    title: "출력량 확인",
    body: "월 출력량과 컬러 사용 비율을 확인합니다.",
  },
  {
    title: "적정 장비 추천",
    body: "과한 장비가 아닌 사용 환경에 맞는 장비를 추천합니다.",
  },
  {
    title: "렌탈 조건 안내",
    body: "월 렌탈료, 기본 매수, 초과 비용, 토너 포함 여부를 안내합니다.",
  },
];

export function Solution() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          디지플러스는 상품보다 먼저 사용 환경을 확인합니다.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-brand-navy">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
