import { useRedirectIfSignedOut } from '@/lib/stateManagement/auth/hooks/useRedirectIfSignedOut';
import { LoadingLayout } from '@/features/editor/layout/LoadingLayout';
import { isProject } from '@/lib/dataSource/projects/check/isProject';
import { Layout } from '@/features/editor/layout/Layout';
import {Main as ExplorerMain} from '@/features/editor/explorer/Main';
import { useProjectDataResolver } from '@/features/editor/hooks/useProjectDataResolver';

export function Main() {
	useRedirectIfSignedOut();
	const {isLoading, notFound, data} = useProjectDataResolver();

	return <>
		<LoadingLayout notFound={notFound} loading={isLoading} />

		{isProject(data) && <Layout editor={<div>Editor</div>} explorer={<ExplorerMain />} />}
	</>;
	
/*
	return <Layout editor={<div>Editor</div>} explorer={<ExplorerMain />} />;
*/
}