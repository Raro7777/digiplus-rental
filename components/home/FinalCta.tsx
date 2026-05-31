import { CtaButtons } from "@/components/home/CtaButtons";

export function FinalCta() {
  return (
    <section className="bg-[#f7f8f4] py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-black text-brand-navy sm:text-3xl">
          우리 사무실에 맞는 복합기, 지금 확인해보세요.
        </h2>
        <CtaButtons className="mt-8 justify-center" />
      </div>
    </section>
  );
}
