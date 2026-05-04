import { CtaButtons } from "@/components/home/CtaButtons";
import { site } from "@/lib/site-config";

const badges = [
  "부천·인천·시흥·안산 상담 가능",
  "신도리코 D470 상담 가능",
  "태흥아이에스 bizhub 상담 가능",
  "토너 포함 렌탈 상담",
  "기존 렌탈료 비교 가능",
  "사무실/학원/병원/공장 맞춤 추천",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-brand-blue">{site.positioningLine}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            부천·인천·시흥·안산 사업장 복합기 렌탈,
            <br />
            출력량에 맞춰 합리적으로 관리합니다.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            디지플러스는 사무실, 학원, 병원, 공장, 제조업체를 대상으로 복합기
            렌탈, 프린터 임대, 토너 관리, AS 상담을 제공합니다. 월 출력량과 사용
            환경을 기준으로 과한 장비가 아닌 적정 장비와 렌탈 조건을
            안내드립니다.
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
