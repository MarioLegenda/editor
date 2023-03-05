import { CreateFileForm } from '@/features/editor/explorer/forms/CreateFileForm';
import { BaseModal } from '@/lib/components/modal/BaseModal';

interface Props {
  projectId: string;
  parent: string;
  fileType: FileType;
  show: boolean;
  onCancel: () => void;
}

export function CreateFileModal({
	projectId,
	show,
	onCancel,
	fileType,
	parent,
}: Props) {
	return (
		<>
			{show && (
				<BaseModal show={show} onCancel={onCancel}>
					<CreateFileForm
						parent={parent}
						projectId={projectId}
						fileType={fileType}
						onCancel={onCancel}
					/>
				</BaseModal>
			)}
		</>
	);
}
