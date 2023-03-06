import * as styles from '@/styles/editor/layouts/Layout.styles';
import React from 'react';

interface Props {
  menu: React.ReactNode;
  editor: React.ReactNode;
  explorer: React.ReactNode;
  tabs: React.ReactNode;
}

export function Layout({ editor, explorer, tabs, menu }: Props) {
	return (
		<div css={styles.root}>
			<div css={styles.mainMenu}>{menu}</div>
			<div css={styles.explorer}>{explorer}</div>

			<div css={styles.codeEditor}>
				<div css={styles.tabs}>{tabs}</div>
				<div css={styles.actualEditor}>{editor}</div>
			</div>
		</div>
	);
}
