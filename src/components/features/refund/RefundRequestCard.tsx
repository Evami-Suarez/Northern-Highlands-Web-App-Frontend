import { forwardRef } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { CalendarDays, CircleCheck, CircleX, CreditCard } from "lucide-react";
import { RefundRequest } from "@/types/refund";

interface RefundRequestCardProps { request: RefundRequest; onApprove: (id: string) => void; onReject: (id: string) => void }

export const RefundRequestCard = forwardRef<HTMLDivElement, RefundRequestCardProps>(({ request, onApprove, onReject, ...props }, ref) => {
  const isPending = request.status === "pending";
  const statusLabel = request.status.charAt(0).toUpperCase() + request.status.slice(1);
  return <Card ref={ref} className="border-foreground/10 bg-background shadow-sm transition-shadow hover:shadow-md" {...props}>
    <CardContent className="flex flex-col gap-5 p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 flex-col gap-2"><div className="flex flex-wrap items-center gap-2"><span className="font-mono text-xs text-foreground/50">REF-{request.id}</span><span className={`rounded-full px-2 py-1 font-sans text-[10px] font-semibold uppercase tracking-wider ${isPending ? "bg-amber-100 text-amber-700" : "bg-foreground/10 text-foreground/60"}`}>{statusLabel}</span></div><h3 className="truncate font-serif text-xl font-semibold text-foreground">{request.userId}</h3><p className="font-sans text-sm leading-6 text-foreground/60">{request.description}</p></div>
        <div className="flex shrink-0 items-center gap-2 rounded-lg bg-accent/10 px-3 py-2"><CreditCard className="size-4 text-accent" aria-hidden="true" /><span className="font-serif text-2xl font-semibold text-accent">${request.amount.toFixed(2)}</span></div>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-foreground/10 pt-4 font-sans text-xs text-foreground/55"><span className="flex items-center gap-1.5"><CalendarDays className="size-3.5" aria-hidden="true" />{request.createdAt}</span><span>Booking <strong className="font-medium text-foreground/75">{request.bookingId}</strong></span><span>Reason <strong className="font-medium text-foreground/75">{request.reasonCategory}</strong></span></div>
      {isPending && <div className="flex gap-2 sm:justify-end"><Button variant="outline" size="sm" onClick={() => onReject(request.id)}><CircleX data-icon="inline-start" />Reject</Button><Button variant="primary" size="sm" onClick={() => onApprove(request.id)}><CircleCheck data-icon="inline-start" />Approve refund</Button></div>}
    </CardContent>
  </Card>;
});
RefundRequestCard.displayName = "RefundRequestCard";
