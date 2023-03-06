import * as styles from '@/styles/editor/explorer/fileExplorer/File.styles';
import DirClosed from '/public/editor/folderClosed.svg';
import DirOpen from '/public/editor/folderOpened.svg';
import { useCallback, useEffect, useState } from 'react';
import { useParentFiles } from '@/lib/stateManagement/project/getters';
import { FileListing } from '@/features/editor/explorer/components/fileExplorer/FileListing';
import { ContextMenuTrigger } from 'rctx-contextmenu';
import { AbstractContextMenu } from '@/features/editor/explorer/components/fileExplorer/contextMenu/AbstractContextMenu';
import { SelectedFileSubscriber } from '@/lib/stateManagement/eventSubscriber/SelectedFileSubscriber';
import PubSub from 'pubsub-js';
import { RenamedFileSubscriber } from '@/lib/stateManagement/eventSubscriber/RenamedFileSubscriber';
import { createRenamedFileTopic } from '@/lib/stateManagement/eventSubscriber/keys/createRenamedFileTopic';
import { createSelectedFileTopic } from '@/lib/stateManagement/eventSubscriber/keys/createSelectedFileTopic';

interface Props {
  item: AppFile;
  isRoot: boolean;
  childSpace: number;
}

export function Directory({ item, isRoot, childSpace }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedFile, setSelectedFile] = useState<string>();
	const files = useParentFiles(item.id);
	const nextChildSpace = childSpace + 3;
	const [name, setName] = useState(item.name);

	useEffect(() => {
		const addedUnsubscribe = SelectedFileSubscriber.create().subscribe(
			`${item.id}_addedFile`,
			() => {
				setIsOpen(true);
				SelectedFileSubscriber.create().publish(
					createSelectedFileTopic(item.id),
					item.id,
				);
			},
		);

		const selectedUnsubscribe =
      SelectedFileSubscriber.create().subscribe<string>(
      	createSelectedFileTopic(item.id),
      	(selected, data) => {
      		setSelectedFile(data);
      	},
      );

		const renameFileUnsubscribe = RenamedFileSubscriber.create().subscribe(
			createRenamedFileTopic(item.id, true),
			(msg, data) => {
				if (typeof data === 'string') {
					setName(data);
				}
			},
		);

		return () => {
			PubSub.unsubscribe(addedUnsubscribe);
			PubSub.unsubscribe(selectedUnsubscribe);
			PubSub.unsubscribe(renameFileUnsubscribe);
		};
	}, []);

	const onOpen = useCallback(() => {
		setIsOpen((open) => !open);

		SelectedFileSubscriber.create().publish(
			createSelectedFileTopic(item.id),
			item.id,
		);
	}, [isOpen]);

	return (
		<div css={[styles.root]}>
			{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
			{/*
          // @ts-ignore */}
			<ContextMenuTrigger id={item.id}>
				<div
					onClick={onOpen}
					css={[
						styles.content,
						styles.move(isRoot ? 5 : nextChildSpace),
						isOpen && selectedFile !== item.id ? styles.softOpen : undefined,
						selectedFile === item.id ? styles.open : undefined,
					]}>
					{isOpen ? <DirOpen width={20} /> : <DirClosed width={20} />}

					<p css={styles.title}>{name}</p>
				</div>
			</ContextMenuTrigger>

			<AbstractContextMenu
				value={item.name}
				fileType={item.file_type}
				projectId={item.project_id}
				isDirectory={item.is_directory}
				id={item.id}
			/>

			{isOpen && (
				<FileListing childSpace={nextChildSpace} isRoot={false} files={files} />
			)}
		</div>
	);
}
