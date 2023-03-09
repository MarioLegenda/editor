// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { ContextMenu, ContextMenuItem } from 'rctx-contextmenu';
import { Item } from '@/features/editor/explorer/components/fileExplorer/contextMenu/Item';
import { IconEdit, IconFiles, IconScissors, IconTrash } from '@tabler/icons';
import * as styles from '@/styles/editor/explorer/contextMenu/AbstractContextMenu.styles';
import { CreateFileModal } from '@/features/editor/explorer/modals/CreateFileModal';
import { useState } from 'react';
import { DeleteFileModal } from '@/features/editor/explorer/modals/DeleteFileModal';
import { RenameFileModal } from '@/features/editor/explorer/modals/RenameFileModal';
import { RenameDirectoryModal } from '@/features/editor/explorer/modals/RenameDirectoryModal';
import {
	useAddCopyItem,
	useAddCutItem,
} from '@/lib/stateManagement/clipboard/setters';

interface Props {
  id: string;
  value: string;
  projectId: string;
  fileType: FileType | null;
}

export function FileContextMenu({ id, projectId, fileType, value }: Props) {
	const [createFileModalData, setCreateFileModalData] =
    useState<FileType | null>(null);
	const [isDeleteFileModal, setIsDeleteFileModal] = useState(false);
	const [isRenameFileModal, setIsRenameFileModal] = useState(false);
	const [isRenameDirectoryModal, setIsRenameDirectoryModal] = useState(false);

	const addCopyItem = useAddCopyItem();
	const addCutItem = useAddCutItem();

	return (
		<>
			<ContextMenu
				id={id}
				appendTo="body"
				preventHideOnScroll={true}
				preventHideOnResize={true}>
				<ContextMenuItem onClick={() => addCutItem(id)}>
					<Item leftIcon={<IconScissors size={18} />} name="Cut" />
				</ContextMenuItem>

				<ContextMenuItem onClick={() => addCopyItem(id)}>
					<Item leftIcon={<IconFiles size={18} />} name="Copy" />
				</ContextMenuItem>

				<ContextMenuItem onClick={() => setIsRenameFileModal(true)}>
					<Item leftIcon={<IconEdit size={18} />} name="Rename" />
				</ContextMenuItem>
				<ContextMenuItem
					onClick={() => setIsDeleteFileModal(true)}
					css={styles.danger}>
					<Item leftIcon={<IconTrash size={18} />} name="Delete" danger />
				</ContextMenuItem>
			</ContextMenu>

			{isDeleteFileModal && (
				<DeleteFileModal
					projectId={projectId}
					isDirectory={isDirectory}
					fileId={id}
					show={isDeleteFileModal}
					onCancel={() => setIsDeleteFileModal(false)}
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
