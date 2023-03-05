import { Button } from '@mantine/core';

import * as styles from '@/styles/projects/Actions.styles';
import { Main as Search } from '@/features/projects/search/Main';
import { SignOutButton } from '@/lib/dataSource/components/SignOutButton';

interface Props {
  onNewProject: () => void;
}

export function Actions({ onNewProject }: Props) {
	return (
		<div css={styles.root}>
			<div css={styles.leftWrapper}>
				<Search />
				<Button onClick={onNewProject} color="gray">
          New Project
				</Button>
			</div>

			<div css={styles.logoutButton}>
				<SignOutButton />
			</div>
		</div>
	);
}
