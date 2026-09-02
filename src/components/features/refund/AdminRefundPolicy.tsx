"use client";

import { forwardRef } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { CheckCircle2, Download, Info } from "lucide-react";

export const RefundPolicy = forwardRef<HTMLDivElement, { className?: string }>(({ className = "", ...props }, ref) => <Card ref={ref} className={`border-foreground/10 bg-background shadow-sm ${className}`} {...props}>
  <CardHeader className="gap-2 border-b border-foreground/10 p-5"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><CardTitle className="font-serif text-xl text-foreground">Refund policy</CardTitle><Info className="size-4 text-foreground/40" aria-label="Policy information" /></div><span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-foreground/45">Jan 2024</span></div><p className="font-sans text-sm leading-6 text-foreground/55">A clear guide for consistent guest resolutions.</p></CardHeader>
  <CardContent className="flex flex-col gap-5 p-5">
    <section className="flex flex-col gap-3"><h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-foreground/55">Standard bookings</h3><div className="flex flex-col gap-2 font-sans text-sm">{[["60+ days notice", "100% refund", "text-accent"], ["30–59 days notice", "75% refund", "text-amber-700"], ["14–29 days notice", "50% refund", "text-amber-700"], ["7–13 days notice", "25% refund", "text-foreground/65"], ["Less than 7 days", "No refund", "text-foreground/45"]].map(([label, value, tone]) => <div key={label} className="flex items-center justify-between border-b border-foreground/10 pb-2 last:border-0"><span className="text-foreground/60">{label}</span><strong className={tone}>{value}</strong></div>)}</div></section>
    <section className="rounded-lg bg-accent/10 p-4"><div className="mb-2 flex items-center gap-2"><CheckCircle2 className="size-4 text-accent" aria-hidden="true" /><h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">Emergency clauses</h3></div><p className="font-sans text-sm leading-6 text-foreground/65">Full refunds may be considered for documented medical emergencies, bereavement, or severe weather events.</p></section>
    <section className="flex flex-col gap-2"><h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-foreground/55">Required proof</h3><ul className="flex flex-col gap-2 font-sans text-sm text-foreground/60"><li>Medical certificate from a licensed physician</li><li>Death certificate or obituary notice</li><li>Official travel advisory or weather warning</li></ul></section>
    <Button variant="outline" size="sm" className="w-full"><Download data-icon="inline-start" />Download full policy</Button>
  </CardContent>
</Card>);
RefundPolicy.displayName = "RefundPolicy";
