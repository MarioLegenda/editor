import * as styles from '@/styles/editor/explorer/fileExplorer/File.styles';
import DirClosed from '/public/editor/folderClosed.svg';
import DirOpen from '/public/editor/folderOpened.svg';
import { useCallback, useState } from 'react';
import { useParentFiles, useSelectedFile } from '@/lib/stateManagement/project/getters';
import { useSetSelectedFile } from '@/lib/stateManagement/project/setters';
import { FileListing } from '@/features/editor/explorer/components/fileExplorer/FileListing';

interface Props {
  item: File;
  isRoot: boolean;
	childSpace: number;
}

export function Directory({item, isRoot, childSpace}: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const selectedFile = useSelectedFile();
	const setSelectedFile = useSetSelectedFile();
	const files = useParentFiles(item.id);
	const nextChildSpace = childSpace + 3;

	const onOpen = useCallback(() => {
		setIsOpen((open) => !open);
		setSelectedFile(item);
	}, []);

	return <div css={[styles.root]}>
		<div
			onClick={onOpen}
			css={
				[styles.content,
					styles.move(isRoot ? 5 : nextChildSpace),
					isOpen && selectedFile?.id !== item.id ? styles.softOpen : undefined,
					selectedFile?.id === item.id ? styles.open : undefined
				]}>

			{isOpen ? <DirOpen width={20} /> : <DirClosed width={20} />}

			<p>{item.name}</p>
		</div>

		{isOpen && <FileListing childSpace={nextChildSpace} isRoot={false} files={files} />}
	</div>;
}