'use client';

import { useState, useEffect } from 'react';
import { refundsService } from '../services/api/refunds';
import { RefundRequest } from '../types/refund';

export function useRefunds() {
  const [refunds, setRefunds] = useState<RefundRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    refundsService.getAll()
      .then(setRefunds)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const updateStatus = async (refundId: string, status: RefundRequest['status'], adminNotes?: string) => {
    try {
      await refundsService.updateStatus(refundId, status, adminNotes);
      setRefunds(prev => prev.map(r => 
        r.refundId === refundId ? { ...r, status, adminNotes } : r
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update status');
    }
  };

  return { refunds, loading, error, updateStatus };
}