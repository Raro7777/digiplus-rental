import { CtaButtons } from "@/components/home/CtaButtons";
import { site } from "@/lib/site-config";

export function ServiceProof() {
  return (
    <section className="bg-brand-paper py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-black tracking-wide text-brand-amber">
            CONTACT & OPERATIONS
          </p>
          <h2 className="mt-3 text-2xl font-black text-brand-navy sm:text-3xl">
            지역 사업장 상담에 맞춘 복합기 렌탈 안내
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            {site.regionSummary} 권역의 사무실, 학원, 병원, 제조업체를 중심으로
            렌탈료 진단과 무료 견적을 안내합니다.
          </p>
          <CtaButtons className="mt-6" dense />
        </div>
        <dl className="grid gap-3 text-sm">
          <div className="rounded-lg border border-[#d9e1d8] bg-white p-4">
            <dt className="font-black text-brand-navy">상담 담당</dt>
            <dd className="mt-1 text-slate-600">
              {site.contactTitle} {site.contactName}
            </dd>
          </div>
          <div className="rounded-lg border border-[#d9e1d8] bg-white p-4">
            <dt className="font-black text-brand-navy">전화 상담</dt>
            <dd className="mt-1 text-slate-600">{site.mobileDisplay}</dd>
          </div>
          <div className="rounded-lg border border-[#d9e1d8] bg-white p-4">
            <dt className="font-black text-brand-navy">사무실</dt>
            <dd className="mt-1 text-slate-600">{site.address}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
