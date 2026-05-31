import { site } from "@/lib/site-config";

const items = [
  { label: "핵심 권역", value: "부천·인천·시흥·안산" },
  { label: "상담 기준", value: "월 출력량·컬러 비율·현재 렌탈료" },
  { label: "연락", value: site.mobileDisplay },
  { label: "담당", value: `${site.contactTitle} ${site.contactName}` },
];

export function TrustBar() {
  return (
    <section className="border-y border-[#d9e1d8] bg-brand-paper">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-xs font-bold text-brand-forest/60">{item.label}</p>
            <p className="mt-1 text-sm font-black text-brand-navy">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
