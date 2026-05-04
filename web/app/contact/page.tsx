import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "문의하기",
  description: `${site.name} 전화·카카오톡·견적 문의 안내입니다.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold text-slate-900">문의하기</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        복합기 렌탈이 필요하시다면 디지플러스에 먼저 문의해보세요. 사용량과 조건에
        맞춰 적정 장비와 렌탈 조건을 안내드립니다.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-semibold text-slate-900">대표 전화</h2>
          <a
            href={`tel:${site.phoneTel}`}
            className="mt-3 block text-2xl font-bold text-brand-blue hover:underline"
          >
            {site.phoneDisplay}
          </a>
          <p className="mt-2 text-sm text-slate-600">
            운영시간은 상담 시 안내드립니다.
          </p>
        </section>

        <section
          id="kakao"
          className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
        >
          <h2 className="text-lg font-semibold text-slate-900">카카오톡 상담</h2>
          {site.kakaoUrl ? (
            <a
              href={site.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-lg bg-[#FEE500] px-5 py-3 text-sm font-semibold text-[#3C1E1E] hover:bg-[#FADA0A]"
            >
              카카오톡 채널 열기
            </a>
          ) : (
            <p className="mt-3 text-sm text-slate-600">
              카카오톡 채널 URL을 연결하려면 프로젝트 루트에{" "}
              <code className="rounded bg-white px-1 py-0.5 text-xs">
                .env.local
              </code>{" "}
              파일을 만들고{" "}
              <code className="rounded bg-white px-1 py-0.5 text-xs">
                NEXT_PUBLIC_KAKAO_URL
              </code>
              를 설정해 주세요.
            </p>
          )}
        </section>
      </div>

      <section className="mt-10 rounded-2xl border border-slate-200 p-6">
        <h2 className="text-lg font-semibold text-slate-900">오시는 길</h2>
        <p className="mt-2 text-sm text-slate-600">{site.address}</p>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/quote"
          className="inline-flex rounded-lg bg-brand-blue px-5 py-3 text-sm font-semibold text-white hover:bg-brand-blue/90"
        >
          견적 문의 폼
        </Link>
        <Link
          href="/diagnosis"
          className="inline-flex rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          렌탈료 진단
        </Link>
      </div>
    </div>
  );
}
