import * as styles from '@/styles/tabs/Tab.styles';
import { IconFile, IconSquareX } from '@tabler/icons';
import { useEffect, useState } from 'react';
import { SelectedTabSubscriber } from '@/lib/stateManagement/eventSubscriber/SelectedTabSubscriber';
import { isTab } from '@/lib/dataSource/features/fileSystem/check/isTab';

interface Props {
  item: Tab;
}

export function Tab({ item }: Props) {
	const [selected, setSelected] = useState<Tab>();

	useEffect(() => {
		const unsubscribe = SelectedTabSubscriber.create().subscribe(
			item.id,
			(msg, data) => {
				if (isTab(data) && data.id === item.id) {
					setSelected(data);

					return;
				}

				setSelected(undefined);
			},
		);

		return () => {
			PubSub.unsubscribe(unsubscribe);
		};
	}, []);

	return (
		<div
			css={[styles.root, selected ? styles.selected : undefined]}
			onClick={() => SelectedTabSubscriber.create().publish(item.id, item)}>
			<div css={styles.content}>
				<IconFile />
				<p>{item.name}</p>
			</div>

			<IconSquareX className="close-icon" />
		</div>
	);
}
