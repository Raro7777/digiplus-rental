import type { LeadInput, StoreLeadResult } from "@/lib/leads/types";

export async function storeLead(lead: LeadInput): Promise<StoreLeadResult> {
  void lead;

  return {
    ok: true,
    mode: "deferred",
  };
}
