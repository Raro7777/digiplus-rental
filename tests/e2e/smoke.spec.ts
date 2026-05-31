import { expect, test } from "@playwright/test";

test("home page exposes main conversion actions", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /복합기 렌탈/ }).first(),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /무료 견적/ }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /전화/ }).first()).toBeVisible();
});

test("quote form accepts a valid deferred submission", async ({ page }) => {
  await page.goto("/quote");

  await page.getByLabel(/회사명/).fill("테스트 회사");
  await page.getByLabel(/담당자명/).fill("홍길동");
  await page.getByLabel(/연락처/).fill("010-0000-0000");
  await page.getByLabel(/설치 지역/).fill("부천 상동");
  await page.getByLabel(/개인정보 수집/).check();
  await page.getByRole("button", { name: /견적 문의 보내기/ }).click();

  await expect(
    page.getByText("견적 문의가 접수되었습니다.", { exact: true }),
  ).toBeVisible();
});

test("diagnosis form accepts a valid deferred submission", async ({ page }) => {
  await page.goto("/diagnosis");

  await page.getByLabel(/회사명/).fill("테스트 회사");
  await page.getByLabel(/담당자명/).fill("홍길동");
  await page.getByLabel(/연락처/).fill("010-0000-0000");
  await page.getByLabel(/설치 지역/).fill("인천 연수구");
  await page.getByLabel(/현재 사용 중인 모델/).fill("잘 모름");
  await page.getByLabel("아직 모름").check();
  await page.getByLabel(/현재 월 렌탈료/).fill("잘 모름");
  await page.getByLabel(/월 출력량/).fill("잘 모름");
  await page.getByLabel(/입력하신 정보는/).check();
  await page.getByRole("button", { name: /렌탈료 진단 신청/ }).click();

  await expect(
    page.getByText("렌탈료 진단 신청이 접수되었습니다.", { exact: true }),
  ).toBeVisible();
});

test("region pages render generated content", async ({ page }) => {
  await page.goto("/regions/bucheon");

  await expect(page.getByRole("heading", { name: "부천 복합기 렌탈" })).toBeVisible();
  await expect(page.getByText(/지역 상담 포인트/)).toBeVisible();
  await expect(page.getByText(/지역별 자주 묻는 질문/)).toBeVisible();
});
