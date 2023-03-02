import { Button, Group } from '@mantine/core';
import { useRunOnDone } from '@/lib/helpers/forms/useRunOnDone';
import { useSetFilesystem } from '@/lib/stateManagement/project/setters';
import { useDeleteFile } from '@/lib/dataSource/features/fileSystem/useDeleteFile';
import { IconArrowBackUp } from '@tabler/icons';

import * as styles from '@/styles/editor/modals/DeleteFileForm.styles';

interface Props {
  onCancel: () => void;
  projectId: string;
	fileId: string;
}

export function DeleteFileForm({onCancel, projectId, fileId}: Props) {
	const {mutation: {isLoading, isSuccess}, deleteFile} = useDeleteFile(projectId, fileId);
	const setFiles = useSetFilesystem();

	useRunOnDone(isLoading, isSuccess, () => {
		setFiles((files) => files.filter((file) => file.id !== fileId));
		onCancel();
	});

	return <>
		<h3 css={styles.heading}>Are you sure?</h3>

		<p css={styles.description}>You can undo any deletion in the upper left corner by pressing <IconArrowBackUp size={20} /> icon</p>

		<Group position="right" mt="lg">
			<Button onClick={onCancel} type="button" size="md" variant="light" color="gray">
        Cancel
			</Button>

			<Button onClick={() => deleteFile({
				projectId: projectId,
				fileId: fileId,
			})} disabled={isLoading} type="submit" size="md" color="red">
        Delete
			</Button>
		</Group>
	</>;
}