import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "견적 문의",
  description:
    "디지플러스 복합기 렌탈 무료 견적 문의 — 부천·인천·시흥·안산 사업장, 설치 지역과 사용 환경을 남겨주세요.",
};

const PRODUCT_QUERY: Record<string, string> = {
  d470: "신도리코 D470 컬러 복합기 렌탈",
  bizhub: "태흥아이에스 bizhub 복합기 렌탈",
};

type Props = {
  searchParams: Promise<{ product?: string }>;
};

export default async function QuotePage({ searchParams }: Props) {
  const { product } = await searchParams;
  const key = product?.toLowerCase() ?? "";
  const defaultDesired =
    key && PRODUCT_QUERY[key] ? PRODUCT_QUERY[key] : "";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold text-slate-900">
        디지플러스 복합기 렌탈 무료 견적 문의
      </h1>
      <p className="mt-4 text-slate-600">
        설치 지역과 사용 환경을 남겨주시면 담당자가 확인 후 빠르게 연락드립니다.
      </p>
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <QuoteForm defaultDesiredProduct={defaultDesired} />
      </div>
    </div>
  );
}
