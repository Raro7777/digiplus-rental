import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaButtons } from "@/components/home/CtaButtons";
import {
  REGION_SLUGS,
  type RegionSlug,
  getRegionSeo,
  regionMetadata,
} from "@/lib/regions-seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return REGION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const r = getRegionSeo(slug);
  if (!r) return { title: "지역 안내" };
  return regionMetadata(slug as RegionSlug);
}

export default async function RegionSeoPage({ params }: Props) {
  const { slug } = await params;
  const r = getRegionSeo(slug);
  if (!r) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-sm text-brand-blue">
        <Link href="/regions" className="hover:underline">
          지역 안내
        </Link>
        <span className="mx-2 text-slate-300">/</span>
        <span className="text-slate-600">{r.h1}</span>
      </p>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">{r.h1}</h1>
      <p className="mt-4 text-slate-600">{r.body}</p>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-slate-900">이런 고민이 있으신가요?</h2>
        <p className="mt-2 text-sm text-slate-600">{r.worryIntro}</p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-slate-700">
          {r.worryBullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">추천 모델</h2>
        <p className="mt-2 text-sm text-slate-600">
          신도리코 <strong>D470</strong> 컬러 복합기와{" "}
          <strong>태흥아이에스 bizhub</strong> 라인업 중, 월 출력량·컬러 비율·
          설치 환경에 맞는 장비를 안내드립니다.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/products/ricoh-d470"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:border-brand-blue"
          >
            D470 상세
          </Link>
          <Link
            href="/products/konica-bizhub"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:border-brand-blue"
          >
            bizhub 상세
          </Link>
        </div>
      </section>

      <div className="mt-12 space-y-4 rounded-2xl border border-brand-navy/15 bg-brand-navy/[0.03] p-6">
        <p className="text-sm font-medium text-slate-900">다음 단계</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/diagnosis"
            className="inline-flex rounded-lg bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-navy/90"
          >
            렌탈료 진단
          </Link>
          <Link
            href="/quote"
            className="inline-flex rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue/90"
          >
            무료 견적 문의
          </Link>
        </div>
        <CtaButtons className="pt-2" dense />
      </div>
    </div>
  );
}
