import { forwardRef } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { RefundRequest } from "@/types/refund";

interface RefundRequestCardProps {
  request: RefundRequest;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

export const RefundRequestCard = forwardRef<
  HTMLDivElement,
  RefundRequestCardProps
>(({ request, onApprove, onReject, ...props }, ref) => {
  return (
    <Card ref={ref} className="mb-4" {...props}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-1 mt-4 rounded-lg">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 mt-2">
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-zinc-700">
                {request.id}
              </span>
              <span className="text-xs text-zinc-500">
                {request.requestedAt}
              </span>
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1 text-2xl">
              {request.applicant}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              {request.description}
            </p>

            {/* Stay, Reason, and Buttons in same row */}
            <div className="flex justify-between items-center">
              <div className="flex gap-4 text-xs text-zinc-500">
                <span>Stay: {request.stayDates}</span>
                <span>Reason: {request.reasonCategory}</span>
              </div>
              <div className="flex gap-3 justify-end pl-10 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onReject(request.id)}
                  className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950"
                >
                  Reject
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onApprove(request.id)}
                  className="border-red-200 text-red-600 dark:hover:bg-green-950 dark:text-red-400 hover:text-white"
                >
                  Approve
                </Button>
              </div>
            </div>
          </div>

          {/* Amount only on the right */}
          <div className="text-right ml-4">
            <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              ${request.amount.toFixed(2)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

RefundRequestCard.displayName = "RefundRequestCard";
