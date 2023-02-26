import { useRedirectIfSignedOut } from '@/lib/stateManagement/auth/hooks/useRedirectIfSignedOut';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRunInBrowser } from '@/lib/helpers/useRunInBrowser';
import { Main } from '@/features/editor/initial/Main';
import { InitialLayout } from '@/features/editor/layout/InitialLayout';

export default function Editor() {
	useRedirectIfSignedOut();
	const isReady = useRunInBrowser();

	return <>
		{isReady && <BrowserRouter>
			<Routes>
				<Route path="/editor" element={<InitialLayout>
					<Main />
				</InitialLayout>} />
			</Routes>
		</BrowserRouter>}
	</>;
}