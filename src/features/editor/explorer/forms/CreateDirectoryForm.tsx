import { useForm } from '@mantine/form';
import { combine, max, min, required } from '@/lib/validation/validations';
import * as formStyles from '@/styles/shared/Form.styles';
import { Button, Group, TextInput } from '@mantine/core';
import { useCreateFile } from '@/lib/dataSource/projects/fileSystem/useCreateFile';
import { useRunOnDone } from '@/lib/helpers/forms/useRunOnDone';
import { useFilesystem } from '@/lib/stateManagement/project/getters';
import { IconFolder } from '@tabler/icons';

interface Props {
  parent: string;
  onCancel: () => void;
  projectId: string;
}

export function CreateDirectoryForm({onCancel, projectId, parent}: Props) {
	const {mutation: {isLoading, isSuccess}, createFile} = useCreateFile(projectId);
	useRunOnDone(isLoading, isSuccess, onCancel);
	const files = useFilesystem();

	const form = useForm({
		initialValues: {
			name: '',
		},
		validate: {
			name: (value: string) => {
				const errors =  combine([
					required('File name is required'),
					min(1, 'File name cannot have less than 1 character'),
					max(100, 'File name cannot have more than 100 characters'),
				], value);

				if (errors) return errors[0];

				for (const file of files) {
					if (file.parent === parent && file.is_directory && file.name === value) {
						return `Directory with name ${value} already exists`;
					}
				}

				return null;
			},
		}
	});

	return <form onSubmit={form.onSubmit((values) => {
		createFile({
			name: values.name,
			projectId: projectId,
			parent: parent,
			fileType: null,
			extension: null,
			isDirectory: true,
		});
	})}>
		<>
			<div css={formStyles.spacing}>
				<TextInput icon={<IconFolder size={20} />} data-autofocus withAsterisk name="name" placeholder="Name" {...form.getInputProps('name')} />
			</div>

			<Group position="right" mt="lg">
				<Button onClick={onCancel} type="button" size="md" variant="light" color="gray">
          Cancel
				</Button>

				<Button disabled={isLoading} type="submit" size="md" color="blue">
          Create
				</Button>
			</Group>
		</>
	</form>;
}