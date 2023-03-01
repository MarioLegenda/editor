import * as styles from '@/styles/layout/BaseLayout.styles';
import { PropsWithChildren } from 'react';
import { useLoadUser } from '@/lib/stateManagement/auth/hooks/useLoadUser';

export function Layout({children}: PropsWithChildren) {
	useLoadUser();

	return <div css={styles.root}>
		{children}
	</div>;
}