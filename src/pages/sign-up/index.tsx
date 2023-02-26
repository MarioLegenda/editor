import { Layout } from '@/lib/layouts/Layout';
import { Main } from '@/features/auth/signUp/Main';
import { useRedirectIfSignedIn } from '@/lib/stateManagement/auth/hooks/useRedirectIfSignedIn';
import { useAuthState } from '@/lib/stateManagement/auth/getters';
import { AuthState } from '@/lib/stateManagement/types/authState';

export default function Index() {
	useRedirectIfSignedIn('/editor');
	const authState = useAuthState();
	
	return <Layout>
		{authState() === AuthState.SIGNED_OUT && <Main />}
	</Layout>;
}