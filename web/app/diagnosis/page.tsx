import type { Metadata } from "next";
import { DiagnosisForm } from "@/components/forms/DiagnosisForm";

export const metadata: Metadata = {
  title: "렌탈료 진단",
  description:
    "현재 월 렌탈료와 출력량을 알려주시면 적정 장비와 예상 렌탈 조건을 안내드립니다.",
};

export default function DiagnosisPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold text-slate-900">
        현재 복합기 렌탈료가 적정한지 무료로 확인해보세요.
      </h1>
      <p className="mt-4 text-slate-600">
        월 출력량, 컬러 사용량, 현재 렌탈료를 기준으로 디지플러스가 적정 장비와
        예상 렌탈 조건을 안내드립니다.
      </p>
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <DiagnosisForm />
      </div>
    </div>
  );
}
