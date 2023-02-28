import * as styles from '@/styles/editor/explorer/fileExplorer/File.styles';
import DirClosed from '/public/editor/folderClosed.svg';
import DirOpen from '/public/editor/folderOpened.svg';
import { useCallback, useState } from 'react';

interface Props {
  item: File;
  isRoot: boolean;
}

export function Directory({item, isRoot}: Props) {
	const [isOpen, setIsOpen] = useState(false);

	const onOpen = useCallback(() => {
		setIsOpen((open) => !open);
	}, []);

	return <div css={[styles.root, isOpen ? styles.open : undefined]} onClick={onOpen}>
		<div css={[styles.content, styles.move(isRoot ? 5 : 2)]}>
			{isOpen ? <DirOpen width={20} /> : <DirClosed width={20} />}

			<p>{item.name}</p>
		</div>
	</div>;
}