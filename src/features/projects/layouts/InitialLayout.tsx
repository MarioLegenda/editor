import { PropsWithChildren } from 'react';

import * as styles from '@/styles/projects/InitialLayout.styles';

export function InitialLayout({children}: PropsWithChildren) {
	return <div css={styles.root}>
		{children}
	</div>;
}