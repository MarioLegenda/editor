import { BaseModal } from '@/lib/components/modal/BaseModal';
import { DeleteFileForm } from '@/features/editor/explorer/forms/DeleteFileForm';

interface Props {
  projectId: string;
  fileId: string;
  show: boolean;
  onCancel: () => void;
}

export function DeleteFileModal({projectId, show, onCancel, fileId}: Props) {
	return <>
		{show && <BaseModal show={show} onCancel={onCancel}>
			<DeleteFileForm projectId={projectId} fileId={fileId} onCancel={onCancel} />
		</BaseModal>}
	</>;
}