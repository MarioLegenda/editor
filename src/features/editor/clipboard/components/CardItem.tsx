import { Button, Card, Text } from '@mantine/core';
import * as styles from '@/styles/editor/pasteBuffer/Main.styles';
import { useRemoveBufferItem } from '@/lib/stateManagement/clipboard/setters';

interface Props {
  item: ClipboardBufferItem;

  type: 'cut' | 'copy';
}

export function CardItem({ item, type }: Props) {
	const removeItem = useRemoveBufferItem();

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
				<Button css={styles.cardItemButton} color="white" variant="subtle">
          Select
				</Button>
			</div>
		</Card>
	);
}
