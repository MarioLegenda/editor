import * as styles from '@/styles/editor/tabs/Tab.styles';
import { IconSquareX } from '@tabler/icons';
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
import { updateSelectedHistoryTab } from '@/lib/dataSource/features/tabs/implementation/updateSelectedHistoryTab';
import { LanguageIcon } from '@/lib/components/LanguageIcon';
import { Tooltip } from '@mantine/core';

interface Props {
  item: Tab;
}

function resolveLongName(name: string) {
	if (name.length > 14) {
		return `${name.substring(0, 14)}...`;
	}

	return name;
}

export function Tab({ item }: Props) {
	const [selected, setSelected] = useState<Tab>();
	const [name, setName] = useState(item.name);
	const removeTab = useRemoveTab();
	const addTabToHistory = useAddTabToHistory();

	useEffect(() => {
		const selectedTabUnsubscribe = SelectedTabSubscriber.create().subscribe(
			createSelectedTabTopic(item.id),
			(msg, data) => {
				if (isTab(data) && data.id === item.id) {
					setSelected(data);
					setName(data.name);
					addTabToHistory(data);
					updateSelectedHistoryTab(
						item.projectId,
						item.userId,
						JSON.stringify(data),
					);

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
		<>
			{name.length > 14 && (
				<Tooltip label={name}>
					<div
						css={[styles.root, selected ? styles.selected : undefined]}
						onClick={() => {
							SelectedTabSubscriber.create().publish(
								createSelectedTabTopic(item.id),
								item,
							);
						}}>
						<div css={styles.content}>
							<LanguageIcon name={name} fileType={item.fileType} />
							<p>{resolveLongName(name)}</p>
						</div>

						<div className="close-icon-wrapper" css={styles.closeIconWrapper}>
							<IconSquareX
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();

									removeTab(item);
								}}
								className="close-icon"
							/>
						</div>
					</div>
				</Tooltip>
			)}

			{name.length < 14 && (
				<div
					css={[styles.root, selected ? styles.selected : undefined]}
					onClick={() => {
						SelectedTabSubscriber.create().publish(
							createSelectedTabTopic(item.id),
							item,
						);
					}}>
					<div css={styles.content}>
						<LanguageIcon name={name} fileType={item.fileType} />
						<p>{resolveLongName(name)}</p>
					</div>

					<div className="close-icon-wrapper" css={styles.closeIconWrapper}>
						<IconSquareX
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();

								removeTab(item);
							}}
							className="close-icon"
						/>
					</div>
				</div>
			)}
		</>
	);
}
