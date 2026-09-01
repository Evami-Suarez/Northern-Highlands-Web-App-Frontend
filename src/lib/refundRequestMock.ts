import { RefundRequest } from '@/types/refund';

export const mockRefundRequests: RefundRequest[] = [
  {
    id: 'NH-8831-Z',
    refundId: 'REF-001',
    bookingId: 'BK-8831-Z',
    userId: 'user-123',
    amount: 875.00,
    reasonCategory: 'Weather',
    description: 'Severe weather warning issued for travel dates, flight cancellations expected.',
    status: 'pending',
    createdAt: '2026-08-30T10:00:00Z',
    updatedAt: '2026-08-30T10:00:00Z'
  },
  {
    id: 'NH-81231-Z',
    refundId: 'REF-002',
    bookingId: 'BK-81231-Z',
    userId: 'user-456',
    amount: 875.00,
    reasonCategory: 'Weather',
    description: 'Severe weather warning issued for travel dates, flight cancellations expected.',
    status: 'pending',
    createdAt: '2026-08-30T10:00:00Z',
    updatedAt: '2026-08-30T10:00:00Z'
  },
  {
    id: 'NH-1234-B',
    refundId: 'REF-003',
    bookingId: 'BK-1234-B',
    userId: 'user-789',
    amount: 875.00,
    reasonCategory: 'Weather',
    description: 'Severe weather warning issued for travel dates, flight cancellations expected.',
    status: 'pending',
    createdAt: '2026-08-30T10:00:00Z',
    updatedAt: '2026-08-30T10:00:00Z'
  }
];