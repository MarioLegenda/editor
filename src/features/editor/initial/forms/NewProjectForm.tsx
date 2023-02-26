import { Button, Group, Textarea, TextInput } from '@mantine/core';

import * as styles from '@/styles/editor/initial/NewProjectForm.styles';
import { useForm } from '@mantine/form';
import { combine } from '@/lib/validation/combine';
import { required } from '@/lib/validation/required';
import { min } from '@/lib/validation/min';
import { max } from '@/lib/validation/max';
import { useCreateProject } from '@/lib/dataSource/projects/useCreateProject';
import { useEffect } from 'react';
import { Error } from '@/lib/components/notifications/Error';

interface Props {
	onCancel: () => void;
}

export function NewProjectForm({onCancel}: Props) {
	const {mutation: {isLoading, isSuccess, isError}, createProject} = useCreateProject();

	useEffect(() => {
		if (!isLoading && isSuccess) {
			onCancel();
		}
	}, [isLoading, isSuccess]);

	const form = useForm({
		validateInputOnChange: true,
		initialValues: {
			name: '',
			description: '',
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

	return <form onSubmit={form.onSubmit(createProject)}>
		<h1 css={styles.heading}>CREATE NEW PROJECT</h1>

		{isError && <div css={styles.row}><Error disallowClose /></div>}

		<div css={styles.row}>
			<TextInput withAsterisk name="name" placeholder="Name" {...form.getInputProps('name')}
			/>
		</div>

		<div css={styles.row}>
			<Textarea name="description" autosize minRows={3} placeholder="Description (max 200 chars)" {...form.getInputProps('description')}
			/>
		</div>

		<Group position="right" mt="lg">
			<Button onClick={onCancel} type="button" size="md" variant="light" color="gray">
				Cancel
			</Button>

			<Button type="submit" size="md" color="blue">
				Create
			</Button>
		</Group>
	</form>;
}