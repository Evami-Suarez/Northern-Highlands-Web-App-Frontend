export interface RefundRequest {
  id: string;
  refundId: string;
  bookingId: string;
  userId: string;
  amount: number;
  reasonCategory: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected' | 'processed';
  adminNotes?: string;
  processedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PolicySection {
  title: string;
  content: string | string[];
  lastUpdated?: string;
}

export interface RefundCreateInput {
  bookingId: string;
  amount: number;
  reasonCategory: string;
  description: string;
}