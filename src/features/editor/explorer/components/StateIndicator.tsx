import { useStateIndicator } from '@/lib/stateManagement/global/getters';

import * as styles from '@/styles/global/StateIndicator.styles';
import { IconCheck, IconLoader } from '@tabler/icons';

export function StateIndicator() {
	const state = useStateIndicator();

	return (
		<div css={styles.root}>
			{state === 'saved' && <IconCheck size={22} color="green" />}
			{state === 'saving' && <IconLoader css={styles.loading} size={22} />}
		</div>
	);
}
