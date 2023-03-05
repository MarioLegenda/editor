import { createClient } from '@supabase/supabase-js';

let client: ReturnType<typeof createClient> | undefined;

export default function getClient(): ReturnType<typeof createClient> {
  if (client) {
    return client;
  }

  const apiKey = process.env.NEXT_PUBLIC_SUPABASE_API_HOST;
  const apiHost = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

  if (!apiKey || !apiHost) {
    throw new Error(
      `Unknown Supabase API key or host: API_KEY: ${JSON.stringify(
        apiKey,
      )}, API_HOST: ${JSON.stringify(apiHost)}`,
    );
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  client = createClient(apiKey, apiHost);

  return client;
}
