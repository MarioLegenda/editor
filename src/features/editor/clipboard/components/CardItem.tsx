import { Button, Card, Text } from '@mantine/core';
import * as styles from '@/styles/editor/pasteBuffer/Main.styles';
import {
	useCopyFile,
	useCutFile,
	useRemoveBufferItem,
} from '@/lib/stateManagement/clipboard/setters';
import { useCallback } from 'react';
import { useIsChildDirectory } from '@/lib/stateManagement/project/getters';
import { showNotification } from '@mantine/notifications';

interface Props {
  item: ClipboardBufferItem;
  type: 'cut' | 'copy';
  destination: string;
}

export function CardItem({ item, type, destination }: Props) {
	const removeItem = useRemoveBufferItem();
	const cutFile = useCutFile();
	const copyFile = useCopyFile();
	const isChildDirectory = useIsChildDirectory();

	const onDoOperation = useCallback(async () => {
		if (await isChildDirectory(item.id, destination)) {
			showNotification({
				id: 'cutCopyError',
				title: 'Cut error',
				autoClose: 10000,
				message: 'Cannot cut or copy into a child directory',
				color: 'red',
				loading: false,
			});

			return;
		}

		if (type === 'cut') {
			await cutFile({
				id: item.id,
				newParent: destination,
			});
		} else if (type === 'copy') {
			await copyFile({
				id: item.id,
				newParent: destination,
			});
		}

		removeItem(type, item.id);
	}, []);

	return (
		<Card css={styles.card} shadow="sm" radius="md" withBorder>
			<Text size="sm" color="dimmed">
				{item.item}
			</Text>

			<div css={styles.buttonWrapper}>
				<Button
					onClick={() => removeItem(type, item.id)}
					css={[styles.cardItemButton, styles.removeButton]}
					color="white"
					variant="subtle">
          Remove
				</Button>
				<Button
					onClick={onDoOperation}
					css={styles.cardItemButton}
					color="white"
					variant="subtle">
          Select
				</Button>
			</div>
		</Card>
	);
}
