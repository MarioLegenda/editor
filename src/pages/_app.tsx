import '@/styles/globals.css';
import '@/styles/reset.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DataSourceEventsProvider } from '@/lib/dataSource/components/DataSourceEventsProvider';
import { RecoilRoot } from 'recoil';
import { isBrowser } from '@/lib/helpers/isBrowser';
import { accountAtom } from '@/lib/stateManagement/auth/account';
import getClient from '@/lib/supabase/client';
import { authStateAtom } from '@/lib/stateManagement/auth/state';
import { AuthState } from '@/lib/stateManagement/types/authState';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return <MantineProvider
		withGlobalStyles
		withNormalizeCSS
		theme={{
			colorScheme: 'dark',
			loader: 'oval',
		}}
	>
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<DataSourceEventsProvider>
					<Component {...pageProps} />
				</DataSourceEventsProvider>
			</RecoilRoot>
		</QueryClientProvider>
	</MantineProvider>;
}
