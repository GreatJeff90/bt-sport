import { createClient } from '@supabase/supabase-js';

// These must be defined in your `.env.local`
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Optional: Test connection and log the result
(async () => {
  const { error } = await supabase.rpc('now'); // simple Supabase RPC
  if (error) {
    console.error('Supabase test connection failed:', error.message);
  } else {
    console.log('✅ Supabase connected successfully');
  }
})();
