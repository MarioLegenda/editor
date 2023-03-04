import * as styles from '@/styles/editor/explorer/fileExplorer/File.styles';
import { LanguageIcon } from '@/lib/components/LanguageIcon';
import { ContextMenuTrigger } from 'rctx-contextmenu';
import { AbstractContextMenu } from '@/features/editor/explorer/components/fileExplorer/contextMenu/AbstractContextMenu';
import { useEffect, useState } from 'react';
import { SelectedFileSubscriber } from '@/lib/stateManagement/eventSubscriber/SelectedFileSubscriber';
import { isFile } from '@/lib/dataSource/features/fileSystem/check/isFile';
import { useSetCodeEditorSelectedFile } from '@/lib/stateManagement/project/setters';
import PubSub from 'pubsub-js';

interface Props {
  item: AppFile;
  isRoot: boolean;
  childSpace: number;
}

export function File({ item, isRoot = false, childSpace }: Props) {
	const [selectedFile, setSelectedFile] = useState<string>();
	const nextChildSpace = childSpace + 3;
	const setCodeEditorSelectedFile = useSetCodeEditorSelectedFile();

	useEffect(() => {
		const unsubscribe = SelectedFileSubscriber.create().subscribe(
			item.id,
			(selected, data) => {
				console.log(data);
				if (isFile(data)) {
					setSelectedFile(data.id);

					return;
				}

				setSelectedFile(undefined);
			},
		);

		return () => {
			PubSub.unsubscribe(unsubscribe);
		};
	}, []);

	return (
		<div
			css={[styles.root]}
			onClick={() => {
				SelectedFileSubscriber.create().publish(item.id, item);
				setCodeEditorSelectedFile(item);
			}}>
			{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
			{/*
          // @ts-ignore */}
			<ContextMenuTrigger id={item.id}>
				<div
					css={[
						styles.content,
						styles.move(isRoot ? 5 : nextChildSpace),
						selectedFile === item.id ? styles.open : undefined,
					]}>
					<LanguageIcon fileType={item.file_type as FileType} />

					<p>{item.name}</p>
				</div>
			</ContextMenuTrigger>

			<AbstractContextMenu
				isDirectory={item.is_directory}
				projectId={item.project_id}
				id={item.id}
			/>
		</div>
	);
}
