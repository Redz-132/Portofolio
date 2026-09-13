import { createClient} from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Supabase URL", supabaseUrl);     
    console.error("Supabase Key", supabaseKey);
    throw new Error("Supabase URL and Anon key are required. Check your .env file and ensure they are prefixex with VITE_ and the dev server was restarted.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);