import Link from "next/link";
import { site } from "@/lib/site-config";

function kakaoHref() {
  if (site.kakaoUrl) return site.kakaoUrl;
  return "/contact";
}

type Props = { className?: string; dense?: boolean };

export function CtaButtons({ className = "", dense }: Props) {
  const btn =
    "inline-flex items-center justify-center rounded-lg font-semibold transition shadow-sm";
  const pad = dense ? "px-4 py-2.5 text-sm" : "px-5 py-3 text-sm sm:text-base";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link
        href="/quote"
        className={`${btn} ${pad} bg-brand-blue text-white hover:bg-brand-blue/90`}
      >
        무료 견적 받기
      </Link>
      <Link
        href="/diagnosis"
        className={`${btn} ${pad} border border-slate-300 bg-white text-slate-900 hover:bg-slate-50`}
      >
        렌탈료 진단하기
      </Link>
      <a
        href={kakaoHref()}
        className={`${btn} ${pad} bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FADA0A]`}
        {...(site.kakaoUrl
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        카톡 상담하기
      </a>
      <a
        href={`tel:${site.mobileTel}`}
        className={`${btn} ${pad} bg-brand-navy text-white hover:bg-brand-navy/90`}
      >
        전화 상담하기
      </a>
    </div>
  );
}
