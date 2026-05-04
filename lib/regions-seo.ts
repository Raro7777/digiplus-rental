import type { Metadata } from "next";

export type RegionSlug =
  | "bucheon"
  | "incheon"
  | "siheung"
  | "ansan"
  | "bucheon-copier"
  | "incheon-copier"
  | "siheung-copier"
  | "ansan-copier"
  | "sihwa"
  | "banwol";

export type RegionSeoEntry = {
  slug: RegionSlug;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  worryIntro: string;
  worryBullets: string[];
  body: string;
};

export const REGION_SLUGS: RegionSlug[] = [
  "bucheon",
  "incheon",
  "siheung",
  "ansan",
  "bucheon-copier",
  "incheon-copier",
  "siheung-copier",
  "ansan-copier",
  "sihwa",
  "banwol",
];

const entries: RegionSeoEntry[] = [
  {
    slug: "bucheon",
    h1: "부천 복합기 렌탈",
    metaTitle: "부천 복합기 렌탈 | 상동·중동·송내·역곡 사업장",
    metaDescription:
      "부천 상동·중동·송내·역곡 등 사업장 복합기 렌탈. 신도리코 D470·태흥아이에스 bizhub 상담, 렌탈료 진단·무료 견적.",
    worryIntro: "부천 사업장에서 흔히 겪는 고민입니다.",
    worryBullets: [
      "복합기 렌탈료가 적정한지 비교가 어렵다",
      "학원·병원·사무실에 맞는 컬러 출력 조건을 모르겠다",
      "설치·토너·AS까지 한 번에 관리받고 싶다",
    ],
    body: "디지플러스는 부천 지역 사업장의 월 출력량·컬러 사용 비율·현재 렌탈료를 확인한 뒤, 신도리코 D470 또는 태흥아이에스 bizhub 등 적정 장비와 렌탈 조건을 안내드립니다.",
  },
  {
    slug: "incheon",
    h1: "인천 복합기 렌탈",
    metaTitle: "인천 복합기 렌탈 | 남동·연수·미추홀·부평·서구",
    metaDescription:
      "인천 남동구·연수구·미추홀구·부평구·서구 사업장 복합기 렌탈. 출력량 기준 맞춤 견적, D470·bizhub 상담.",
    worryIntro: "인천 사업장 복합기 렌탈을 검토할 때 자주 나오는 질문입니다.",
    worryBullets: [
      "지역별 설치·AS 대응이 걱정된다",
      "사무실·공장 사무실 출력량에 맞는 장비를 고르기 어렵다",
      "기존 렌탈료와 비교해 절감 여지가 있는지 알고 싶다",
    ],
    body: "인천 전역 사업장을 대상으로 복합기 렌탈 상담과 설치 관리를 제공합니다. D470·bizhub 라인업 중 사용 환경에 맞는 모델을 추천드리고, 렌탈료 진단으로 현재 조건을 점검해 드립니다.",
  },
  {
    slug: "siheung",
    h1: "시흥 복합기 렌탈",
    metaTitle: "시흥 복합기 렌탈 | 정왕·배곧·시화공단",
    metaDescription:
      "시흥 정왕동·배곧·장현·은행·월곶·시화공단 사업장 복합기 렌탈. 맞춤 견적·렌탈료 진단.",
    worryIntro: "시흥·시화권 사업장에서 많이 문의 주시는 내용입니다.",
    worryBullets: [
      "대량 출력·컬러 출력 비중이 높다",
      "공장 사무실과 일반 사무실 조건이 다르다",
      "토너 포함·초과 매수 조건을 명확히 알고 싶다",
    ],
    body: "시흥 및 인근 산업단지 사업장에 특화해 상담합니다. 출력량과 업종에 따라 D470 또는 bizhub 중 적합한 라인을 안내드립니다.",
  },
  {
    slug: "ansan",
    h1: "안산 복합기 렌탈",
    metaTitle: "안산 복합기 렌탈 | 단원·상록·반월공단·스마트허브",
    metaDescription:
      "안산 단원구·상록구·반월공단·안산스마트허브 사업장 복합기 렌탈. D470·bizhub, 렌탈료 비교 상담.",
    worryIntro: "안산 사업장에서 복합기 렌탈을 결정하기 전에 확인할 포인트입니다.",
    worryBullets: [
      "제조·스마트허브 사무실에 맞는 속도와 내구성",
      "학원·병원·사무실 등 업종별 컬러 출력 필요도",
      "약정·교체 시점과 렌탈료 적정성",
    ],
    body: "안산 지역 사업장의 사용 환경을 먼저 확인한 뒤, 과한 사양이 아닌 적정 장비와 렌탈 조건을 제안드립니다.",
  },
  {
    slug: "bucheon-copier",
    h1: "부천 복사기 렌탈",
    metaTitle: "부천 복사기 렌탈 | 사무실·학원 맞춤",
    metaDescription:
      "부천 복사기 렌탈·복합기 렌탈. 출력량 기준 상담, D470·bizhub, 무료 견적.",
    worryIntro: "‘복사기’로 검색하시는 고객도 동일하게 복합기 렌탈 상담으로 연결됩니다.",
    worryBullets: [
      "복사·스캔·프린트까지 한 기기로 해결하고 싶다",
      "복사기와 복합기 차이가 헷갈린다",
      "렌탈 조건을 단순 비교하고 싶다",
    ],
    body: "부천 지역 사업장에 복사기(복합기) 렌탈을 제공합니다. 실제로는 출력 환경에 맞는 복합기를 추천드리며, D470·bizhub 라인업으로 상담 가능합니다.",
  },
  {
    slug: "incheon-copier",
    h1: "인천 복사기 렌탈",
    metaTitle: "인천 복사기 렌탈 | 사업장 맞춤",
    metaDescription:
      "인천 복사기 렌탈·복합기 렌탈 상담. 토너·AS 포함 조건, 렌탈료 진단.",
    worryIntro: "인천 사업장에서 복사기 렌탈을 찾을 때 확인하면 좋은 점입니다.",
    worryBullets: [
      "사무실 규모에 맞는 기기 선택",
      "복합기로 통합하는 것이 유리한지",
      "월 출력량 대비 렌탈료 적정성",
    ],
    body: "인천 전역 사업장 대상으로 복사기·복합기 렌탈 상담을 진행합니다. 사용량 기준으로 D470 또는 bizhub를 안내드립니다.",
  },
  {
    slug: "siheung-copier",
    h1: "시흥 복사기 렌탈",
    metaTitle: "시흥 복사기 렌탈 | 정왕·시화 인근",
    metaDescription:
      "시흥 복사기 렌탈·복합기 렌탈. 공단·사무실 출력량 맞춤 상담.",
    worryIntro: "시흥·정왕·시화권에서 복사기 렌탈을 고민하실 때입니다.",
    worryBullets: [
      "대량 복사·스캔이 많은 환경",
      "복합기로 교체 시 비용 구조",
      "토너·소모품 관리 부담",
    ],
    body: "시흥 지역 사업장에 복사기(복합기) 렌탈을 제공합니다. 출력량과 설치 환경을 확인한 뒤 맞춤 견적을 안내드립니다.",
  },
  {
    slug: "ansan-copier",
    h1: "안산 복사기 렌탈",
    metaTitle: "안산 복사기 렌탈 | 단원·상록·반월",
    metaDescription:
      "안산 복사기 렌탈·복합기 렌탈. 반월공단·스마트허브 사업장 상담.",
    worryIntro: "안산에서 복사기 렌탈을 알아보는 사업장의 공통 고민입니다.",
    worryBullets: [
      "공단·사무실별 출력 패턴이 다르다",
      "복합기 스펙이 어렵다",
      "렌탈료 비교가 필요하다",
    ],
    body: "안산 지역 사업장에 복사기·복합기 렌탈 상담을 제공합니다. D470·bizhub 중 환경에 맞는 라인을 추천드립니다.",
  },
  {
    slug: "sihwa",
    h1: "시화공단 복합기 렌탈",
    metaTitle: "시화공단 복합기 렌탈 | 제조·사무실 출력 맞춤",
    metaDescription:
      "시화공단 사업장 복합기 렌탈. 대량 출력·안정성, D470·bizhub, 렌탈료 진단.",
    worryIntro: "시화공단 사업장에서 특히 중요하게 보는 요소입니다.",
    worryBullets: [
      "대량 출력과 고장 시 대응 속도",
      "흑백·컬러 출력 비중",
      "계약 조건과 토너 포함 여부",
    ],
    body: "시화공단 인근 설치·상담 경험을 바탕으로, 제조·유통·사무실 환경에 맞는 복합기 렌탈을 안내드립니다. D470·bizhub 상담 및 렌탈료 진단이 가능합니다.",
  },
  {
    slug: "banwol",
    h1: "반월공단 복합기 렌탈",
    metaTitle: "반월공단 복합기 렌탈 | 안산 반월 사업장",
    metaDescription:
      "반월공단 복합기 렌탈. 공장·사무실 출력량 기준 상담, 무료 견적.",
    worryIntro: "반월공단 사업장에서 복합기 렌탈을 검토할 때 자주 나오는 니즈입니다.",
    worryBullets: [
      "사무실과 현장 출력량이 다르다",
      "합리적인 월 고정비 구조",
      "AS·토너 관리 방식",
    ],
    body: "안산 반월공단 인근 사업장을 대상으로 복합기 렌탈 상담을 제공합니다. 출력량 기준으로 D470 또는 bizhub 적합 모델을 안내드립니다.",
  },
];

const bySlug = Object.fromEntries(entries.map((e) => [e.slug, e])) as Record<
  RegionSlug,
  RegionSeoEntry
>;

export function getRegionSeo(slug: string): RegionSeoEntry | undefined {
  return bySlug[slug as RegionSlug];
}

export function regionMetadata(slug: RegionSlug): Metadata {
  const r = bySlug[slug];
  return {
    title: r.metaTitle,
    description: r.metaDescription,
  };
}
