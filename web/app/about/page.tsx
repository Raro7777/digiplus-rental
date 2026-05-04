import type { Metadata } from "next";
import { CtaButtons } from "@/components/home/CtaButtons";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "회사 소개",
  description: `${site.name}는 시흥·인근 사업장 대상 복합기 렌탈·토너·AS를 제공합니다.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold text-slate-900">회사 소개</h1>
      <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600">
        <p>
          디지플러스는 시흥·정왕·배곧·시화공단 사업장을 대상으로 복합기 렌탈,
          프린터 임대, 토너 관리, AS 상담을 제공하는 사무기기 렌탈 전문 업체입니다.
        </p>
        <p className="mt-4">
          고객의 월 출력량과 사용 환경을 기준으로 과한 장비가 아닌 적정 장비와
          렌탈 조건을 안내드립니다. 기존 복합기 렌탈료 비교 상담도 가능합니다.
        </p>
      </div>

      <h2 className="mt-10 text-xl font-semibold text-slate-900">서비스 지역</h2>
      <p className="mt-2 text-sm text-slate-600">
        {site.regions.join(", ")} 등 시흥 및 인근.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">주요 서비스</h2>
      <ul className="mt-2 list-inside list-disc text-sm text-slate-600">
        <li>복합기·프린터 렌탈 상담 및 설치</li>
        <li>렌탈료 진단, 무료 견적</li>
        <li>토너·소모품, AS 연계 상담</li>
      </ul>

      <div className="mt-12">
        <CtaButtons />
      </div>
    </div>
  );
}
