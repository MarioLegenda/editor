import * as styles from '@/styles/tabs/Tabs.styles';
import { useGetTabs } from '@/lib/stateManagement/tabs/getters';
import { Tab } from '@/features/editor/tabs/Tab';

export function Tabs() {
	const tabs = useGetTabs();

	return (
		<>
			{tabs.length !== 0 && (
				<div css={styles.root}>
					{tabs.map((item) => (
						<Tab key={item.id} item={item} />
					))}
				</div>
			)}
		</>
	);
}
