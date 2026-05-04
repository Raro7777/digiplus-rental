"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, site } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link href="/" className="shrink-0 font-semibold text-slate-900">
          <span className="text-brand-navy">{site.name}</span>
          <span className="ml-2 hidden text-sm font-normal text-slate-500 sm:inline">
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.mobileTel}`}
            className="hidden rounded-lg bg-brand-navy px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-brand-navy/90 sm:inline-flex"
          >
            전화
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 md:hidden"
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
        <div className="border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.mobileTel}`}
              className="mt-2 rounded-lg bg-brand-navy py-2.5 text-center text-sm font-medium text-white"
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
