import Link from "next/link";

const areas = [
  {
    title: "부천 복합기 렌탈",
    lines: "상동, 중동, 송내, 역곡 등 부천 사업장 상담",
    href: "/regions/bucheon",
  },
  {
    title: "인천 복합기 렌탈",
    lines: "남동구, 연수구, 미추홀구, 부평구, 서구 등 인천 사업장 상담",
    href: "/regions/incheon",
  },
  {
    title: "시흥 복합기 렌탈",
    lines: "정왕동, 배곧, 장현동, 은행동, 시화공단 상담",
    href: "/regions/siheung",
  },
  {
    title: "안산 복합기 렌탈",
    lines: "단원구, 상록구, 반월공단, 안산스마트허브 상담",
    href: "/regions/ansan",
  },
];

export function Regions() {
  return (
    <section className="bg-[#f7f8f4] py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-black tracking-wide text-brand-amber">
            LOCAL SERVICE AREA
          </p>
          <h2 className="mt-3 text-2xl font-black leading-tight text-brand-navy sm:text-3xl">
            부천·인천·시흥·안산
            <br />
            권역별 상담 페이지
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            디지플러스는 설치 지역과 업종, 월 출력량, 컬러 사용 비율, 현재
            렌탈료를 확인한 뒤 적정 장비와 렌탈 조건을 안내드립니다.
          </p>
          <p className="mt-8">
            <Link
              href="/regions"
              className="inline-flex rounded-lg bg-brand-navy px-5 py-3 text-sm font-bold text-white hover:bg-brand-forest"
            >
              전체 지역 페이지 보기
            </Link>
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {areas.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className="flex min-h-40 flex-col rounded-lg border border-[#d9e1d8] bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-amber/50 hover:shadow-[0_16px_30px_rgba(16,35,30,0.08)]"
            >
              <h3 className="text-lg font-black text-brand-navy">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                {a.lines}
              </p>
              <span className="mt-4 text-sm font-bold text-brand-blue">
                지역 페이지 →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
