import Link from "next/link";
import { navItems, site } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-semibold text-slate-900">
              {site.companyEn} {site.name}
            </p>
            <p className="mt-1 text-xs text-slate-500">{site.businessLine}</p>
            <p className="mt-2 text-sm text-slate-600">{site.description}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-900">빠른 링크</p>
            <ul className="mt-3 space-y-2 text-sm">
              {navItems.slice(1, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-brand-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-900">연락</p>
            <p className="mt-3 text-sm text-slate-600">
              TEL:{" "}
              <a
                href={`tel:${site.officeTel}`}
                className="font-medium text-brand-blue hover:underline"
              >
                {site.officeTelDisplay}
              </a>
            </p>
            <p className="mt-1 text-sm text-slate-600">
              휴대:{" "}
              <a
                href={`tel:${site.mobileTel}`}
                className="font-medium text-brand-blue hover:underline"
              >
                {site.mobileDisplay}
              </a>
            </p>
            <p className="mt-1 text-sm text-slate-600">FAX: {site.faxDisplay}</p>
            <p className="mt-1 text-sm text-slate-600">
              <a
                href={`mailto:${site.email}`}
                className="text-brand-blue hover:underline"
              >
                {site.email}
              </a>
            </p>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">
              {site.address}
            </p>
          </div>
        </div>
        <p className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
