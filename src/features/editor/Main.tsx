import { Layout } from '@/features/editor/layout/Layout';

import { Main as ExplorerMain } from '@/features/editor/explorer/Main';
import { useRedirectIfSignedOut } from '@/lib/stateManagement/auth/hooks/useRedirectIfSignedOut';

export function Main() {
	useRedirectIfSignedOut();
	
	return <Layout editor={<div>Editor</div>} explorer={<ExplorerMain />} />;
}