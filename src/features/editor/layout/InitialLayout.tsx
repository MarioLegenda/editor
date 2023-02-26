import { PropsWithChildren } from 'react';

import * as styles from '@/styles/editor/initial/InitialLayout.styles';

export function InitialLayout({children}: PropsWithChildren) {
	return <div css={styles.root}>
		{children}
	</div>;
}