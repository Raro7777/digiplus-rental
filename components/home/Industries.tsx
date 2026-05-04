const industries = [
  "사무실",
  "학원",
  "병원",
  "제조업/공장",
  "부동산/세무사",
  "소형 매장",
];

export function Industries() {
  return (
    <section className="border-t border-slate-100 bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          부천·인천·시흥·안산 사업장, 업종별 출력 환경에 맞춰 추천합니다.
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((name) => (
            <div
              key={name}
              className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-center text-sm font-semibold text-slate-800 shadow-sm"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
