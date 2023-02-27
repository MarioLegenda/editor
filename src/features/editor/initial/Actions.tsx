import { Button } from '@mantine/core';

import * as styles from '@/styles/editor/initial/Actions.styles';
import { Main } from '@/features/editor/initial/search/Main';

interface Props {
	onNewProject: () => void;
}

export function Actions({onNewProject}: Props) {
	return <div css={styles.root}>
		<div>
			<Main />
		</div>

		<div>
			<Button onClick={onNewProject} color="gray">New Project</Button>
		</div>
	</div>;
}