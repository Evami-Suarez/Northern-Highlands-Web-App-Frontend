"use client";

import { useEffect, useMemo, useState } from "react";
import { Tabs } from "@/components/ui/Tabs";
import { RefundRequestCard } from "./RefundRequestCard";
import { refundService } from "@/services/api/refundService";
import { RefundRequest } from "@/types/refund";

interface Props { query?: string; statusFilter?: string }

export function AdminRefundRequest({ query = "", statusFilter = "all" }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [requests, setRequests] = useState<RefundRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { refundService.getRefundRequests().then(setRequests).catch((error) => console.error("Failed to fetch refund requests:", error)).finally(() => setLoading(false)); }, []);

  const filtered = useMemo(() => requests.filter((request) => {
    const haystack = `${request.id} ${request.bookingId} ${request.userId} ${request.reasonCategory}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (statusFilter === "all" || request.status === statusFilter);
  }), [requests, query, statusFilter]);
  const pending = filtered.filter((request) => request.status === "pending");
  const processed = filtered.filter((request) => request.status !== "pending");
  const current = activeTab === 0 ? pending : processed;

  const updateStatus = async (id: string, nextStatus: "approved" | "rejected") => {
    try { await refundService.updateRefundStatus(Number.parseInt(id, 10), nextStatus); setRequests((previous) => previous.map((request) => request.id === id ? { ...request, status: nextStatus } : request)); }
    catch (error) { console.error(`Failed to ${nextStatus} refund:`, error); }
  };

  if (loading) return <div className="rounded-xl border border-foreground/10 bg-background p-12 text-center font-sans text-sm text-foreground/55">Loading refund requests...</div>;

  return <section aria-label="Refund requests" className="min-w-0">
    <div className="mb-4 flex flex-col gap-3 border-b border-foreground/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
      <div><h2 className="font-serif text-2xl font-semibold text-foreground">Request queue</h2><p className="font-sans text-sm text-foreground/55">Prioritize submissions that need a decision.</p></div>
      <Tabs tabs={[{ label: "Pending", count: pending.length }, { label: "Processed", count: processed.length }]} activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
    <div className="flex flex-col gap-3">{current.length ? current.map((request) => <RefundRequestCard key={request.id} request={request} onApprove={() => updateStatus(request.id, "approved")} onReject={() => updateStatus(request.id, "rejected")} />) : <div className="rounded-xl border border-dashed border-foreground/15 bg-background p-12 text-center font-sans text-sm text-foreground/55">No refund requests match this view.</div>}</div>
  </section>;
}
