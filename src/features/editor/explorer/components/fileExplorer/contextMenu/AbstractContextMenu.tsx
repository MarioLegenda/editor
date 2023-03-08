// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { ContextMenu, ContextMenuItem, Submenu } from 'rctx-contextmenu';
import { Item } from '@/features/editor/explorer/components/fileExplorer/contextMenu/Item';
import {
	IconCalendarPlus,
	IconEdit,
	IconFiles,
	IconFolderPlus,
	IconScissors,
	IconTrash,
} from '@tabler/icons';
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
import { RenameFileModal } from '@/features/editor/explorer/modals/RenameFileModal';
import { RenameDirectoryModal } from '@/features/editor/explorer/modals/RenameDirectoryModal';
import { usePasteBuffer } from '@/lib/pasteBuffer/usePasteBuffer';
import { PasteBufferView } from '@/features/editor/clipboard/modals/PasteBufferView';

interface Props {
  id: string;
  value: string;
  projectId: string;
  fileType: FileType | null;
  isDirectory: boolean;
}

export function AbstractContextMenu({
	id,
	projectId,
	isDirectory,
	fileType,
	value,
}: Props) {
	const [isDirectoryModal, setIsDirectoryModal] = useState(false);
	const [createFileModalData, setCreateFileModalData] =
    useState<FileType | null>(null);
	const [isDeleteFileModal, setIsDeleteFileModal] = useState(false);
	const [isRenameFileModal, setIsRenameFileModal] = useState(false);
	const [isRenameDirectoryModal, setIsRenameDirectoryModal] = useState(false);
	const [pasteModalId, setPasteModalId] = useState<string>();

	const { cut, copy, isEmpty, getCopyPaths, getCutPaths } = usePasteBuffer();

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

				<ContextMenuItem onClick={() => cut(id)}>
					<Item leftIcon={<IconScissors size={18} />} name="Cut" />
				</ContextMenuItem>

				<ContextMenuItem onClick={() => copy(id)}>
					<Item leftIcon={<IconFiles size={18} />} name="Copy" />
				</ContextMenuItem>

				<ContextMenuItem
					onClick={() => setPasteModalId(id)}
					css={styles.divider}>
					<Item
						disabled={isEmpty()}
						leftIcon={<IconCalendarPlus size={18} />}
						name="Paste"
					/>
				</ContextMenuItem>

				<ContextMenuItem
					onClick={() => {
						if (isDirectory) {
							setIsRenameDirectoryModal(true);

							return;
						}

						setIsRenameFileModal(true);
					}}>
					<Item leftIcon={<IconEdit size={18} />} name="Rename" />
				</ContextMenuItem>
				<ContextMenuItem
					onClick={() => setIsDeleteFileModal(true)}
					css={styles.danger}>
					<Item leftIcon={<IconTrash size={18} />} name="Delete" danger />
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
					cutPaths={getCutPaths()}
					copyPaths={getCopyPaths()}
					id={pasteModalId}
					show={Boolean(pasteModalId)}
					onCancel={() => setPasteModalId(undefined)}
				/>
			)}

			{isRenameFileModal && (
				<RenameFileModal
					projectId={projectId}
					value={value}
					parent={id}
					fileId={id}
					fileType={fileType}
					show={isRenameFileModal}
					onCancel={() => setIsRenameFileModal(false)}
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

			{isRenameDirectoryModal && (
				<RenameDirectoryModal
					projectId={projectId}
					value={value}
					parent={id}
					fileId={id}
					show={isRenameDirectoryModal}
					onCancel={() => setIsRenameDirectoryModal(null)}
				/>
			)}
		</>
	);
}
