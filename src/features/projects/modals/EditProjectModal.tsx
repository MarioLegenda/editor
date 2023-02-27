import { Button, Group, Modal, Textarea, TextInput, useMantineTheme } from '@mantine/core';

import * as formStyles from '@/styles/shared/Form.styles';
import { useForm } from '@mantine/form';
import { combine, required, min, max } from '@/lib/validation/validations';
import { useEffect } from 'react';
import { Error } from '@/lib/components/notifications/Error';
import { useEditProject } from '@/lib/dataSource/projects/useEditProject';
import * as styles from '@/styles/editor/modals/DeleteProjectModal.styles';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';
import { ErrorCodes } from '@/lib/dataSource/error/errorCodes';

interface Props {
  item: EditProject;
  id: string;
  show: boolean;
  onCancel: () => void;
  onDone: (item: EditProject) => void;
}

export function EditProjectModal({show, onCancel, item, id, onDone}: Props) {
	const theme = useMantineTheme();
	const {mutation: {isLoading, isSuccess, isError, data, error}, editProject} = useEditProject(id);

	const form = useForm({
		validateInputOnChange: true,
		initialValues: {
			name: item.name,
			description: item.description,
		},
		validate: {
			name: (value: string) => {
				const errors =  combine([
					required('Name is required'),
					min(1, 'Name cannot have less than 1 character'),
					max(100, 'Name cannot have more than 100 characters'),
				], value);

				if (errors) return errors[0];

				return null;
			},
			description: (value: string) => {
				const errors =  combine([
					max(200, 'Description cannot have more than 200 characters'),
				], value);

				if (errors) return errors[0];

				return null;
			},
		}
	});

	useEffect(() => {
		if (error && (error as DataSourceError<AppError>).data.code === ErrorCodes.ENTRY_EXISTS) {
			form.setFieldError('name', 'Project with this name already exists.');
		}
	}, [error]);

	useEffect(() => {
		if (!isLoading && isSuccess && data) {
			onDone(data);
		}
	}, [isLoading, isSuccess, data]);

	return <>
		{show && <Modal
			centered
			opened={show}
			onClose={onCancel}
			overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
			overlayOpacity={0.55}
			overlayBlur={3}
		>
			<form onSubmit={form.onSubmit(editProject)}>
				<>
					<h2 css={[styles.heading, formStyles.spacing]}>Edit project <strong>{item.name}</strong></h2>

					{isError && error && (error as DataSourceError<AppError>).data.code !== ErrorCodes.ENTRY_EXISTS && <div css={formStyles.spacing}><Error disallowClose /></div>}

					<div css={formStyles.spacing}>
						<TextInput autoFocus withAsterisk name="name" placeholder="Name" {...form.getInputProps('name')} />
					</div>

					<div css={formStyles.spacing}>
						<Textarea name="description" autosize minRows={3} placeholder="Description (max 200 chars)" {...form.getInputProps('description')} />
					</div>

					<Group position="right" mt="lg">
						<Button onClick={onCancel} type="button" size="md" variant="light" color="gray">
							Cancel
						</Button>

						<Button type="submit" size="md" color="blue">
							Edit
						</Button>
					</Group>
				</>
			</form>
		</Modal>}
	</>;
}