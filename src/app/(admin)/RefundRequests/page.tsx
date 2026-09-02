"use client";

import { useMemo, useState } from "react";
import { AdminRefundRequest } from "@/components/features/refund/AdminRefundRequest";
import { RefundPolicy } from "@/components/features/refund/AdminRefundPolicy";
import { FileText, Search, ShieldCheck, WalletCards } from "lucide-react";

export const dynamic = "force-dynamic";

export default function RefundRequests() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");

  const stats = useMemo(() => [
    { label: "Pending review", value: "—", icon: ShieldCheck, tone: "bg-accent/10 text-accent" },
    { label: "Refund volume", value: "—", icon: WalletCards, tone: "bg-amber-100 text-amber-700" },
    { label: "Processed this month", value: "—", icon: FileText, tone: "bg-sky-100 text-sky-700" },
  ], []);

  return (
    <main className="min-w-0 overflow-hidden">
      <header className="mb-8 flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent">Operations / Finance</p>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Refund requests</h1>
          <p className="max-w-xl font-sans text-sm leading-6 text-foreground/60">Review guest submissions, make informed decisions, and keep every resolution aligned with the Highlands policy.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="flex min-w-64 items-center gap-2 rounded-lg border border-foreground/10 bg-background px-3 py-2 shadow-sm">
            <Search className="size-4 text-foreground/40" aria-hidden="true" />
            <span className="sr-only">Search refund requests</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search requests" className="w-full bg-transparent font-sans text-sm outline-none placeholder:text-foreground/40" />
          </label>
          <select value={status} onChange={(event) => setStatus(event.target.value)} aria-label="Filter refund requests" className="rounded-lg border border-foreground/10 bg-background px-3 py-2 font-sans text-sm text-foreground shadow-sm outline-none">
            <option value="all">All statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </header>

      <section aria-label="Refund overview" className="mb-6 grid gap-4 md:grid-cols-3">
        {stats.map(({ label, value, icon: Icon, tone }) => (
          <div key={label} className="flex items-center justify-between rounded-xl border border-foreground/10 bg-background p-5 shadow-sm">
            <div className="flex flex-col gap-1"><span className="font-sans text-xs text-foreground/55">{label}</span><strong className="font-serif text-2xl text-foreground">{value}</strong></div>
            <span className={`flex size-10 items-center justify-center rounded-lg ${tone}`}><Icon className="size-5" aria-hidden="true" /></span>
          </div>
        ))}
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <AdminRefundRequest query={query} statusFilter={status} />
        <RefundPolicy />
      </div>
    </main>
  );
}
