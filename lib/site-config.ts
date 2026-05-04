/** 공개 연락처·주소. 운영에서는 `.env.local` / Vercel 환경 변수로 덮어쓸 수 있습니다. */

const defaults = {
  companyEn: "DG PLUS",
  businessLine: "사무기기전문 · 판매및임대",
  contactTitle: "팀장",
  contactName: "김한석",
  officeTelDisplay: "032-656-5416",
  officeTel: "0326565416",
  mobileDisplay: "010-9265-8742",
  mobileTel: "01092658742",
  faxDisplay: "032-656-5417",
  email: "new627@naver.com",
  address:
    "경기도 부천시 길주로411번길 20, 춘의디아크원 911호",
} as const;

/** 핵심 영업 권역 (표기용) */
export const coreServiceCities = [
  "부천",
  "인천",
  "시흥",
  "안산",
] as const;

export const site = {
  name: "디지플러스",
  companyEn: process.env.NEXT_PUBLIC_COMPANY_EN ?? defaults.companyEn,
  businessLine: process.env.NEXT_PUBLIC_BUSINESS_LINE ?? defaults.businessLine,
  contactTitle: process.env.NEXT_PUBLIC_CONTACT_TITLE ?? defaults.contactTitle,
  contactName: process.env.NEXT_PUBLIC_CONTACT_NAME ?? defaults.contactName,
  tagline: "부천·인천·시흥·안산 사업장 복합기 렌탈",
  description:
    "부천·인천·시흥·안산 사업장 복합기·복사기 렌탈, 신도리코 D470·태흥아이에스 bizhub 상담, 렌탈료 진단·무료 견적, 토너·AS 상담.",
  positioningLine:
    "출력량 기준으로 맞춰주는 서남권 사업장 복합기 렌탈 전문 업체",
  /** 사무실 대표번호 (표시용) */
  officeTelDisplay:
    process.env.NEXT_PUBLIC_OFFICE_TEL ?? defaults.officeTelDisplay,
  officeTel:
    process.env.NEXT_PUBLIC_OFFICE_TEL_RAW ?? defaults.officeTel,
  /** 휴대폰 — `tel:` 링크는 기본적으로 이 번호로 연결 */
  mobileDisplay: process.env.NEXT_PUBLIC_MOBILE ?? defaults.mobileDisplay,
  mobileTel:
    process.env.NEXT_PUBLIC_MOBILE_TEL ??
    (process.env.NEXT_PUBLIC_MOBILE ?? defaults.mobileDisplay).replace(/\D/g, ""),
  faxDisplay: process.env.NEXT_PUBLIC_FAX ?? defaults.faxDisplay,
  email: process.env.NEXT_PUBLIC_EMAIL ?? defaults.email,
  address: process.env.NEXT_PUBLIC_ADDRESS ?? defaults.address,
  /** 하위 호환·짧은 UI용: 전화 상담 = 휴대폰 연결 */
  phoneDisplay:
    process.env.NEXT_PUBLIC_PHONE ?? process.env.NEXT_PUBLIC_MOBILE ?? defaults.mobileDisplay,
  phoneTel:
    process.env.NEXT_PUBLIC_PHONE_TEL ??
    process.env.NEXT_PUBLIC_MOBILE_TEL ??
    (process.env.NEXT_PUBLIC_MOBILE ?? defaults.mobileDisplay).replace(/\D/g, ""),
  kakaoUrl: process.env.NEXT_PUBLIC_KAKAO_URL ?? "",
  /** 푸터·요약용 권역 문구 */
  regionSummary:
    "부천(상동·중동·송내·역곡), 인천(남동·연수·미추홀·부평·서구), 시흥(정왕·배곧·장현·은행·월곶·시화공단), 안산(단원·상록·반월·스마트허브)",
  /** @deprecated 푸터 등 — `regionSummary` + `coreServiceCities` 사용 */
  regions: [
    "부천",
    "인천",
    "시흥",
    "안산",
    "시화공단",
    "반월공단",
  ],
} as const;

export const navItems = [
  { href: "/", label: "홈" },
  { href: "/rental", label: "복합기 렌탈" },
  { href: "/products", label: "주요 상품" },
  { href: "/regions", label: "지역 안내" },
  { href: "/diagnosis", label: "렌탈료 진단" },
  { href: "/quote", label: "견적 문의" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "회사 소개" },
  { href: "/contact", label: "문의하기" },
] as const;
