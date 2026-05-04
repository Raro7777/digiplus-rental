import { DiagnosisCta } from "@/components/home/DiagnosisCta";
import { FaqPreview } from "@/components/home/FaqPreview";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { PainPoints } from "@/components/home/PainPoints";
import { ProductCards } from "@/components/home/ProductCards";
import { Regions } from "@/components/home/Regions";
import { Solution } from "@/components/home/Solution";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Solution />
      <ProductCards />
      <DiagnosisCta />
      <Regions />
      <Industries />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
