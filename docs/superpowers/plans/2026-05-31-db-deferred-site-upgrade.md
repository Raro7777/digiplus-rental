# DB-Deferred Site Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the Digiplus rental site into a credible, conversion-focused business website while deferring the final database decision.

**Architecture:** Keep the current Next.js App Router structure. Improve public pages, SEO, and form UX now, and isolate lead persistence behind a small `lib/leads` boundary so Supabase, Google Sheets, PostgreSQL, or another store can be added later without rewriting forms or server actions.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind CSS 4, TypeScript, Zod, ESLint, Playwright for smoke/e2e checks.

---

## Scope

### Included

- Security patching and dependency audit cleanup where compatible.
- Public-site UX and conversion improvements.
- SEO foundations: sitemap, robots, OpenGraph metadata, LocalBusiness JSON-LD, FAQ JSON-LD, breadcrumbs where useful.
- Quote and diagnosis form UX, validation, spam honeypot, and privacy-safe server action structure.
- Lead persistence interface with a temporary no-database implementation.
- README and operational checklist.
- Basic e2e smoke tests.

### Excluded

- Choosing the production database.
- Writing real leads into a database.
- Admin dashboard for lead management.
- CRM integration.
- Authentication.
- Payment, billing, or contract workflow.

---

## File Structure

### Create

- `lib/leads/types.ts`  
  Shared lead payload types for quote and diagnosis submissions.

- `lib/leads/store.ts`  
  The persistence boundary. For this phase it returns success without storing PII. Later DB work replaces this file or adds an implementation behind the same interface.

- `lib/leads/validation.ts`  
  Zod schemas and parsing helpers currently embedded in `app/actions.ts`.

- `lib/seo/json-ld.ts`  
  Helpers for LocalBusiness, FAQ, and breadcrumb structured data.

- `components/seo/JsonLd.tsx`  
  Small server component for rendering JSON-LD script tags.

- `components/home/TrustBar.tsx`  
  Compact trust facts below the hero.

- `components/home/ConsultationProcess.tsx`  
  Three or four step process section explaining how consultation works.

- `components/home/ServiceProof.tsx`  
  Business credibility section: service area, 담당자, contact channels, AS/toner guidance.

- `tests/e2e/smoke.spec.ts`  
  Playwright smoke tests for core routes and form behavior.

- `playwright.config.ts`  
  Local e2e test config.

- `app/sitemap.ts`  
  Next.js sitemap generation for static and region/product routes.

- `app/robots.ts`  
  Robots configuration with sitemap URL.

### Modify

- `package.json`  
  Patch dependencies and add e2e scripts.

- `package-lock.json`  
  Updated by npm install commands.

- `app/actions.ts`  
  Move validation out, call lead store boundary, remove sensitive logging, add honeypot handling.

- `components/forms/QuoteForm.tsx`  
  Improve inputs, add honeypot, improve date field, add clearer submission copy.

- `components/forms/DiagnosisForm.tsx`  
  Improve inputs, add honeypot, make uncertain values easier to answer.

- `app/layout.tsx`  
  Add richer metadata and site-level JSON-LD.

- `app/page.tsx`  
  Add new trust/process/proof sections.

- `components/home/Hero.tsx`  
  Improve first viewport content and add visual/product signal.

- `components/home/ProductCards.tsx`  
  Add stronger product decision criteria.

- `app/products/page.tsx`  
  Add product comparison context.

- `app/products/ricoh-d470/page.tsx`  
  Add richer product content and JSON-LD.

- `app/products/konica-bizhub/page.tsx`  
  Add richer product content and JSON-LD.

- `app/regions/page.tsx`  
  Fix copy typo and improve index page.

- `app/regions/[slug]/page.tsx`  
  Add breadcrumb JSON-LD and stronger CTA content.

- `lib/regions-seo.ts`  
  Extend region entries with service notes and region-specific FAQ items.

- `app/faq/page.tsx`  
  Add FAQ JSON-LD.

- `app/contact/page.tsx`  
  Make contact channels and business details more explicit.

- `README.md`  
  Replace create-next-app default text with real operating documentation.

---

## Task 1: Dependency And Security Baseline

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

- [ ] **Step 1: Check current branch and dependency state**

Run:

```powershell
git status --short --branch
npm.cmd audit
```

Expected:

- Branch is `main...origin/main`.
- Audit currently reports Next.js-related vulnerabilities.

- [ ] **Step 2: Patch Next.js packages**

Run:

```powershell
npm.cmd install next@latest eslint-config-next@latest
```

Expected:

- `package.json` updates `next` and `eslint-config-next`.
- `package-lock.json` updates.

- [ ] **Step 3: Verify lint and build**

Run:

```powershell
npm.cmd run lint
npm.cmd run build
```

Expected:

- `npm.cmd run lint` exits 0.
- `npm.cmd run build` exits 0 and lists the current App Router routes.

- [ ] **Step 4: Re-run audit**

Run:

```powershell
npm.cmd audit
```

Expected:

- No high severity issue caused by the app runtime remains.
- If only dev-tooling moderate advisories remain and no compatible patch exists, record that in the final implementation note.

- [ ] **Step 5: Commit**

Run:

```powershell
git add package.json package-lock.json
git commit -m "chore: patch framework dependencies"
```

Expected:

- Commit succeeds.

---

## Task 2: Lead Boundary Without Database

**Files:**
- Create: `lib/leads/types.ts`
- Create: `lib/leads/validation.ts`
- Create: `lib/leads/store.ts`
- Modify: `app/actions.ts`
- Modify: `components/forms/QuoteForm.tsx`
- Modify: `components/forms/DiagnosisForm.tsx`

- [ ] **Step 1: Create lead types**

Create `lib/leads/types.ts`:

```ts
export type LeadKind = "quote" | "diagnosis";

export type QuoteLeadInput = {
  kind: "quote";
  companyName: string;
  contactName: string;
  phone: string;
  region: string;
  desiredProduct?: string;
  monthlyVolume?: string;
  colorUse?: string;
  preferredDate?: string;
  message?: string;
};

export type DiagnosisLeadInput = {
  kind: "diagnosis";
  companyName: string;
  contactName: string;
  phone: string;
  region: string;
  currentModel: string;
  interestModel: "신도리코 D470" | "태흥아이에스 bizhub" | "아직 모름";
  currentRent: string;
  monthlyVolume: string;
  industry?: string;
  colorRatio?: string;
  tonerIncluded?: string;
  contractRemaining?: string;
  message?: string;
};

export type LeadInput = QuoteLeadInput | DiagnosisLeadInput;

export type StoreLeadResult = {
  ok: true;
  mode: "deferred";
};
```

- [ ] **Step 2: Move validation into a dedicated module**

Create `lib/leads/validation.ts`:

```ts
import { z } from "zod";
import type { DiagnosisLeadInput, QuoteLeadInput } from "@/lib/leads/types";

const optionalText = z
  .string()
  .trim()
  .optional()
  .transform((value) => (value ? value : undefined));

const phone = z
  .string()
  .trim()
  .min(8, "연락처를 입력해 주세요.")
  .transform((value) => value.replace(/[^\d+]/g, ""));

const honeypot = z
  .string()
  .optional()
  .transform((value) => value?.trim() ?? "");

const privacy = z.literal("on", {
  message: "개인정보 수집에 동의해 주세요.",
});

const interestOptions = [
  "신도리코 D470",
  "태흥아이에스 bizhub",
  "아직 모름",
] as const;

export const diagnosisSchema = z.object({
  companyName: z.string().trim().min(1, "회사명을 입력해 주세요."),
  contactName: z.string().trim().min(1, "담당자명을 입력해 주세요."),
  phone,
  region: z.string().trim().min(1, "설치 지역을 입력해 주세요."),
  currentModel: z.string().trim().min(1, "현재 사용 중인 모델을 입력해 주세요."),
  interestModel: z.enum(interestOptions, {
    message: "관심 모델을 선택해 주세요.",
  }),
  currentRent: z.string().trim().min(1, "현재 월 렌탈료를 입력해 주세요."),
  monthlyVolume: z.string().trim().min(1, "월 출력량을 입력해 주세요."),
  industry: optionalText,
  colorRatio: optionalText,
  tonerIncluded: optionalText,
  contractRemaining: optionalText,
  message: optionalText,
  privacy,
  website: honeypot,
});

export const quoteSchema = z.object({
  companyName: z.string().trim().min(1, "회사명을 입력해 주세요."),
  contactName: z.string().trim().min(1, "담당자명을 입력해 주세요."),
  phone,
  region: z.string().trim().min(1, "설치 지역을 입력해 주세요."),
  desiredProduct: optionalText,
  monthlyVolume: optionalText,
  colorUse: optionalText,
  preferredDate: optionalText,
  message: optionalText,
  privacy,
  website: honeypot,
});

export function toDiagnosisLead(
  data: z.infer<typeof diagnosisSchema>,
): DiagnosisLeadInput {
  return {
    kind: "diagnosis",
    companyName: data.companyName,
    contactName: data.contactName,
    phone: data.phone,
    region: data.region,
    currentModel: data.currentModel,
    interestModel: data.interestModel,
    currentRent: data.currentRent,
    monthlyVolume: data.monthlyVolume,
    industry: data.industry,
    colorRatio: data.colorRatio,
    tonerIncluded: data.tonerIncluded,
    contractRemaining: data.contractRemaining,
    message: data.message,
  };
}

export function toQuoteLead(data: z.infer<typeof quoteSchema>): QuoteLeadInput {
  return {
    kind: "quote",
    companyName: data.companyName,
    contactName: data.contactName,
    phone: data.phone,
    region: data.region,
    desiredProduct: data.desiredProduct,
    monthlyVolume: data.monthlyVolume,
    colorUse: data.colorUse,
    preferredDate: data.preferredDate,
    message: data.message,
  };
}
```

- [ ] **Step 3: Add deferred store implementation**

Create `lib/leads/store.ts`:

```ts
import type { LeadInput, StoreLeadResult } from "@/lib/leads/types";

export async function storeLead(lead: LeadInput): Promise<StoreLeadResult> {
  void lead;

  return {
    ok: true,
    mode: "deferred",
  };
}
```

- [ ] **Step 4: Refactor server actions**

Replace `app/actions.ts` with:

```ts
"use server";

import { storeLead } from "@/lib/leads/store";
import {
  diagnosisSchema,
  quoteSchema,
  toDiagnosisLead,
  toQuoteLead,
} from "@/lib/leads/validation";

export type FormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
};

function parseFormData(formData: FormData) {
  return Object.fromEntries(formData.entries());
}

function fieldErrors(error: { flatten: () => { fieldErrors: unknown } }) {
  return error.flatten().fieldErrors as Record<string, string[]>;
}

export async function submitDiagnosis(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = diagnosisSchema.safeParse(parseFormData(formData));

  if (!parsed.success) {
    return {
      ok: false,
      message: "입력 내용을 확인해 주세요.",
      fieldErrors: fieldErrors(parsed.error),
    };
  }

  if (parsed.data.website) {
    return {
      ok: true,
      message:
        "렌탈료 진단 신청이 완료되었습니다. 디지플러스 담당자가 사용량과 조건을 확인한 뒤 맞춤 견적을 안내드리겠습니다.",
    };
  }

  await storeLead(toDiagnosisLead(parsed.data));

  return {
    ok: true,
    message:
      "렌탈료 진단 신청이 완료되었습니다. 디지플러스 담당자가 사용량과 조건을 확인한 뒤 맞춤 견적을 안내드리겠습니다.",
  };
}

export async function submitQuote(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = quoteSchema.safeParse(parseFormData(formData));

  if (!parsed.success) {
    return {
      ok: false,
      message: "입력 내용을 확인해 주세요.",
      fieldErrors: fieldErrors(parsed.error),
    };
  }

  if (parsed.data.website) {
    return {
      ok: true,
      message: "견적 문의가 접수되었습니다. 담당자가 빠르게 연락드리겠습니다.",
    };
  }

  await storeLead(toQuoteLead(parsed.data));

  return {
    ok: true,
    message: "견적 문의가 접수되었습니다. 담당자가 빠르게 연락드리겠습니다.",
  };
}
```

- [ ] **Step 5: Add honeypot fields to both forms**

In `components/forms/QuoteForm.tsx`, add this field just after the opening `<form>`:

```tsx
      <div className="hidden" aria-hidden="true">
        <label htmlFor="q-website">웹사이트</label>
        <input
          id="q-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
```

In `components/forms/DiagnosisForm.tsx`, add this field just after the opening `<form>`:

```tsx
      <div className="hidden" aria-hidden="true">
        <label htmlFor="d-website">웹사이트</label>
        <input
          id="d-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
```

- [ ] **Step 6: Verify**

Run:

```powershell
npm.cmd run lint
npm.cmd run build
```

Expected:

- Both commands exit 0.
- No customer data is logged in `app/actions.ts`.

- [ ] **Step 7: Commit**

Run:

```powershell
git add app/actions.ts lib/leads components/forms/QuoteForm.tsx components/forms/DiagnosisForm.tsx
git commit -m "refactor: isolate deferred lead handling"
```

Expected:

- Commit succeeds.

---

## Task 3: Form UX Improvements

**Files:**
- Modify: `components/forms/QuoteForm.tsx`
- Modify: `components/forms/DiagnosisForm.tsx`
- Modify: `components/forms/FieldError.tsx`

- [ ] **Step 1: Improve quote form date input**

In `components/forms/QuoteForm.tsx`, replace the preferred date input:

```tsx
          <input id="q-preferredDate" name="preferredDate" className={inputClass} />
```

with:

```tsx
          <input
            id="q-preferredDate"
            name="preferredDate"
            type="date"
            className={inputClass}
          />
```

- [ ] **Step 2: Add placeholders for quote fields**

Update these inputs in `components/forms/QuoteForm.tsx`:

```tsx
          <input
            id="q-phone"
            name="phone"
            required
            className={inputClass}
            inputMode="tel"
            autoComplete="tel"
            placeholder="010-0000-0000"
          />
```

```tsx
          <input
            id="q-region"
            name="region"
            required
            className={inputClass}
            placeholder="예: 부천 상동, 인천 연수구"
          />
```

```tsx
          <input
            id="q-monthlyVolume"
            name="monthlyVolume"
            className={inputClass}
            placeholder="예: 월 2,000매, 잘 모름"
          />
```

- [ ] **Step 3: Improve diagnosis uncertain inputs**

Update these placeholders in `components/forms/DiagnosisForm.tsx`:

```tsx
            placeholder="모델명 또는 잘 모름"
```

```tsx
            placeholder="예: 8만원, 12만원, 없음, 잘 모름"
```

```tsx
            placeholder="예: 월 2,000매, 박스 1개, 잘 모름"
```

- [ ] **Step 4: Improve success copy**

In `components/forms/QuoteForm.tsx`, replace:

```tsx
        <p className="font-semibold">접수되었습니다.</p>
```

with:

```tsx
        <p className="font-semibold">견적 문의가 접수되었습니다.</p>
```

In `components/forms/DiagnosisForm.tsx`, replace:

```tsx
        <p className="font-semibold">신청이 완료되었습니다.</p>
```

with:

```tsx
        <p className="font-semibold">렌탈료 진단 신청이 접수되었습니다.</p>
```

- [ ] **Step 5: Verify**

Run:

```powershell
npm.cmd run lint
npm.cmd run build
```

Expected:

- Both commands exit 0.

- [ ] **Step 6: Commit**

Run:

```powershell
git add components/forms/QuoteForm.tsx components/forms/DiagnosisForm.tsx components/forms/FieldError.tsx
git commit -m "feat: improve lead form usability"
```

Expected:

- Commit succeeds.

---

## Task 4: Home Page Conversion Upgrade

**Files:**
- Create: `components/home/TrustBar.tsx`
- Create: `components/home/ConsultationProcess.tsx`
- Create: `components/home/ServiceProof.tsx`
- Modify: `components/home/Hero.tsx`
- Modify: `components/home/ProductCards.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Add trust bar**

Create `components/home/TrustBar.tsx`:

```tsx
import { site } from "@/lib/site-config";

const items = [
  { label: "핵심 권역", value: "부천·인천·시흥·안산" },
  { label: "상담 기준", value: "월 출력량·컬러 비율·현재 렌탈료" },
  { label: "연락", value: site.mobileDisplay },
  { label: "담당", value: `${site.contactTitle} ${site.contactName}` },
];

export function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-xs font-medium text-slate-500">{item.label}</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add consultation process**

Create `components/home/ConsultationProcess.tsx`:

```tsx
const steps = [
  {
    title: "사용 환경 확인",
    body: "설치 지역, 업종, 월 출력량, 컬러 출력 비율을 먼저 확인합니다.",
  },
  {
    title: "현재 조건 비교",
    body: "기존 렌탈료, 약정 잔여기간, 토너 포함 여부를 함께 비교합니다.",
  },
  {
    title: "적정 장비 안내",
    body: "D470·bizhub 등 주력 라인 중 과하지 않은 조건을 안내합니다.",
  },
  {
    title: "설치·관리 상담",
    body: "설치 일정, 토너, AS 접수 방식까지 상담 단계에서 정리합니다.",
  },
];

export function ConsultationProcess() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          상담은 장비명보다 사용 환경부터 확인합니다.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold text-brand-blue">STEP {index + 1}</p>
              <h3 className="mt-2 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add service proof section**

Create `components/home/ServiceProof.tsx`:

```tsx
import { CtaButtons } from "@/components/home/CtaButtons";
import { site } from "@/lib/site-config";

export function ServiceProof() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            지역 사업장 상담에 맞춘 복합기 렌탈 안내
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {site.regionSummary} 권역의 사무실, 학원, 병원, 제조업체를 중심으로
            렌탈료 진단과 무료 견적을 안내합니다.
          </p>
          <CtaButtons className="mt-6" dense />
        </div>
        <dl className="grid gap-3 text-sm">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <dt className="font-semibold text-slate-900">상담 담당</dt>
            <dd className="mt-1 text-slate-600">{site.contactTitle} {site.contactName}</dd>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <dt className="font-semibold text-slate-900">전화 상담</dt>
            <dd className="mt-1 text-slate-600">{site.mobileDisplay}</dd>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <dt className="font-semibold text-slate-900">사무실</dt>
            <dd className="mt-1 text-slate-600">{site.address}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Update hero layout**

Modify `components/home/Hero.tsx` so the inner layout becomes two columns on desktop. Replace:

```tsx
        <div className="max-w-3xl">
```

with:

```tsx
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
```

Then before the closing `</div>` for the `mx-auto` container, add the visual panel:

```tsx
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="aspect-[4/3] rounded-md bg-slate-100 p-5">
              <div className="flex h-full flex-col justify-between rounded-md border border-slate-200 bg-white p-5">
                <div>
                  <p className="text-xs font-semibold text-brand-blue">DG PLUS</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">복합기 렌탈 상담</p>
                  <p className="mt-2 text-sm text-slate-600">
                    D470 · bizhub · 토너 · AS · 기존 렌탈료 비교
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 rounded bg-brand-navy/10" />
                  <div className="h-16 rounded bg-brand-blue/10" />
                  <div className="h-16 rounded bg-slate-200" />
                </div>
              </div>
            </div>
          </div>
```

Expected:

- The hero has text and a visible business/product signal in the first viewport.
- The design remains static and does not require external image licensing.

- [ ] **Step 5: Add sections to home page**

Modify `app/page.tsx` imports:

```tsx
import { ConsultationProcess } from "@/components/home/ConsultationProcess";
import { ServiceProof } from "@/components/home/ServiceProof";
import { TrustBar } from "@/components/home/TrustBar";
```

Update render order:

```tsx
      <Hero />
      <TrustBar />
      <PainPoints />
      <Solution />
      <ConsultationProcess />
      <ProductCards />
      <DiagnosisCta />
      <Regions />
      <Industries />
      <ServiceProof />
      <FaqPreview />
      <FinalCta />
```

- [ ] **Step 6: Verify**

Run:

```powershell
npm.cmd run lint
npm.cmd run build
```

Expected:

- Both commands exit 0.

- [ ] **Step 7: Commit**

Run:

```powershell
git add app/page.tsx components/home
git commit -m "feat: strengthen homepage conversion flow"
```

Expected:

- Commit succeeds.

---

## Task 5: Region And Product Content Upgrade

**Files:**
- Modify: `lib/regions-seo.ts`
- Modify: `app/regions/page.tsx`
- Modify: `app/regions/[slug]/page.tsx`
- Modify: `app/products/page.tsx`
- Modify: `app/products/ricoh-d470/page.tsx`
- Modify: `app/products/konica-bizhub/page.tsx`

- [ ] **Step 1: Extend region type**

In `lib/regions-seo.ts`, update `RegionSeoEntry`:

```ts
export type RegionSeoEntry = {
  slug: RegionSlug;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  worryIntro: string;
  worryBullets: string[];
  body: string;
  serviceNotes: string[];
  faqs: { q: string; a: string }[];
};
```

- [ ] **Step 2: Add data to every region entry**

For each entry in `entries`, add `serviceNotes` and `faqs`. Use this structure for `bucheon`:

```ts
    serviceNotes: [
      "상동·중동·송내·역곡 등 사무실과 학원 상담에 맞춰 출력량을 먼저 확인합니다.",
      "기존 렌탈료와 토너 포함 조건을 비교해 교체 상담을 진행합니다.",
      "부천 인근 사업장은 설치 일정과 AS 접수 방식을 상담 단계에서 함께 안내합니다.",
    ],
    faqs: [
      {
        q: "부천 학원에서도 컬러 복합기 렌탈 상담이 가능한가요?",
        a: "가능합니다. 컬러 출력 비율, 월 출력량, A3 필요 여부를 확인한 뒤 D470 또는 bizhub 라인 중 적정 조건을 안내드립니다.",
      },
      {
        q: "기존 렌탈 계약이 남아 있어도 비교 가능한가요?",
        a: "가능합니다. 현재 렌탈료, 약정 잔여기간, 토너 포함 여부를 확인해 교체 가능성을 함께 검토합니다.",
      },
    ],
```

For the other entries, use region-specific names already present in `metaTitle` and `metaDescription`. Each region must have exactly 3 `serviceNotes` and 2 `faqs`.

- [ ] **Step 3: Fix region index typo**

In `app/regions/page.tsx`, replace:

```tsx
        bizhub) 안내를 확인한 뒤, 렌탈료 진단 또는 무료 견적로 이어지실 수
```

with:

```tsx
        bizhub) 안내를 확인한 뒤, 렌탈료 진단 또는 무료 견적으로 이어지실 수
```

- [ ] **Step 4: Render service notes and FAQs on region detail pages**

In `app/regions/[slug]/page.tsx`, after the existing "추천 모델" section, add:

```tsx
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">지역 상담 포인트</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-700">
          {r.serviceNotes.map((note) => (
            <li key={note} className="rounded-lg border border-slate-200 bg-white p-4">
              {note}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">지역별 자주 묻는 질문</h2>
        <dl className="mt-4 space-y-4">
          {r.faqs.map((faq) => (
            <div key={faq.q}>
              <dt className="text-sm font-semibold text-slate-900">{faq.q}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-slate-600">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>
```

- [ ] **Step 5: Add product comparison table**

In `app/products/page.tsx`, add this section before the final CTA:

```tsx
      <section className="mt-14">
        <h2 className="text-xl font-semibold text-slate-900">상담 시 비교하는 기준</h2>
        <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-900">
              <tr>
                <th className="px-4 py-3 font-semibold">기준</th>
                <th className="px-4 py-3 font-semibold">확인 내용</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600">
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">월 출력량</td>
                <td className="px-4 py-3">기본 매수와 초과 비용에 직접 영향을 줍니다.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">컬러 비율</td>
                <td className="px-4 py-3">컬러 출력이 많은지, 흑백 중심인지에 따라 조건이 달라집니다.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">토너 포함</td>
                <td className="px-4 py-3">월 고정비와 관리 편의성을 함께 비교합니다.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">기존 약정</td>
                <td className="px-4 py-3">잔여기간과 현재 렌탈료를 기준으로 교체 여부를 검토합니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
```

- [ ] **Step 6: Verify**

Run:

```powershell
npm.cmd run lint
npm.cmd run build
```

Expected:

- Both commands exit 0.
- All region routes still prerender.

- [ ] **Step 7: Commit**

Run:

```powershell
git add lib/regions-seo.ts app/regions app/products
git commit -m "feat: expand regional and product content"
```

Expected:

- Commit succeeds.

---

## Task 6: SEO Foundations

**Files:**
- Create: `lib/seo/json-ld.ts`
- Create: `components/seo/JsonLd.tsx`
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Modify: `app/layout.tsx`
- Modify: `app/faq/page.tsx`
- Modify: `app/regions/[slug]/page.tsx`

- [ ] **Step 1: Add JSON-LD helpers**

Create `lib/seo/json-ld.ts`:

```ts
import { site } from "@/lib/site-config";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    alternateName: site.companyEn,
    description: site.description,
    telephone: site.mobileDisplay,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressCountry: "KR",
    },
    areaServed: ["부천", "인천", "시흥", "안산"],
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
```

- [ ] **Step 2: Add JSON-LD component**

Create `components/seo/JsonLd.tsx`:

```tsx
type Props = {
  data: unknown;
};

export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

- [ ] **Step 3: Add site metadata and LocalBusiness**

In `app/layout.tsx`, add imports:

```tsx
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessJsonLd } from "@/lib/seo/json-ld";
```

Extend `metadata`:

```ts
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "ko_KR",
  },
```

Render JSON-LD at the top of `<body>`:

```tsx
        <JsonLd data={localBusinessJsonLd()} />
```

- [ ] **Step 4: Add sitemap**

Create `app/sitemap.ts`:

```ts
import type { MetadataRoute } from "next";
import { REGION_SLUGS } from "@/lib/regions-seo";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/diagnosis",
  "/faq",
  "/products",
  "/products/ricoh-d470",
  "/products/konica-bizhub",
  "/quote",
  "/regions",
  "/rental",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...REGION_SLUGS.map((slug) => ({
      url: `${baseUrl}/regions/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
```

- [ ] **Step 5: Add robots**

Create `app/robots.ts`:

```ts
import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

- [ ] **Step 6: Add FAQ JSON-LD to FAQ page**

Keep the existing `faqs` array module-local. Add imports to `app/faq/page.tsx`:

```tsx
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/seo/json-ld";
```

Render inside the page root before `<h1>`:

```tsx
      <JsonLd data={faqJsonLd(faqs)} />
```

- [ ] **Step 7: Verify**

Run:

```powershell
npm.cmd run lint
npm.cmd run build
```

Expected:

- Both commands exit 0.
- `/sitemap.xml` and `/robots.txt` are listed by Next metadata routes during runtime.

- [ ] **Step 8: Commit**

Run:

```powershell
git add app/layout.tsx app/sitemap.ts app/robots.ts app/faq/page.tsx components/seo lib/seo
git commit -m "feat: add seo foundations"
```

Expected:

- Commit succeeds.

---

## Task 7: Documentation And Operational Checklist

**Files:**
- Modify: `README.md`
- Modify: `.env.example`

- [ ] **Step 1: Replace README**

Replace `README.md` with:

````md
# Digiplus Rental

디지플러스 복합기 렌탈 홈페이지입니다. 부천·인천·시흥·안산 사업장을 대상으로 복합기 렌탈, 렌탈료 진단, 무료 견적 문의를 안내합니다.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Zod

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Required Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_COMPANY_EN=DG PLUS
NEXT_PUBLIC_BUSINESS_LINE=사무기기전문 · 판매및임대
NEXT_PUBLIC_CONTACT_TITLE=팀장
NEXT_PUBLIC_CONTACT_NAME=김한석
NEXT_PUBLIC_OFFICE_TEL=032-656-5416
NEXT_PUBLIC_OFFICE_TEL_RAW=0326565416
NEXT_PUBLIC_MOBILE=010-9265-8742
NEXT_PUBLIC_MOBILE_TEL=01092658742
NEXT_PUBLIC_FAX=032-656-5417
NEXT_PUBLIC_EMAIL=new627@naver.com
NEXT_PUBLIC_ADDRESS=경기도 부천시 길주로411번길 20, 춘의디아크원 911호
NEXT_PUBLIC_KAKAO_URL=
```

## Lead Handling Status

The production database has not been selected yet.

Current behavior:

- Quote and diagnosis forms validate input.
- Spam honeypot submissions return a generic success response.
- Lead persistence is isolated in `lib/leads/store.ts`.
- `storeLead()` currently uses deferred no-database behavior.

When a database is selected, replace or extend `lib/leads/store.ts` without rewriting form components.

## Verification

```bash
npm run lint
npm run build
```

If e2e tests are installed:

```bash
npm run test:e2e
```

## Deployment Checklist

- Set `NEXT_PUBLIC_SITE_URL` to the production domain.
- Confirm all phone, email, address, and Kakao channel values.
- Run lint and build.
- Submit one quote form and one diagnosis form in production.
- Confirm how leads are handled before spending on ads.
- Submit sitemap to Search Console after deployment.
````

- [ ] **Step 2: Add DB-deferred note to `.env.example`**

Append this to `.env.example`:

```env
# Lead DB is intentionally not configured in this phase.
# Future DB variables should be added when the database is selected.
```

- [ ] **Step 3: Verify**

Run:

```powershell
npm.cmd run lint
npm.cmd run build
```

Expected:

- Both commands exit 0.

- [ ] **Step 4: Commit**

Run:

```powershell
git add README.md .env.example
git commit -m "docs: document db-deferred operation"
```

Expected:

- Commit succeeds.

---

## Task 8: E2E Smoke Tests

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `playwright.config.ts`
- Create: `tests/e2e/smoke.spec.ts`

- [ ] **Step 1: Install Playwright**

Run:

```powershell
npm.cmd install -D @playwright/test
npx.cmd playwright install chromium
```

Expected:

- `package.json` includes `@playwright/test`.
- Browser binary is installed.

- [ ] **Step 2: Add scripts**

In `package.json`, update `scripts`:

```json
{
  "dev": "next dev --turbopack --hostname 0.0.0.0 --port 3000",
  "build": "next build",
  "start": "next start",
  "lint": "eslint",
  "test:e2e": "playwright test"
}
```

- [ ] **Step 3: Add Playwright config**

Create `playwright.config.ts`:

```ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 5"] },
    },
  ],
  webServer: {
    command: "npm.cmd run dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
```

- [ ] **Step 4: Add smoke tests**

Create `tests/e2e/smoke.spec.ts`:

```ts
import { expect, test } from "@playwright/test";

test("home page exposes main conversion actions", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /복합기 렌탈/ }).first(),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /무료 견적/ }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /전화/ }).first()).toBeVisible();
});

test("quote form validates required fields", async ({ page }) => {
  await page.goto("/quote");

  await page.getByRole("button", { name: /견적 문의 보내기/ }).click();
  await expect(page.getByText("회사명을 입력해 주세요.")).toBeVisible();
});

test("diagnosis form validates required fields", async ({ page }) => {
  await page.goto("/diagnosis");

  await page.getByRole("button", { name: /렌탈료 진단 신청/ }).click();
  await expect(page.getByText("회사명을 입력해 주세요.")).toBeVisible();
});

test("region pages render generated content", async ({ page }) => {
  await page.goto("/regions/bucheon");

  await expect(page.getByRole("heading", { name: "부천 복합기 렌탈" })).toBeVisible();
  await expect(page.getByText(/지역 상담 포인트/)).toBeVisible();
});
```

- [ ] **Step 5: Verify**

Run:

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd run test:e2e
```

Expected:

- Lint exits 0.
- Build exits 0.
- E2E tests pass in desktop and mobile projects.

- [ ] **Step 6: Commit**

Run:

```powershell
git add package.json package-lock.json playwright.config.ts tests/e2e
git commit -m "test: add public site smoke coverage"
```

Expected:

- Commit succeeds.

---

## Final Verification

Run:

```powershell
git status --short
npm.cmd audit
npm.cmd run lint
npm.cmd run build
npm.cmd run test:e2e
```

Expected:

- Working tree is clean after commits.
- No unresolved high severity runtime vulnerability remains.
- Lint passes.
- Build passes.
- E2E tests pass.

---

## Completion Criteria

- DB choice remains explicitly deferred.
- Forms no longer log sensitive lead details.
- Lead handling has a clear future database integration point.
- Public pages communicate trust, service scope, contact methods, and consultation process.
- Region and product pages have deeper content than keyword-only pages.
- SEO foundations are present.
- README documents current operational limits.
- Smoke tests cover the core public experience.
