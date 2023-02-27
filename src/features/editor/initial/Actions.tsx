import { Button } from '@mantine/core';

import * as styles from '@/styles/editor/initial/Actions.styles';
import { Main as Search } from '@/features/editor/initial/search/Main';
import { SignOutButton } from '@/lib/dataSource/components/SignOutButton';

interface Props {
	onNewProject: () => void;
}

export function Actions({onNewProject}: Props) {
	return <div css={styles.root}>
		<div css={styles.leftWrapper}>
			<Search />
			<Button onClick={onNewProject} color="gray">New Project</Button>
		</div>

		<div css={styles.logoutButton}>
			<SignOutButton />
		</div>
	</div>;
}