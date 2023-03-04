import { BaseModal } from '@/lib/components/modal/BaseModal';
import { DeleteProjectForm } from '@/features/projects/forms/DeleteProjectForm';

interface Props {
  projectName: string;
  id: string;
  userId: string;
  show: boolean;
  onCancel: () => void;
  onDeleted: () => void;
}

export function DeleteProjectModal({
	show,
	onCancel,
	projectName,
	id,
	userId,
	onDeleted,
}: Props) {
	return (
		<>
			{show && (
				<BaseModal show={show} onCancel={onCancel}>
					<DeleteProjectForm
						projectName={projectName}
						id={id}
						userId={userId}
						onCancel={onCancel}
						onDeleted={onDeleted}
					/>
				</BaseModal>
			)}
		</>
	);
}
