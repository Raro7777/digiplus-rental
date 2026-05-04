import Link from "next/link";

export function DiagnosisCta() {
  return (
    <section className="bg-brand-navy py-14 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">
          현재 복합기 렌탈료가 적정한지 무료로 확인해보세요.
        </h2>
        <p className="mt-4 max-w-2xl text-slate-200">
          현재 월 렌탈료, 월 출력량, 컬러 사용량을 입력하시면 디지플러스가 사용
          환경에 맞는 렌탈 조건을 안내드립니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/diagnosis"
            className="inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-navy shadow hover:bg-slate-100"
          >
            렌탈료 진단하기
          </Link>
          <Link
            href="/diagnosis"
            className="inline-flex rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            현재 조건 비교하기
          </Link>
        </div>
      </div>
    </section>
  );
}
