import { createClient } from '@supabase/supabase-js'
import { VITE_SUPABASE_API_KEY, VITE_SUPABASE_URL } from '$env/static/private';

const supabaseUrl = VITE_SUPABASE_URL
const supabaseAnonKey = VITE_SUPABASE_API_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)