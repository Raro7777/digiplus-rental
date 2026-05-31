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
