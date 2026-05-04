import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "부천·인천·시흥·안산 복합기 렌탈 FAQ — 토너, 설치비, 약정, AS, 지역 상담 등.",
};

const faqs: { q: string; a: string }[] = [
  {
    q: "부천·인천·시흥·안산 외 지역도 가능한가요?",
    a: "핵심 영업권역은 부천·인천·시흥·안산입니다. 인근 지역은 설치 환경에 따라 상담 가능 여부를 안내드립니다.",
  },
  {
    q: "토너도 포함되나요?",
    a: "렌탈 조건에 따라 토너 포함 상품으로 상담 가능합니다. 월 출력량과 사용 환경에 따라 적합한 조건을 안내드립니다.",
  },
  {
    q: "설치비가 있나요?",
    a: "설치비는 상품과 설치 지역, 계약 조건에 따라 달라질 수 있습니다. 상담 시 정확히 안내드립니다.",
  },
  {
    q: "약정기간은 어떻게 되나요?",
    a: "일반적으로 렌탈 상품은 약정기간이 있으며, 상품과 조건에 따라 달라질 수 있습니다.",
  },
  {
    q: "기존 렌탈 계약이 남아 있어도 상담 가능한가요?",
    a: "가능합니다. 현재 렌탈료, 약정 잔여기간, 사용 중인 장비를 확인한 뒤 교체 가능 여부를 상담드립니다.",
  },
  {
    q: "신도리코 D470과 bizhub 중 어떤 모델이 맞나요?",
    a: "월 출력량·컬러 비율·A3 필요 여부·예산감을 확인한 뒤 D470 또는 bizhub 라인 중 적합한 안내를 드립니다. 렌탈료 진단으로 비교해 보실 수 있습니다.",
  },
  {
    q: "고장 시 AS는 어떻게 접수하나요?",
    a: "전화 또는 카카오톡 상담을 통해 AS 접수가 가능합니다. 정확한 대응 방식은 계약 조건에 따라 안내드립니다.",
  },
  {
    q: "월 출력량을 잘 모르는데 상담 가능한가요?",
    a: "가능합니다. 현재 사용 패턴이나 사무실 규모를 기준으로 적정 출력량을 함께 추정해드립니다.",
  },
  {
    q: "복합기 모델을 몰라도 문의할 수 있나요?",
    a: "가능합니다. 고객의 사용 환경을 먼저 확인한 뒤 적합한 장비를 추천드립니다.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold text-slate-900">자주 묻는 질문</h1>
      <dl className="mt-10 space-y-8">
        {faqs.map((f) => (
          <div key={f.q}>
            <dt className="text-lg font-semibold text-slate-900">{f.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-12 text-center">
        <Link
          href="/quote"
          className="inline-flex rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue/90"
        >
          무료 견적 문의
        </Link>
      </p>
    </div>
  );
}
