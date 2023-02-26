import * as styles from '@/styles/layout/BaseLayout.styles';
import { PropsWithChildren } from 'react';

export function Layout({children}: PropsWithChildren) {
	return <div css={styles.root}>
		{children}
	</div>;
}