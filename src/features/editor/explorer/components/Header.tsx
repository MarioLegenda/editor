import * as styles from '@/styles/editor/explorer/Header.styles';
import { IconFilePlus, IconFolderPlus } from '@tabler/icons';
import { Button, Menu } from '@mantine/core';

import TypescriptIcon from '/public/editor/Typescript.svg';
import JavascriptIcon from '/public/editor/Javascript.svg';
import YamlIcon from '/public/editor/Yaml.svg';
import JsonIcon from '/public/editor/Json.svg';
import AnyFileIcon from '/public/editor/file.svg';
import { CreateFileModal } from '@/features/editor/explorer/modals/CreateFileModal';
import { useState } from 'react';
import { useProject } from '@/lib/stateManagement/project/getters';

export function Header() {
	const project = useProject();

	const [createFileModalData, setCreateFileModalData] = useState<FileType | null>(null);

	return <div css={styles.root}>
		<div css={styles.menuContent}>
			<Menu>
				<Menu.Target>
					<Button compact color="gray" size="xs" variant="subtle">
						<IconFilePlus color="gray" />
					</Button>
				</Menu.Target>

				<Menu.Dropdown >
					<Menu.Item onClick={() => setCreateFileModalData('default')} css={styles.menuItem} icon={<AnyFileIcon />}>File</Menu.Item>
					<Menu.Item onClick={() => setCreateFileModalData('typescript')} css={styles.menuItem} icon={<TypescriptIcon />}>Typescript</Menu.Item>
					<Menu.Item onClick={() => setCreateFileModalData('javascript')} css={styles.menuItem} icon={<JavascriptIcon />}>Javascript</Menu.Item>
					<Menu.Item onClick={() => setCreateFileModalData('yaml')} css={styles.menuItem} icon={<YamlIcon />}>YAML</Menu.Item>
					<Menu.Item onClick={() => setCreateFileModalData('json')} css={styles.menuItem} icon={<JsonIcon />}>JSON</Menu.Item>
				</Menu.Dropdown>
			</Menu>

			<Button compact color="gray" size="xs" variant="subtle">
				<IconFolderPlus color="gray" />
			</Button>
		</div>

		{createFileModalData && <CreateFileModal
			projectId={project.id}
			parent={project.id}
			fileType={createFileModalData}
			show={Boolean(createFileModalData)}
			onCancel={() => setCreateFileModalData(null)}
		/>}

	</div>;
}