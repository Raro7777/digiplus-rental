import Link from "next/link";
import { site } from "@/lib/site-config";

function kakaoHref() {
  if (site.kakaoUrl) return site.kakaoUrl;
  return "/contact";
}

export function MobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-2 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] backdrop-blur sm:hidden">
      <a
        href={`tel:${site.phoneTel}`}
        className="flex flex-1 items-center justify-center rounded-lg bg-brand-navy py-3 text-sm font-semibold text-white"
      >
        전화
      </a>
      <a
        href={kakaoHref()}
        className="flex flex-1 items-center justify-center rounded-lg bg-[#FEE500] py-3 text-sm font-semibold text-[#3C1E1E]"
        {...(site.kakaoUrl
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        카톡
      </a>
      <Link
        href="/quote"
        className="flex flex-1 items-center justify-center rounded-lg bg-brand-blue py-3 text-sm font-semibold text-white"
      >
        견적
      </Link>
    </div>
  );
}
