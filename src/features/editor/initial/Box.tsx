import { PropsWithChildren } from 'react';

import * as styles from '@/styles/editor/initial/Box.styles';

export function Box({children}: PropsWithChildren) {
	return <div css={styles.root}>
		{children}
	</div>;
}