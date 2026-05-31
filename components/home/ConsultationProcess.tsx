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
            <article
              key={step.title}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <p className="text-xs font-semibold text-brand-blue">
                STEP {index + 1}
              </p>
              <h3 className="mt-2 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
