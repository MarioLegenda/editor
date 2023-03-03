import * as styles from '@/styles/editor/explorer/fileExplorer/File.styles';
import { LanguageIcon } from '@/lib/components/LanguageIcon';
import { useSelectedFileSignal } from '@/lib/stateManagement/project/getters';
import { useSetSelectedFileSignal } from '@/lib/stateManagement/project/setters';
import { ContextMenuTrigger } from 'rctx-contextmenu';
import {
	AbstractContextMenu
} from '@/features/editor/explorer/components/fileExplorer/contextMenu/AbstractContextMenu';

interface Props {
  item: AppFile;
	isRoot: boolean;
	childSpace: number;
}

export function File({item, isRoot = false, childSpace}: Props) {
	const selectedFile = useSelectedFileSignal();
	const setSelectedFile = useSetSelectedFileSignal();
	const nextChildSpace = childSpace + 3;
	
	return <div
		css={[
			styles.root
		]}
		onClick={() => setSelectedFile(item.id)}>
		{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
		{/*
          // @ts-ignore */}
		<ContextMenuTrigger id={item.id}>
			<div css={[
				styles.content,
				styles.move(isRoot ? 5 : nextChildSpace),
				selectedFile === item.id ? styles.open : undefined
			]}>
				<LanguageIcon fileType={item.file_type as FileType} />

				<p>{item.name}</p>
			</div>
		</ContextMenuTrigger>

		<AbstractContextMenu isDirectory={item.is_directory} projectId={item.project_id} id={item.id} />
	</div>;
}