import { getSupabase } from '@/lib/supabase'
import { RefundRequest, RefundCreateInput } from '@/types/refund';

// Helper to safely cast supabase client
const getSupabaseClient = () => getSupabase() as any;

export const refundsService = {
  async getAll(): Promise<RefundRequest[]> {
    const supabase = getSupabaseClient();
    if (!supabase) {
      console.warn('Supabase client not initialized. Returning empty array.');
      return [];
    }

    const { data, error } = await supabase
      .from('refunds')
      .select(`
        *,
        users(name, email),
        bookings(check_in, check_out, total_amount)
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as RefundRequest[];
  },

  async create(input: RefundCreateInput): Promise<RefundRequest> {
    const supabase = getSupabaseClient();
    if (!supabase) {
      throw new Error('Supabase client not initialized');
    }

    const refundId = `REF-${Date.now()}`;
    const { data, error } = await supabase
      .from('refunds')
      .insert({ ...input, refundId })
      .select()
      .single();

    if (error) throw error;
    return data as RefundRequest;
  },

  async updateStatus(refundId: string, status: RefundRequest['status'], adminNotes?: string): Promise<void> {
    const supabase = getSupabaseClient();
    if (!supabase) {
      throw new Error('Supabase client not initialized');
    }

    const updateData = {
      status,
      updated_at: new Date().toISOString(),
      ...(status !== 'pending' && { processed_at: new Date().toISOString() }),
      ...(adminNotes && { admin_notes: adminNotes })
    };

    const { error } = await supabase
      .from('refunds')
      .update(updateData)
      .eq('refund_id', refundId);

    if (error) throw error;
  }
};