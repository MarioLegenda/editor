import { Button, Card, Text } from '@mantine/core';
import * as styles from '@/styles/editor/pasteBuffer/Main.styles';

interface Props {
  item: ClipboardBufferItem;
}

export function CardItem({ item }: Props) {
	return (
		<Card css={styles.card} shadow="sm" radius="md" withBorder>
			<Text size="sm" color="dimmed">
				{item.item}
			</Text>

			<Button variant="default">Select</Button>
		</Card>
	);
}
