import * as styles from '@/styles/editor/layouts/Layout.styles';
import React from 'react';

interface Props {
	editor: React.ReactNode;
	explorer: React.ReactNode;
}

export function Layout({editor, explorer}: Props) {
	return <div css={styles.root}>
		<div css={styles.explorer}>{explorer}</div>

		<div css={styles.codeEditor}>{editor}</div>
	</div>;
}