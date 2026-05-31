import { ConsultationProcess } from "@/components/home/ConsultationProcess";
import { DiagnosisCta } from "@/components/home/DiagnosisCta";
import { FaqPreview } from "@/components/home/FaqPreview";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { PainPoints } from "@/components/home/PainPoints";
import { ProductCards } from "@/components/home/ProductCards";
import { Regions } from "@/components/home/Regions";
import { ServiceProof } from "@/components/home/ServiceProof";
import { Solution } from "@/components/home/Solution";
import { TrustBar } from "@/components/home/TrustBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PainPoints />
      <Solution />
      <ConsultationProcess />
      <ProductCards />
      <DiagnosisCta />
      <Regions />
      <Industries />
      <ServiceProof />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
