"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, site } from "@/lib/site-config";

const desktopNav = navItems.filter((item) =>
  ["/rental", "/products", "/regions", "/diagnosis", "/quote", "/contact"].includes(
    item.href,
  ),
);

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8e1da] bg-brand-paper/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link href="/" className="shrink-0 font-semibold text-brand-navy">
          <span className="text-base font-black tracking-tight">{site.name}</span>
          <span className="ml-2 hidden text-xs font-medium text-brand-forest/70 lg:inline">
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {desktopNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-sm font-semibold text-brand-forest/75 transition hover:bg-white hover:text-brand-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.mobileTel}`}
            className="hidden rounded-lg bg-brand-navy px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-brand-forest sm:inline-flex"
          >
            전화
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#cdd8d0] bg-white text-brand-navy md:hidden"
            aria-expanded={open}
            aria-label="메뉴"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">메뉴 열기</span>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[#d8e1da] bg-brand-paper px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2.5 text-sm font-semibold text-brand-navy hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.mobileTel}`}
              className="mt-2 rounded-lg bg-brand-navy py-2.5 text-center text-sm font-bold text-white"
              onClick={() => setOpen(false)}
            >
              전화 상담 ({site.mobileDisplay})
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
