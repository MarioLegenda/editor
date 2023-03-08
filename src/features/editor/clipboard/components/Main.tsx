import * as styles from '@/styles/editor/pasteBuffer/Main.styles';
import { Tabs } from '@mantine/core';
import { IconFiles, IconScissors } from '@tabler/icons';
import { CardItem } from '@/features/editor/clipboard/components/CardItem';

interface Props {
  cutPaths: string[];
  copyPaths: string[];
}

export function Main({ cutPaths, copyPaths }: Props) {
	return (
		<div css={styles.root}>
			<h1 css={styles.heading}>Clipboard</h1>

			<Tabs defaultValue="cut" orientation="vertical">
				<Tabs.List>
					<Tabs.Tab value="cut" icon={<IconScissors size={18} />}>
            Cut clipboard
					</Tabs.Tab>
					<Tabs.Tab value="copy" icon={<IconFiles size={18} />}>
            Copy clipboard
					</Tabs.Tab>
				</Tabs.List>

				<Tabs.Panel css={styles.panel} value="cut" pt="xs">
					{cutPaths.map((item, i) => (
						<CardItem key={i} item={item} />
					))}
				</Tabs.Panel>

				<Tabs.Panel css={styles.panel} value="copy" pt="xs">
					{copyPaths.map((item, i) => (
						<CardItem key={i} item={item} />
					))}
				</Tabs.Panel>
			</Tabs>
		</div>
	);
}
