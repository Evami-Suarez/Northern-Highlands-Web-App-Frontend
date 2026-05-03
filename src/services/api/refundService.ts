import { supabase } from '@/lib/supabase'
import { RefundRequest } from '@/types/refund'

export const refundService = {
  async getRefundRequests(): Promise<RefundRequest[]> {
    console.log('=== DEBUG: Starting refund request fetch ===');
    
    // Debug environment variables
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'NOT SET');
    console.log('Supabase Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'NOT SET');
    
    try {
      console.log('Testing Supabase connection...');
      const { data: testData, error: testError } = await supabase
        .from('refunds')
        .select('count')
        .single();

      if (testError) {
        console.error('Connection test failed:', testError);
        throw testError;
      }
      
      console.log('Connection successful. Total records:', testData);
      
      const { data, error } = await supabase
        .from('refunds')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Supabase query error:', error);
        throw error;
      }
      
      console.log('Raw data from Supabase:', data);
      console.log('Data type:', typeof data);
      console.log('Data length:', data?.length);

      if (!data || data.length === 0) {
        console.log('No refund requests found in database');
        return [];
      }

      const mappedData = data.map(item => ({
        id: item.refund_id?.toString() || 'unknown',
        requestedAt: item.created_at ? 
          this.calculateDaysAgo(item.created_at) 
          : 'Requested recently',
        applicant: item.applicant || 'Unknown Applicant',
        description: item.description || 'No description provided',
        stayDates: item.stay_dates || 'Dates not specified',
        reasonCategory: item.reason_category || 'General',
        amount: Number(item.amount) || 0,
        status: item.status || 'pending'
      }));
      
      console.log('Mapped data:', mappedData);
      return mappedData;
    } catch (err) {
      console.error('Complete error details:', err);
      throw err;
    }
  },

  calculateDaysAgo(createdDate: string): string {
    if (typeof window === 'undefined') {
      return 'Requested recently';
    }
    
    const days = Math.floor((Date.now() - new Date(createdDate).getTime()) / (1000 * 60 * 60 * 24));
    return `Requested ${days} days ago`;
  },

  async updateRefundStatus(refundId: number, status: 'approved' | 'rejected'): Promise<void> {
    console.log(`Updating refund ${refundId} to status: ${status}`);
    
    const { error } = await supabase
      .from('refunds')
      .update({ status })
      .eq('refund_id', refundId)

    if (error) {
      console.error('Failed to update refund status:', error);
      throw error;
    }
    
    console.log(`Successfully updated refund ${refundId} to ${status}`);
  }
}