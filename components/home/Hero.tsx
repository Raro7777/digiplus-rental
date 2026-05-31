import Link from "next/link";
import { CtaButtons } from "@/components/home/CtaButtons";

const badges = [
  "부천 상동·중동",
  "인천 남동·연수",
  "시흥 시화공단",
  "안산 반월공단",
  "렌탈료 비교",
  "토너·AS 상담",
];

const servicePoints = [
  { city: "부천", note: "상동·중동" },
  { city: "인천", note: "남동·연수" },
  { city: "시흥", note: "시화공단" },
  { city: "안산", note: "반월공단" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f4]">
      <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#0f6b7c,#174238,#c88316)]" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:py-22">
        <div className="grid gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
          <div>
            <p className="text-sm font-black tracking-wide text-brand-amber">
              지역 사업장 복합기 렌탈
            </p>
            <h1 className="mt-4 max-w-2xl text-[2.55rem] font-black leading-[1.08] tracking-normal text-brand-navy sm:text-5xl lg:text-[3.35rem]">
              우리 동네 설치 조건을
              <br />
              먼저 확인합니다
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              디지플러스는 부천·인천·시흥·안산 사업장의 설치 지역, 월 출력량,
              컬러 비율, 현재 렌탈료를 먼저 확인한 뒤 적정한 복합기 렌탈 조건을
              안내합니다.
            </p>
            <CtaButtons className="mt-8" />
            <ul className="mt-8 flex flex-wrap gap-2">
              {badges.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-[#d7dfd4] bg-white px-3 py-1.5 text-xs font-bold text-brand-forest sm:text-sm"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[18px] border border-[#d9ddcf] bg-brand-paper p-5 shadow-[0_18px_45px_rgba(16,35,30,0.12)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-black tracking-widest text-brand-amber">
                SERVICE MAP
              </p>
              <Link
                href="/regions"
                className="rounded-full bg-brand-navy px-3 py-1.5 text-xs font-bold text-white"
              >
                지역 전체
              </Link>
            </div>
            <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-2xl border border-[#ddd3c1] bg-[linear-gradient(135deg,#e8d7bd_0_24%,transparent_24%_29%,#dbe7dc_29%_58%,transparent_58%_63%,#efe3cd_63%)]">
              <span className="absolute left-[32%] top-[34%] h-3.5 w-3.5 rounded-full bg-brand-amber shadow-[0_0_0_8px_rgba(200,131,22,0.18)]" />
              <span className="absolute left-[56%] top-[40%] h-3.5 w-3.5 rounded-full bg-brand-amber shadow-[0_0_0_8px_rgba(200,131,22,0.18)]" />
              <span className="absolute left-[45%] top-[62%] h-3.5 w-3.5 rounded-full bg-brand-amber shadow-[0_0_0_8px_rgba(200,131,22,0.18)]" />
              <span className="absolute left-[70%] top-[67%] h-3.5 w-3.5 rounded-full bg-brand-amber shadow-[0_0_0_8px_rgba(200,131,22,0.18)]" />
              <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 p-4 shadow-sm">
                <p className="text-sm font-black text-brand-navy">부천·인천·시흥·안산</p>
                <p className="mt-1 text-xs font-semibold text-slate-600">
                  권역별 출력량·설치 일정 상담
                </p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {servicePoints.map((point) => (
                <div key={point.city} className="rounded-lg bg-white p-3">
                  <p className="text-xs font-semibold text-slate-500">{point.city}</p>
                  <p className="mt-1 text-sm font-black text-brand-navy">
                    {point.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
