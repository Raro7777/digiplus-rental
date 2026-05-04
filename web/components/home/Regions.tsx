import { site } from "@/lib/site-config";

export function Regions() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          시흥·정왕·배곧·시화공단 사업장 상담 가능
        </h2>
        <ul className="mt-8 flex flex-wrap gap-2">
          {site.regions.map((r) => (
            <li
              key={r}
              className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800"
            >
              {r}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-slate-600">
          디지플러스는 시흥 및 인근 사업장을 대상으로 복합기 렌탈 상담과 설치
          관리를 제공합니다.
        </p>
      </div>
    </section>
  );
}
