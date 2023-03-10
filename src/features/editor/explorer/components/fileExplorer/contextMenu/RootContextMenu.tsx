// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { ContextMenu, ContextMenuItem, Submenu } from 'rctx-contextmenu';
import { Item } from '@/features/editor/explorer/components/fileExplorer/contextMenu/Item';
import { IconCalendarPlus, IconFolderPlus } from '@tabler/icons';
import * as styles from '@/styles/editor/explorer/contextMenu/AbstractContextMenu.styles';

import TypescriptIcon from '/public/editor/Typescript.svg';
import JavascriptIcon from '/public/editor/Javascript.svg';
import YamlIcon from '/public/editor/Yaml.svg';
import JsonIcon from '/public/editor/Json.svg';
import AnyFileIcon from '/public/editor/file.svg';
import { CreateDirectoryModal } from '@/features/editor/explorer/modals/CreateDirectoryModal';
import { CreateFileModal } from '@/features/editor/explorer/modals/CreateFileModal';
import { useState } from 'react';
import { DeleteFileModal } from '@/features/editor/explorer/modals/DeleteFileModal';
import { PasteBufferView } from '@/features/editor/clipboard/modals/PasteBufferView';
import {
	useGetCopyBuffer,
	useGetCutBuffer,
	useIsBufferEmpty,
} from '@/lib/stateManagement/clipboard/getters';

interface Props {
  id: string;
  projectId: string;
  isDirectory: boolean;
}

export function RootContextMenu({ id, projectId, isDirectory }: Props) {
	const [isDirectoryModal, setIsDirectoryModal] = useState(false);
	const [createFileModalData, setCreateFileModalData] =
    useState<FileType | null>(null);
	const [isDeleteFileModal, setIsDeleteFileModal] = useState(false);
	const [pasteModalId, setPasteModalId] = useState<string>();

	const isBufferEmpty = useIsBufferEmpty();
	const copyBuffer = useGetCopyBuffer();
	const cutBuffer = useGetCutBuffer();

	return (
		<>
			<ContextMenu
				id={id}
				appendTo="body"
				preventHideOnScroll={true}
				preventHideOnResize={true}>
				<Submenu css={styles.divider} title="New">
					{isDirectory && (
						<ContextMenuItem
							css={styles.divider}
							onClick={() => setIsDirectoryModal(true)}>
							<Item
								leftIcon={<IconFolderPlus size={18} color="white" />}
								name="Directory"
							/>
						</ContextMenuItem>
					)}
					<ContextMenuItem onClick={() => setCreateFileModalData('default')}>
						<Item leftIcon={<AnyFileIcon width={18} />} name="File" />
					</ContextMenuItem>
					<ContextMenuItem onClick={() => setCreateFileModalData('typescript')}>
						<Item leftIcon={<TypescriptIcon width={18} />} name="Typescript" />
					</ContextMenuItem>
					<ContextMenuItem onClick={() => setCreateFileModalData('javascript')}>
						<Item leftIcon={<JavascriptIcon width={18} />} name="Javascript" />
					</ContextMenuItem>
					<ContextMenuItem onClick={() => setCreateFileModalData('yaml')}>
						<Item leftIcon={<YamlIcon width={28} />} name="Yaml" />
					</ContextMenuItem>
					<ContextMenuItem onClick={() => setCreateFileModalData('json')}>
						<Item leftIcon={<JsonIcon width={18} />} name="JSON" />
					</ContextMenuItem>
				</Submenu>

				<ContextMenuItem
					onClick={() => setPasteModalId(id)}
					css={styles.divider}>
					<Item
						disabled={isBufferEmpty}
						leftIcon={<IconCalendarPlus size={18} />}
						name="Paste"
					/>
				</ContextMenuItem>
			</ContextMenu>

			{isDirectoryModal && (
				<CreateDirectoryModal
					projectId={projectId}
					parent={id}
					show={isDirectoryModal}
					onCancel={() => setIsDirectoryModal(false)}
				/>
			)}

			{isDeleteFileModal && (
				<DeleteFileModal
					projectId={projectId}
					isDirectory={isDirectory}
					fileId={id}
					show={isDeleteFileModal}
					onCancel={() => setIsDeleteFileModal(false)}
				/>
			)}

			{pasteModalId && (
				<PasteBufferView
					cutPaths={cutBuffer}
					copyPaths={copyBuffer}
					id={pasteModalId}
					show={Boolean(pasteModalId)}
					onCancel={() => setPasteModalId(undefined)}
				/>
			)}

			{createFileModalData && (
				<CreateFileModal
					projectId={projectId}
					parent={id}
					fileType={createFileModalData}
					show={Boolean(createFileModalData)}
					onCancel={() => setCreateFileModalData(null)}
				/>
			)}
		</>
	);
}
