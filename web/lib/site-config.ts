/** 공개 연락처는 배포 전 `.env.local`에 설정하세요. */
export const site = {
  name: "디지플러스",
  tagline: "시흥·안산 사업장 복합기 렌탈",
  description:
    "시흥·정왕·배곧·시화공단 사업장 복합기 렌탈, 렌탈료 진단·무료 견적, 토너·AS 상담.",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE ?? "031-000-0000",
  phoneTel:
    process.env.NEXT_PUBLIC_PHONE_TEL ??
    (process.env.NEXT_PUBLIC_PHONE ?? "031-000-0000").replace(/\D/g, ""),
  kakaoUrl: process.env.NEXT_PUBLIC_KAKAO_URL ?? "",
  address: process.env.NEXT_PUBLIC_ADDRESS ?? "경기 시흥시 (상세 주소는 상담 시 안내)",
  regions: [
    "시흥",
    "정왕동",
    "배곧",
    "장현동",
    "은행동",
    "월곶동",
    "시화공단",
    "안산",
  ],
} as const;

export const navItems = [
  { href: "/", label: "홈" },
  { href: "/rental", label: "복합기 렌탈" },
  { href: "/products", label: "주요 상품" },
  { href: "/diagnosis", label: "렌탈료 진단" },
  { href: "/quote", label: "견적 문의" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "회사 소개" },
  { href: "/contact", label: "문의하기" },
] as const;
