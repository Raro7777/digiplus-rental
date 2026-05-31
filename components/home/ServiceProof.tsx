import { CtaButtons } from "@/components/home/CtaButtons";
import { site } from "@/lib/site-config";

export function ServiceProof() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            지역 사업장 상담에 맞춘 복합기 렌탈 안내
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {site.regionSummary} 권역의 사무실, 학원, 병원, 제조업체를 중심으로
            렌탈료 진단과 무료 견적을 안내합니다.
          </p>
          <CtaButtons className="mt-6" dense />
        </div>
        <dl className="grid gap-3 text-sm">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <dt className="font-semibold text-slate-900">상담 담당</dt>
            <dd className="mt-1 text-slate-600">
              {site.contactTitle} {site.contactName}
            </dd>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <dt className="font-semibold text-slate-900">전화 상담</dt>
            <dd className="mt-1 text-slate-600">{site.mobileDisplay}</dd>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <dt className="font-semibold text-slate-900">사무실</dt>
            <dd className="mt-1 text-slate-600">{site.address}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
