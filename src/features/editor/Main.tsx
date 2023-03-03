import { useRedirectIfSignedOut } from '@/lib/stateManagement/auth/hooks/useRedirectIfSignedOut';
import { LoadingLayout } from '@/features/editor/layout/LoadingLayout';
import { Layout } from '@/features/editor/layout/Layout';
import {Main as ExplorerMain} from '@/features/editor/explorer/Main';
import { useProjectDataResolver } from '@/lib/dataSource/features/projects/useProjectDataResolver';
import { useFilesystem, useProject } from '@/lib/stateManagement/project/getters';
import { CodeEditor } from '@/features/editor/codeEditor/CodeEditor';
import { useEffect } from 'react';
import { Subscriber } from '@/lib/stateManagement/eventSubscriber/Subscriber';
import { SelectedFileSubscriber } from '@/lib/stateManagement/eventSubscriber/SelectedFileSubscriber';

export function Main() {
	useRedirectIfSignedOut();
	const {isLoading, notFound} = useProjectDataResolver();

	const project = useProject();
	const fileSystem = useFilesystem();

	useEffect(() => {
		return () => {
			Subscriber.create().close();
			SelectedFileSubscriber.create().close();
		};
	}, []);

	return <>
		<LoadingLayout notFound={notFound} loading={isLoading} />

		{project && fileSystem && <Layout
			editor={<CodeEditor value='This is my value' onChange={() => console.log} />}
			explorer={<ExplorerMain />}
		/>}
	</>;
}