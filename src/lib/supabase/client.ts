import { createClient } from '@supabase/supabase-js';

let client: ReturnType<typeof createClient> | undefined;

export default function getClient(): ReturnType<typeof createClient> {
	if (client) {
		return client;
	}

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	client = createClient(process.env.NEXT_PUBLIC_SUPABASE_API_HOST, process.env.NEXT_PUBLIC_SUPABASE_API_KEY);
  
	return client;
}
