import { useForm } from '@mantine/form';
import { combine, max, min, required } from '@/lib/validation/validations';
import * as formStyles from '@/styles/shared/Form.styles';
import { Button, Group, TextInput } from '@mantine/core';
import { useCreateFile } from '@/lib/dataSource/features/fileSystem/useCreateFile';
import { FileMetadata } from '@/features/editor/explorer/helpers/FileMetadata';
import { useFilesystem } from '@/lib/stateManagement/project/getters';
import { LanguageIcon } from '@/lib/components/LanguageIcon';
import { useEffect } from 'react';
import { useSetFilesystem } from '@/lib/stateManagement/project/setters';
import { isFile } from '@/lib/dataSource/features/fileSystem/check/isFile';
import { Subscriber } from '@/lib/stateManagement/eventSubscriber/Subscriber';

interface Props {
  fileType: FileType;
	parent: string;
  onCancel: () => void;
  projectId: string;
}

export function CreateFileForm({fileType, onCancel, projectId, parent}: Props) {
	const {mutation: {isLoading, isSuccess, data}, createFile} = useCreateFile(projectId);
	const files = useFilesystem();
	const setFiles = useSetFilesystem();

	useEffect(() => {
		if (isSuccess && data && isFile(data)) {
			setFiles((files) => [...files, data]);
			Subscriber.create().publish(parent, data.id);
			onCancel();
		}
	}, [isSuccess, data]);

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

				const fileMetadata = FileMetadata.create(value);

				if (fileMetadata.error()) {
					return fileMetadata.error();
				}

				if (fileType !== 'default' && fileMetadata.fileType() !== fileType) {
					return `Invalid extension for ${fileMetadata.upperCaseFileType()}. ${fileMetadata.upperCaseFileType()} must have a '${fileMetadata.extension()}' extension.`;
				}

				for (const file of files) {
					if (file.parent === parent && file.name === fileMetadata.original() && !file.is_directory) {
						return `File with name ${fileMetadata.original()} already exists`;
					}
				}

				return null;
			},
		}
	});

	return <form onSubmit={form.onSubmit((values) => {
		const fileMetadata = FileMetadata.create(values.name);

		createFile({
			name: fileMetadata.original(),
			projectId: projectId,
			parent: parent,
			fileType: fileMetadata.fileType(),
			extension: fileMetadata.extension(),
			isDirectory: false,
		});
	})}>
		<>
			<div css={formStyles.spacing}>
				<TextInput icon={<LanguageIcon fileType={fileType} />} data-autofocus withAsterisk name="name" placeholder="Name" {...form.getInputProps('name')} />
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