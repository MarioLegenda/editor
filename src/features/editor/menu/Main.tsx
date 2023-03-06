import { Item } from '@/features/editor/menu/Item';

import * as styles from '@/styles/menu/Main.styles';

export function Main() {
	return (
		<div css={styles.root}>
			<Item name="File" />
			<Item name="Settings" />
		</div>
	);
}
