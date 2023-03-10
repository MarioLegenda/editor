import { Button, Card, Text } from '@mantine/core';
import * as styles from '@/styles/editor/pasteBuffer/Main.styles';
import {
	useCutFile,
	useRemoveBufferItem,
} from '@/lib/stateManagement/clipboard/setters';
import { useCallback } from 'react';

interface Props {
  item: ClipboardBufferItem;
  type: 'cut' | 'copy';
  destination: string;
}

export function CardItem({ item, type, destination }: Props) {
	const removeItem = useRemoveBufferItem();
	const cutFile = useCutFile();

	const onDoOperation = useCallback(async () => {
		if (type === 'cut') {
			await cutFile({
				id: item.id,
				newParent: destination,
			});
		}
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
