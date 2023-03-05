import * as styles from '@/styles/tabs/Tab.styles';
import { IconFile, IconSquareX } from '@tabler/icons';
import { useEffect, useState } from 'react';
import { SelectedTabSubscriber } from '@/lib/stateManagement/eventSubscriber/SelectedTabSubscriber';
import { isTab } from '@/lib/dataSource/features/fileSystem/check/isTab';
import {
	useAddTabToHistory,
	useRemoveTab,
} from '@/lib/stateManagement/tabs/setters';
import { CachedContentSubscriber } from '@/lib/stateManagement/eventSubscriber/CachedContentSubscriber';
import { Keys } from '@/lib/stateManagement/eventSubscriber/keys/Keys';
import { createSelectedTabTopic } from '@/lib/stateManagement/eventSubscriber/keys/createSelectedTabTopic';

interface Props {
  item: Tab;
}

export function Tab({ item }: Props) {
	const [selected, setSelected] = useState<Tab>();
	const removeTab = useRemoveTab();
	const addHistory = useAddTabToHistory();

	useEffect(() => {
		const selectedTabUnsubscribe = SelectedTabSubscriber.create().subscribe(
			createSelectedTabTopic(item.id),
			(msg, data) => {
				if (isTab(data) && data.id === item.id) {
					setSelected(data);
					addHistory(data);

					CachedContentSubscriber.create().publish(Keys.TabChange, {
						id: item.id,
						projectId: item.projectId,
						userId: item.userId,
					});

					return;
				}

				setSelected(undefined);
			},
		);

		return () => {
			PubSub.unsubscribe(selectedTabUnsubscribe);
		};
	}, []);

	return (
		<div
			css={[styles.root, selected ? styles.selected : undefined]}
			onClick={() => {
				SelectedTabSubscriber.create().publish(item.id, item);
			}}>
			<div css={styles.content}>
				<IconFile />
				<p>{item.name}</p>
			</div>

			<IconSquareX
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();

					removeTab(item);
				}}
				className="close-icon"
			/>
		</div>
	);
}
