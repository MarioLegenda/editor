import { EditProjectForm } from '@/features/projects/forms/EditProjectForm';
import { BaseModal } from '@/lib/components/modal/BaseModal';

interface Props {
  item: EditProject;
  id: string;
  show: boolean;
  onCancel: () => void;
  onDone: (item: EditProject) => void;
}

export function EditProjectModal({show, onCancel, item, id, onDone}: Props) {
	return <>
		{show && <BaseModal show={show} onCancel={onCancel}>
			<EditProjectForm item={item} id={id} onCancel={onCancel} onDone={onDone} />
		</BaseModal>}
	</>;
}