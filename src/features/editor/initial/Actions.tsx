import { Button, TextInput } from '@mantine/core';

import * as styles from '@/styles/editor/initial/Actions.styles';

interface Props {
	onNewProject: () => void;
}

export function Actions({onNewProject}: Props) {
	return <div css={styles.root}>
		<div>
			<TextInput name="search" placeholder="Search projects..." />
		</div>

		<div>
			<Button onClick={onNewProject} color="gray">New Project</Button>
		</div>
	</div>;
}