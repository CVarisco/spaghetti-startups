import { supabase } from '$lib/server/supabase';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  let { data: startups, error } = await supabase.from('startups').select('*');

  if (startups) {
    return startups;
  }

  return error;
}
