export type LeadKind = "quote" | "diagnosis";

export type QuoteLeadInput = {
  kind: "quote";
  companyName: string;
  contactName: string;
  phone: string;
  region: string;
  desiredProduct?: string;
  monthlyVolume?: string;
  colorUse?: string;
  preferredDate?: string;
  message?: string;
};

export type DiagnosisLeadInput = {
  kind: "diagnosis";
  companyName: string;
  contactName: string;
  phone: string;
  region: string;
  currentModel: string;
  interestModel: "신도리코 D470" | "태흥아이에스 bizhub" | "아직 모름";
  currentRent: string;
  monthlyVolume: string;
  industry?: string;
  colorRatio?: string;
  tonerIncluded?: string;
  contractRemaining?: string;
  message?: string;
};

export type LeadInput = QuoteLeadInput | DiagnosisLeadInput;

export type StoreLeadResult = {
  ok: true;
  mode: "deferred";
};
