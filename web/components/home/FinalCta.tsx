import { CtaButtons } from "@/components/home/CtaButtons";

export function FinalCta() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          우리 사무실에 맞는 복합기, 지금 확인해보세요.
        </h2>
        <CtaButtons className="mt-8 justify-center" />
      </div>
    </section>
  );
}
