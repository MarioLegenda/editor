import * as styles from '@/styles/editor/explorer/fileExplorer/Main.styles';
import { useDirectoryFiles, useProject } from '@/lib/stateManagement/project/getters';

export function Main() {
	const project = useProject();
	const files = useDirectoryFiles(project.id);

	console.log(files);

	return <div css={styles.root}>
	</div>;
}