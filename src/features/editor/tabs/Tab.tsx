import * as styles from '@/styles/tabs/Tab.styles';
import { IconFile, IconSquareX } from '@tabler/icons';
import { useState } from 'react';

export function Tab() {
	const [selected, setSelected] = useState(false);

	return (
		<div
			css={[styles.root, selected ? styles.selected : undefined]}
			onClick={() => setSelected(true)}>
			<div css={styles.content}>
				<IconFile />
				<p>Tab</p>
			</div>

			<IconSquareX className="close-icon" />
		</div>
	);
}
