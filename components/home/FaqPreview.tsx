import Link from "next/link";

const faqs = [
  {
    q: "부천·인천·시흥·안산 외 지역도 가능한가요?",
    a: "핵심 영업권역은 부천·인천·시흥·안산입니다. 인근 지역은 설치 환경에 따라 상담 가능 여부를 안내드립니다.",
  },
  {
    q: "토너도 포함되나요?",
    a: "렌탈 조건에 따라 토너 포함 상품으로 상담 가능합니다.",
  },
  {
    q: "설치비가 있나요?",
    a: "상품·지역·계약 조건에 따라 달라질 수 있어 상담 시 안내드립니다.",
  },
  {
    q: "기존 렌탈 계약이 남아 있어도 상담 가능한가요?",
    a: "가능합니다. 약정·장비·렌탈료를 확인한 뒤 교체 여부를 상담드립니다.",
  },
];

export function FaqPreview() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          자주 묻는 질문
        </h2>
        <dl className="mt-8 space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-slate-100 pb-6">
              <dt className="font-semibold text-slate-900">{f.q}</dt>
              <dd className="mt-2 text-sm text-slate-600">{f.a}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6">
          <Link
            href="/faq"
            className="text-sm font-semibold text-brand-blue hover:underline"
          >
            FAQ 전체 보기 →
          </Link>
        </p>
      </div>
    </section>
  );
}
