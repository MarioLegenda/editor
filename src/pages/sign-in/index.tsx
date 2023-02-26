import { Layout } from '@/lib/layouts/Layout';
import { Main } from '@/features/auth/signIn/Main';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AuthState } from '@/lib/stateManagement/types/authState';
import { useAuthState } from '@/lib/stateManagement/auth/getters';

export default function Index() {
	const router = useRouter();
	const authState = useAuthState();

	useEffect(() => {
		if (authState() === AuthState.SIGNED_IN) {
			router.push('/editor');
		}
	}, [authState]);

	return <Layout>
		{authState() === AuthState.SIGNED_OUT && <Main />}
	</Layout>;
}