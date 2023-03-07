import { Item } from '@/features/editor/menu/Item';

import * as styles from '@/styles/menu/Main.styles';

export function Main() {
	return (
		<div id="topMenuId" css={styles.root}>
			<Item name="File" />
			<Item name="Settings" />
		</div>
	);
}
