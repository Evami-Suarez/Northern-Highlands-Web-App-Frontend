import { RefundRequest } from '@/types/refund';

export const mockRefundRequests: RefundRequest[] = [
  {
    id: 'NH-8831-Z',
    requestedAt: 'Requested 1 day ago',
    applicant: 'Sarah Mitchell',
    description: 'Severe weather warning issued for travel dates, flight cancellations expected.',
    stayDates: 'Oct 25 - Oct 28',
    reasonCategory: 'Weather',
    amount: 875.00,
    status: 'pending'
  },
    {
    id: 'NH-81231-Z',
    requestedAt: 'Requested 1 day ago',
    applicant: 'Sarah Mitchell',
    description: 'Severe weather warning issued for travel dates, flight cancellations expected.',
    stayDates: 'Oct 25 - Oct 28',
    reasonCategory: 'Weather',
    amount: 875.00,
    status: 'pending'
  },
    {
    id: 'NH-1234-B',
    requestedAt: 'Requested 1 day ago',
    applicant: 'Sarah Mitchell',
    description: 'Severe weather warning issued for travel dates, flight cancellations expected.',
    stayDates: 'Oct 25 - Oct 28',
    reasonCategory: 'Weather',
    amount: 875.00,
    status: 'pending'
  }
];