import * as styles from '@/styles/editor/pasteBuffer/Main.styles';
import { Button, Tabs } from '@mantine/core';
import { IconFiles, IconScissors } from '@tabler/icons';
import { CardItem } from '@/features/editor/clipboard/components/CardItem';
import {
	useResetCopyBuffer,
	useResetCutBuffer,
} from '@/lib/stateManagement/clipboard/setters';
import {
	useGetCopyBuffer,
	useGetCutBuffer,
} from '@/lib/stateManagement/clipboard/getters';

export function Main() {
	const resetCutBuffer = useResetCutBuffer();
	const resetCopyBuffer = useResetCopyBuffer();

	const copyBuffer = useGetCopyBuffer();
	const cutBuffer = useGetCutBuffer();

	return (
		<div css={styles.root}>
			<h1 css={styles.heading}>Clipboard</h1>

			<div css={styles.actions}>
				<Button
					disabled={copyBuffer.length === 0 && cutBuffer.length === 0}
					onClick={() => {
						resetCutBuffer();
						resetCopyBuffer();
					}}
					variant="default">
          Clear all
				</Button>
				<Button
					disabled={cutBuffer.length === 0}
					onClick={() => resetCutBuffer()}
					variant="default">
          Clear cut
				</Button>
				<Button
					disabled={copyBuffer.length === 0}
					onClick={() => resetCopyBuffer()}
					variant="default">
          Clear copy
				</Button>
			</div>

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
					{cutBuffer.length !== 0 &&
            cutBuffer.map((item, i) => (
            	<CardItem type="cut" key={i} item={item} />
            ))}

					{cutBuffer.length === 0 && <p css={styles.noItems}>No items</p>}
				</Tabs.Panel>

				<Tabs.Panel css={styles.panel} value="copy" pt="xs">
					{copyBuffer.length !== 0 &&
            copyBuffer.map((item, i) => (
            	<CardItem type="copy" key={i} item={item} />
            ))}

					{copyBuffer.length === 0 && <p css={styles.noItems}>No items</p>}
				</Tabs.Panel>
			</Tabs>
		</div>
	);
}
