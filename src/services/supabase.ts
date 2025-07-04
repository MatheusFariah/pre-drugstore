import { createClient } from "@supabase/supabase-js";


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
supabase.auth.getSession().then(console.log).catch(console.error);

console.log("supabase config created", supabase); // debug

export default supabase;
