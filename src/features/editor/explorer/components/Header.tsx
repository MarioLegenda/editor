import * as styles from '@/styles/editor/explorer/Header.styles';
import { IconFilePlus, IconFolderPlus } from '@tabler/icons';
import { Button, Menu } from '@mantine/core';

import TypescriptIcon from '/public/editor/Typescript.svg';
import JavascriptIcon from '/public/editor/Javascript.svg';
import YamlIcon from '/public/editor/Yaml.svg';
import JsonIcon from '/public/editor/Json.svg';

export function Header() {
	return <div css={styles.root}>
		<div css={styles.menuContent}>
			<Menu>
				<Menu.Target>
					<Button compact color="gray" size="xs" variant="subtle">
						<IconFilePlus color="gray" />
					</Button>
				</Menu.Target>

				<Menu.Dropdown >
					<Menu.Item css={styles.menuItem} icon={<TypescriptIcon />}>Typescript</Menu.Item>
					<Menu.Item css={styles.menuItem} icon={<JavascriptIcon />}>Javascript</Menu.Item>
					<Menu.Item css={styles.menuItem} icon={<YamlIcon />}>YAML</Menu.Item>
					<Menu.Item css={styles.menuItem} icon={<JsonIcon />}>JSON</Menu.Item>
				</Menu.Dropdown>
			</Menu>

			<Button compact color="gray" size="xs" variant="subtle">
				<IconFolderPlus color="gray" />
			</Button>
		</div>


	</div>;
}