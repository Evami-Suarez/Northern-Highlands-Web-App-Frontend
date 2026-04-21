"use client";

import { useState } from "react";
import { Tabs } from "@/components/ui/Tabs";
import { RefundRequestCard } from "./RefundRequestCard";
// import { RefundPolicy } from "./AdminRefundPolicy";
import { mockRefundRequests } from "@/lib/refundRequestMock";
import { RefundRequest } from "@/types/refund";

export function RefundRequestsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [requests, setRequests] = useState(mockRefundRequests);

  const pendingRequests = requests.filter(
    (req: RefundRequest) => req.status === "pending",
  );
  const processedRequests = requests.filter(
    (req: RefundRequest) => req.status !== "pending",
  );

  const handleApprove = (id: string) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: "approved" as const } : req,
      ),
    );
  };

  const handleReject = (id: string) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: "rejected" as const } : req,
      ),
    );
  };

  const tabs = [
    { label: "Pending", count: pendingRequests.length },
    { label: "Processed", count: processedRequests.length },
  ];

  const currentRequests = activeTab === 0 ? pendingRequests : processedRequests;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-2 text-[#735C00]">
            Refund Requests
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-base">
            Review pending submissions for the current booking cycle.
          </p>
        </div>

        {/* Tabs */}
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Requests List */}
      <div className="space-y-4 mt-8 mb-8 rounded-lg p-4">
        {currentRequests.length > 0 ? (
          currentRequests.map((request) => (
            <RefundRequestCard
              key={request.id}
              request={request}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ))
        ) : (
          <div className="text-center py-12 text-zinc-500 dark:text-zinc-400">
            No refund requests found.
          </div>
        )}
      </div>
    </div>
  );
}
