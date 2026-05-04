import { CtaButtons } from "@/components/home/CtaButtons";

const badges = [
  "시흥/안산 상담",
  "흑백/컬러 복합기",
  "토너 포함 상담",
  "AS 관리",
  "기존 렌탈료 비교",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            시흥 사무실 복합기 렌탈,
            <br />
            출력량에 맞춰 합리적으로 관리합니다.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            디지플러스는 시흥·정왕·배곧·시화공단 사업장을 대상으로 복합기 렌탈,
            프린터 임대, 토너 관리, AS 상담을 제공합니다. 월 출력량과 사용
            환경에 맞춰 과한 장비가 아닌 적정 장비를 추천드립니다.
          </p>
          <CtaButtons className="mt-8" />
          <ul className="mt-10 flex flex-wrap gap-2">
            {badges.map((b) => (
              <li
                key={b}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 sm:text-sm"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
