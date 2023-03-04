import { Button, Group, Textarea, TextInput } from '@mantine/core';

import * as styles from '@/styles/projects/NewProjectForm.styles';
import * as formStyles from '@/styles/shared/Form.styles';
import { useForm } from '@mantine/form';
import { combine, required, min, max } from '@/lib/validation/validations';
import { useCreateProject } from '@/lib/dataSource/features/projects/useCreateProject';
import { useEffect } from 'react';
import { Error } from '@/lib/components/notifications/Error';
import { ErrorCodes } from '@/lib/dataSource/error/errorCodes';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';
import { isProject } from '@/lib/dataSource/features/projects/check/isProject';
import { useNavigate } from 'react-router';

interface Props {
  onCancel: () => void;
}

export function NewProjectForm({ onCancel }: Props) {
	const {
		mutation: { isLoading, isSuccess, isError, error, data },
		createProject,
	} = useCreateProject();
	const navigate = useNavigate();

	const form = useForm({
		validateInputOnChange: true,
		initialValues: {
			name: '',
			description: '',
		},
		validate: {
			name: (value: string) => {
				const errors = combine(
					[
						required('Name is required'),
						min(1, 'Name cannot have less than 1 character'),
						max(100, 'Name cannot have more than 100 characters'),
					],
					value,
				);

				if (errors) return errors[0];

				return null;
			},
			description: (value: string) => {
				const errors = combine(
					[max(200, 'Description cannot have more than 200 characters')],
					value,
				);

				if (errors) return errors[0];

				return null;
			},
		},
	});

	useEffect(() => {
		if (!isLoading && isSuccess && data) {
			if (isProject(data)) {
				navigate(`/editor/project/${data.id}`);
			}
		}
	}, [isLoading, isSuccess, data]);

	useEffect(() => {
		if (
			error &&
      (error as DataSourceError<AppError>).data.code === ErrorCodes.ENTRY_EXISTS
		) {
			form.setFieldError('name', 'Project with this name already exists.');
		}
	}, [error]);

	return (
		<form onSubmit={form.onSubmit(createProject)}>
			<>
				<h1 css={styles.heading}>CREATE NEW PROJECT</h1>

				{isError &&
          error &&
          (error as DataSourceError<AppError>).data.code !==
            ErrorCodes.ENTRY_EXISTS && (
					<div css={formStyles.spacing}>
						<Error disallowClose />
					</div>
				)}

				<div css={formStyles.spacing}>
					<TextInput
						autoFocus
						withAsterisk
						name="name"
						placeholder="Name"
						{...form.getInputProps('name')}
					/>
				</div>

				<div css={formStyles.spacing}>
					<Textarea
						name="description"
						autosize
						minRows={3}
						placeholder="Description (max 200 chars)"
						{...form.getInputProps('description')}
					/>
				</div>

				<Group position="right" mt="lg">
					<Button
						onClick={onCancel}
						type="button"
						size="md"
						variant="light"
						color="gray">
            Cancel
					</Button>

					<Button type="submit" size="md" color="blue">
            Create
					</Button>
				</Group>
			</>
		</form>
	);
}
