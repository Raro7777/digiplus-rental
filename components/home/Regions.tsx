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
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          부천·인천·시흥·안산 사업장 복합기 렌탈 상담 가능
        </h2>
        <p className="mt-4 max-w-3xl text-slate-600">
          디지플러스는 부천, 인천, 시흥, 안산 지역 사업장을 대상으로 복합기 렌탈
          상담과 설치 관리를 제공합니다. 사무실 규모, 월 출력량, 컬러 사용 비율,
          현재 렌탈료를 확인한 뒤 적정 장비와 렌탈 조건을 안내드립니다.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {areas.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-6 transition hover:border-brand-blue/40 hover:bg-white"
            >
              <h3 className="text-lg font-semibold text-brand-navy">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{a.lines}</p>
              <span className="mt-4 text-sm font-medium text-brand-blue">
                지역 페이지 →
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm">
          <Link href="/regions" className="font-semibold text-brand-blue hover:underline">
            복사기·공단권 등 전체 지역 페이지 보기
          </Link>
        </p>
      </div>
    </section>
  );
}
