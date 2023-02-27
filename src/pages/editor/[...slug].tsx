import { useRedirectIfSignedOut } from '@/lib/stateManagement/auth/hooks/useRedirectIfSignedOut';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRunInBrowser } from '@/lib/helpers/useRunInBrowser';
import { Main as ProjectsMain } from '@/features/projects/Main';
import { Main as EditorMain } from '@/features/editor/Main';
import { InitialLayout } from '@/features/projects/layouts/InitialLayout';

export default function Editor() {
	useRedirectIfSignedOut();
	const isReady = useRunInBrowser();

	return <>
		{isReady && <BrowserRouter>
			<Routes>
				<Route path="/editor/projects" element={<InitialLayout>
					<ProjectsMain />
				</InitialLayout>} />

				<Route path="/editor/:id" element={<InitialLayout>
					<EditorMain />
				</InitialLayout>} />
			</Routes>
		</BrowserRouter>}
	</>;
}