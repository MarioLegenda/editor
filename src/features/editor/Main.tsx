import { useRedirectIfSignedOut } from '@/lib/stateManagement/auth/hooks/useRedirectIfSignedOut';
import { LoadingLayout } from '@/features/editor/layout/LoadingLayout';
import { Layout } from '@/features/editor/layout/Layout';
import {Main as ExplorerMain} from '@/features/editor/explorer/Main';
import { useProjectDataResolver } from '@/features/editor/hooks/useProjectDataResolver';
import { useFilesystem, useProject } from '@/lib/stateManagement/project/getters';
import { useFileInsertSubscription } from '@/lib/dataSource/subscriptions/useFileInsertSubscription';
import { CodeEditor } from '@/features/editor/codeEditor/CodeEditor';

export function Main() {
	useFileInsertSubscription();
	
	useRedirectIfSignedOut();
	const {isLoading, notFound} = useProjectDataResolver();

	const project = useProject();
	const fileSystem = useFilesystem();

	return <>
		<LoadingLayout notFound={notFound} loading={isLoading} />

		{project && fileSystem && <Layout
			editor={<CodeEditor value='This is my value' onChange={() => console.log} />}
			explorer={<ExplorerMain />}
		/>}
	</>;
}