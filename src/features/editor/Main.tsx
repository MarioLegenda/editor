import { useRedirectIfSignedOut } from '@/lib/stateManagement/auth/hooks/useRedirectIfSignedOut';
import { LoadingLayout } from '@/features/editor/layout/LoadingLayout';
import { Layout } from '@/features/editor/layout/Layout';
import {Main as ExplorerMain} from '@/features/editor/explorer/Main';
import { useProjectDataResolver } from '@/features/editor/hooks/useProjectDataResolver';
import { isProjectWithFiles } from '@/lib/dataSource/projects/check/isProjectWithFiles';
import { useEffect } from 'react';
import { useSetFilesystem, useSetProject } from '@/lib/stateManagement/project/setters';
import { useFilesystem, useProject } from '@/lib/stateManagement/project/getters';
import { useFileInsertSubscription } from '@/lib/dataSource/subscriptions/useFileInsertSubscription';
import { CodeEditor } from '@/features/editor/codeEditor/CodeEditor';

export function Main() {
	useFileInsertSubscription();
	
	useRedirectIfSignedOut();
	const {isLoading, notFound, data} = useProjectDataResolver();
	const setProject = useSetProject();
	const setFilesystem = useSetFilesystem();

	const project = useProject();
	const fileSystem = useFilesystem();

	useEffect(() => {
		if (isProjectWithFiles(data)) {
			setFilesystem(data.files);
			setProject({
				name: data.name,
				description: data.description,
				id: data.id,
				user_id: data.user_id,
				color: data.color,
			});
		}
	}, [data]);

	return <>
		<LoadingLayout notFound={notFound} loading={isLoading} />

		{project && fileSystem && <Layout
			editor={<CodeEditor value='This is my value' onChange={() => console.log} />}
			explorer={<ExplorerMain />}
		/>}
	</>;
}