import '@/styles/globals.css';
import '@/styles/reset.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DataSourceEventsProvider } from '@/lib/dataSource/components/DataSourceEventsProvider';
import { RecoilRoot } from 'recoil';
import { NotificationsProvider } from '@mantine/notifications';

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
      <NotificationsProvider>
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
