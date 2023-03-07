import * as styles from '@/styles/editor/layouts/Layout.styles';
import React from 'react';

interface Props {
  menu: React.ReactNode;
  editor: React.ReactNode;
  explorer: React.ReactNode;
  tabs: React.ReactNode;
  filePath: React.ReactNode;
}

export function Layout({ editor, explorer, tabs, menu, filePath }: Props) {
	return (
		<div css={styles.root}>
			<div css={styles.fullWidth}>{menu}</div>
			<div css={styles.explorer}>{explorer}</div>

			<div css={styles.codeEditor}>
				<div css={styles.tabs}>{tabs}</div>
				<div id="actualEditorId" css={styles.actualEditor}>
					{editor}
				</div>
			</div>

			<div css={styles.fullWidth}>{filePath}</div>
		</div>
	);
}
