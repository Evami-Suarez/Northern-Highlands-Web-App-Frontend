export interface RefundRequest {
  id: string;
  requestedAt: string;
  applicant: string;
  description: string;
  stayDates: string;
  reasonCategory: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
}

export interface PolicySection {
  title: string;
  content: string | string[];
  lastUpdated?: string;
}