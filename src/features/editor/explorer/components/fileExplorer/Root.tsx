import { Button, Menu } from '@mantine/core';
import { IconFilePlus, IconFolderPlus } from '@tabler/icons';
import * as styles from '@/styles/editor/explorer/fileExplorer/Root.styles';
import TypescriptIcon from '/public/editor/Typescript.svg';
import JavascriptIcon from '/public/editor/Javascript.svg';
import YamlIcon from '/public/editor/Yaml.svg';
import JsonIcon from '/public/editor/Json.svg';
import AnyFileIcon from '/public/editor/file.svg';
import { useState } from 'react';
import { CreateFileModal } from '@/features/editor/explorer/modals/CreateFileModal';
import { useDirectoryFiles, useProject } from '@/lib/stateManagement/project/getters';
import { Directory } from '@/features/editor/explorer/components/fileExplorer/Directory';
import { File } from '@/features/editor/explorer/components/fileExplorer/File';
import { CreateDirectoryModal } from '@/features/editor/explorer/modals/CreateDirectoryModal';

export function Root() {
	const [createFileModalData, setCreateFileModalData] = useState<FileType | null>(null);
	const [isDirectoryModal, setIsDirectoryModal] = useState(false);

	const project = useProject();
	const files = useDirectoryFiles(project.id);

	return <div css={styles.root}>
		<div css={styles.content}>
			<h2 css={styles.header}>{project.name.toUpperCase()}</h2>

			<div>
				<Menu>
					<Menu.Target>
						<Button compact color="gray" size="xs" variant="subtle">
							<IconFilePlus color="gray" />
						</Button>
					</Menu.Target>

					<Menu.Dropdown>
						<Menu.Item onClick={() => setCreateFileModalData('default')} css={styles.menuItem} icon={<AnyFileIcon />}>File</Menu.Item>
						<Menu.Item onClick={() => setCreateFileModalData('typescript')} css={styles.menuItem} icon={<TypescriptIcon />}>Typescript</Menu.Item>
						<Menu.Item onClick={() => setCreateFileModalData('javascript')} css={styles.menuItem} icon={<JavascriptIcon />}>Javascript</Menu.Item>
						<Menu.Item onClick={() => setCreateFileModalData('yaml')} css={styles.menuItem} icon={<YamlIcon />}>YAML</Menu.Item>
						<Menu.Item onClick={() => setCreateFileModalData('json')} css={styles.menuItem} icon={<JsonIcon />}>JSON</Menu.Item>
					</Menu.Dropdown>
				</Menu>

				<Button onClick={() => setIsDirectoryModal(true)} compact color="gray" size="xs" variant="subtle">
					<IconFolderPlus color="gray" />
				</Button>
			</div>
		</div>

		<div css={styles.fileListing}>
			{files.map((file) => file.is_directory ? <Directory isRoot key={file.id} item={file} /> : <File isRoot key={file.id} item={file} />)}
		</div>

		{isDirectoryModal && <CreateDirectoryModal
			projectId={project.id}
			parent={project.id}
			show={isDirectoryModal}
			onCancel={() => setIsDirectoryModal(false)}
		/>}

		{createFileModalData && <CreateFileModal
			projectId={project.id}
			parent={project.id}
			fileType={createFileModalData}
			show={Boolean(createFileModalData)}
			onCancel={() => setCreateFileModalData(null)}
		/>}
	</div>;
}