import { useRedirectIfSignedOut } from '@/lib/stateManagement/auth/hooks/useRedirectIfSignedOut';
import { LoadingLayout } from '@/features/editor/layout/LoadingLayout';
import { Layout } from '@/features/editor/layout/Layout';
import { Main as ExplorerMain } from '@/features/editor/explorer/Main';
import { useProjectDataResolver } from '@/lib/dataSource/features/projects/useProjectDataResolver';
import {
	useFilesystem,
	useProject,
} from '@/lib/stateManagement/project/getters';
import { useEffect } from 'react';
import { SelectedFileSubscriber } from '@/lib/stateManagement/eventSubscriber/SelectedFileSubscriber';
import { CodeEditorWrapper } from '@/features/editor/codeEditor/CodeEditorWrapper';
import { Tabs } from '@/features/editor/tabs/Tabs';

export function Main() {
	useRedirectIfSignedOut();
	const { isLoading, notFound } = useProjectDataResolver();

	const project = useProject();
	const fileSystem = useFilesystem();

	useEffect(() => {
		return () => {
			SelectedFileSubscriber.create().close();
		};
	}, []);

	return (
		<>
			<LoadingLayout notFound={notFound} loading={isLoading} />

			{project && fileSystem && (
				<Layout
					tabs={<Tabs />}
					editor={<CodeEditorWrapper projectId={project.id} />}
					explorer={<ExplorerMain />}
				/>
			)}
		</>
	);
}
