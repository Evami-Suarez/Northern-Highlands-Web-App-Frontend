import { supabase } from "@/lib/supabase";
import { RefundRequest } from "@/types/refund";

export const refundService = {
  async getRefundRequests(): Promise<RefundRequest[]> {

    try {
      const { data: testData, error: testError } = await supabase
        .from("refunds")
        .select("count")
        .single();

      if (testError) {
        throw testError;
      }


      const { data, error } = await supabase
        .from("refunds")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }


      if (!data || data.length === 0) {
        return [];
      }

      const mappedData = data.map((item) => ({
        id: item.refund_id?.toString() || "unknown",
        refundId: item.refund_id?.toString() || "unknown",
        bookingId: item.booking_id?.toString() || "unknown",
        userId: item.user_id?.toString() || "unknown",
        requestedAt: item.created_at
          ? this.calculateDaysAgo(item.created_at)
          : "Requested recently",
        applicant: item.applicant || "Unknown Applicant",
        description: item.description || "No description provided",
        stayDates: item.stay_dates || "Dates not specified",
        reasonCategory: item.reason_category || "General",
        amount: Number(item.amount) || 0,
        status: item.status || "pending",
        createdAt: item.created_at || new Date().toISOString(),
        updatedAt:
          item.updated_at || item.created_at || new Date().toISOString(),
      }));

      return mappedData;
    } catch (err) {
      throw err;
    }
  },

  calculateDaysAgo(createdDate: string): string {
    if (typeof window === "undefined") {
      return "Requested recently";
    }

    const days = Math.floor(
      (Date.now() - new Date(createdDate).getTime()) / (1000 * 60 * 60 * 24),
    );
    return `Requested ${days} days ago`;
  },

  async updateRefundStatus(
    refundId: number,
    status: "approved" | "rejected",
  ): Promise<void> {

    const { error } = await supabase
      .from("refunds")
      .update({ status })
      .eq("refund_id", refundId);

    if (error) {
      throw error;
    }

  },
};
