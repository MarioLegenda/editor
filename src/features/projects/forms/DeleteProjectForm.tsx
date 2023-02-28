import * as styles from '@/styles/editor/modals/DeleteProjectModal.styles';
import * as formStyles from '@/styles/shared/Form.styles';
import { Error } from '@/lib/components/notifications/Error';
import { Button, Group, TextInput } from '@mantine/core';
import { useDeleteProject } from '@/lib/dataSource/projects/useDeleteProject';
import { useRunOnDone } from '@/lib/helpers/forms/useRunOnDone';
import { useForm } from '@mantine/form';
import { combine, max, min, required } from '@/lib/validation/validations';
import { useCallback } from 'react';

interface Props {
  projectName: string;
  id: string;
  userId: string;
  onCancel: () => void;
  onDeleted: () => void;
}

export function DeleteProjectForm({projectName, id, userId, onDeleted, onCancel}: Props) {
	const {mutation: {isLoading, isSuccess, isError}, deleteProject} = useDeleteProject(id, userId);
	useRunOnDone(isLoading, isSuccess, onDeleted);

	const form = useForm({
		initialValues: {
			name: '',
		},
		validate: {
			name: (value: string) => {
				const errors =  combine([
					required('Name is required'),
					min(1, 'Name cannot have less than 1 character'),
					max(100, 'Name cannot have more than 100 characters'),
				], value || '');

				if (errors) return errors[0];

				if (value !== projectName) {
					return 'Provided name does not match the name of the project';
				}

				return null;
			},
		}
	});

	const onDeleteProject = useCallback(() => {
		deleteProject({
			id: id,
			userId: userId,
		});
	}, []);

	return <>
		<h2 css={[styles.heading, formStyles.spacing]}>Are you sure you which to delete this project?</h2>

		<p css={formStyles.spacing}>This action is permanent. Please, type in your <strong css={styles.projectName}>{projectName}</strong> below just to be sure.</p>

		<form onSubmit={form.onSubmit(onDeleteProject)}>
			{isError && <div css={formStyles.spacing}>
				<Error />
			</div>}

			<div css={formStyles.spacing}>
				<TextInput autoFocus name="name" placeholder="Name" {...form.getInputProps('name')} />
			</div>

			<Group position="right" mt="lg">
				<Button onClick={onCancel} type="button" size="md" variant="light" color="gray">
          Cancel
				</Button>

				<Button disabled={isLoading || !form.isValid('name')} type="submit" size="md" color="red">
          Delete
				</Button>
			</Group>
		</form>
	</>;
}