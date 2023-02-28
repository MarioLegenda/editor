import { Modal, useMantineTheme } from '@mantine/core';
import { EditProjectForm } from '@/features/projects/forms/EditProjectForm';

interface Props {
  item: EditProject;
  id: string;
  show: boolean;
  onCancel: () => void;
  onDone: (item: EditProject) => void;
}

export function EditProjectModal({show, onCancel, item, id, onDone}: Props) {
	const theme = useMantineTheme();

	return <>
		{show && <Modal
			centered
			opened={show}
			onClose={onCancel}
			overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
			overlayOpacity={0.55}
			overlayBlur={3}
		>
			<EditProjectForm item={item} id={id} onCancel={onCancel} onDone={onDone} />
		</Modal>}
	</>;
}