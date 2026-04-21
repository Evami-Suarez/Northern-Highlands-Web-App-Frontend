"use client";

import { RefundRequestsPage } from "@/components/features/refund/AdminRefundRequest";
import { RefundPolicy } from "@/components/features/refund/AdminRefundPolicy";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export default function RefundRequests() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        <RefundRequestsPage />
      </div>
      <div className="w-full lg:w-1/3">
        <RefundPolicy />
      </div>
      {/* <div>
        <Button variant="outline" size="sm" className="flex items-baseline gap-2">
          <Download className="w-4 h-4" />
          Download Full PDF
        </Button>
      </div> */}
    </div>
  );
}
