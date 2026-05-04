import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons } from "@/components/home/CtaButtons";
import { REGION_SLUGS, getRegionSeo } from "@/lib/regions-seo";
import { coreServiceCities, site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "지역 안내",
  description: `${site.name} — 부천·인천·시흥·안산·공단권 복합기·복사기 렌탈 지역 페이지.`,
};

export default function RegionsIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold text-slate-900">지역별 복합기·복사기 렌탈</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        {coreServiceCities.join("·")} 및 세부 권역 사업장을 대상으로 상담·설치
        관리를 제공합니다. 아래 지역 페이지에서 고민 유형과 추천 모델(D470·
        bizhub) 안내를 확인한 뒤, 렌탈료 진단 또는 무료 견적로 이어지실 수
        있습니다.
      </p>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {REGION_SLUGS.map((slug) => {
          const r = getRegionSeo(slug)!;
          return (
            <li key={slug}>
              <Link
                href={`/regions/${slug}`}
                className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-brand-blue/40 hover:bg-slate-50"
              >
                <span className="font-semibold text-slate-900">{r.h1}</span>
                <p className="mt-2 line-clamp-2 text-xs text-slate-500">
                  {r.metaDescription}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-12 rounded-2xl border border-slate-100 bg-slate-50 p-6">
        <p className="text-sm font-medium text-slate-900">권역 요약</p>
        <p className="mt-2 text-sm text-slate-600">{site.regionSummary}</p>
        <CtaButtons className="mt-6" />
      </div>
    </div>
  );
}
