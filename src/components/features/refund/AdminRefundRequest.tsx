"use client";

import { useState, useEffect } from "react";
import { Tabs } from "@/components/ui/Tabs";
import { RefundRequestCard } from "./RefundRequestCard";
import { refundService } from "@/services/api/refundService";
import { RefundRequest } from "@/types/refund";
export function RefundRequestsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [requests, setRequests] = useState<RefundRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await refundService.getRefundRequests();
        setRequests(data);
      } catch (error) {
        console.error("Failed to fetch refund requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const pendingRequests = requests.filter(
    (req: RefundRequest) => req.status === "pending",
  );
  const processedRequests = requests.filter(
    (req: RefundRequest) => req.status !== "pending",
  );

  const handleApprove = async (id: string) => {
    try {
      // Extract numeric ID from string (e.g., "1" from "1")
      const numericId = parseInt(id);
      await refundService.updateRefundStatus(numericId, "approved");

      // Update local state
      setRequests((prev) =>
        prev.map((req) =>
          req.id === id ? { ...req, status: "approved" as const } : req,
        ),
      );
    } catch (error) {
      console.error("Failed to approve refund:", error);
    }
  };

  const handleReject = async (id: string) => {
    try {
      const numericId = parseInt(id);
      await refundService.updateRefundStatus(numericId, "rejected");

      setRequests((prev) =>
        prev.map((req) =>
          req.id === id ? { ...req, status: "rejected" as const } : req,
        ),
      );
    } catch (error) {
      console.error("Failed to reject refund:", error);
    }
  };

  const tabs = [
    { label: "Pending", count: pendingRequests.length },
    { label: "Processed", count: processedRequests.length },
  ];

  const currentRequests = activeTab === 0 ? pendingRequests : processedRequests;

    if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-zinc-500">Loading refund requests...</div>
      </div>
    );
  }

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
