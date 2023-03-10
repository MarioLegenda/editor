import '@/styles/globals.css';
import '@/styles/reset.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DataSourceEventsProvider } from '@/lib/dataSource/components/DataSourceEventsProvider';
import { RecoilRoot, RecoilEnv } from 'recoil';
import { NotificationsProvider } from '@mantine/notifications';
import { RouterTransition } from '@/lib/components/RouteTransition';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        loader: 'oval',
      }}>
      <RouterTransition />
      <NotificationsProvider position="top-right">
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <DataSourceEventsProvider>
              <Component {...pageProps} />
            </DataSourceEventsProvider>
          </RecoilRoot>
        </QueryClientProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}
