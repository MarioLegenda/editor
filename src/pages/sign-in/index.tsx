import { Layout } from '@/features/shared/layouts/Layout';
import { Main } from '@/features/auth/signIn/Main';
import { AuthState } from '@/lib/stateManagement/types/authState';
import { useAuthState } from '@/lib/stateManagement/auth/getters';
import { useRedirectIfSignedIn } from '@/lib/stateManagement/auth/hooks/useRedirectIfSignedIn';

export default function Index() {
	useRedirectIfSignedIn('/editor/projects');
	const authState = useAuthState();

	return <Layout>
		{authState() === AuthState.SIGNED_OUT && <Main />}
	</Layout>;
}