const items = [
  "월 렌탈료가 적정한지 모르겠다",
  "우리 사무실에 어떤 복합기가 맞는지 모르겠다",
  "토너 포함 조건인지 헷갈린다",
  "고장 났을 때 AS가 늦을까 걱정된다",
  "기존 렌탈 계약이 남아 있는데 교체 가능한지 궁금하다",
  "복합기 모델명이 어려워 비교하기 힘들다",
];

export function PainPoints() {
  return (
    <section className="border-y border-slate-100 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          복합기 렌탈, 이런 점이 고민이신가요?
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {items.map((t) => (
            <li
              key={t}
              className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-slate-700"
            >
              <span className="text-brand-blue" aria-hidden>
                ✓
              </span>
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-slate-600">
          디지플러스는 부천·인천·시흥·안산 사업장의 월 출력량과 사용 환경을
          기준으로 적정 장비와 렌탈 조건을 안내합니다. 무조건 최저가가 아니라,
          우리 사무실에 맞는 장비를 추천드립니다.
        </p>
      </div>
    </section>
  );
}
