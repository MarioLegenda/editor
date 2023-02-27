import { Button, Group, Textarea, TextInput } from '@mantine/core';

import * as formStyles from '@/styles/shared/Form.styles';
import { useForm } from '@mantine/form';
import { combine } from '@/lib/validation/combine';
import { required } from '@/lib/validation/required';
import { min } from '@/lib/validation/min';
import { max } from '@/lib/validation/max';
import { useEffect } from 'react';
import { Error } from '@/lib/components/notifications/Error';
import { useEditProject } from '@/lib/dataSource/projects/useEditProject';

interface Props {
	onCancel: () => void;
	item: EditProject;
	id: string;
}

export function EditProjectForm({onCancel, item, id}: Props) {
	const {mutation: {isLoading, isSuccess, isError}, editProject} = useEditProject(id);

	useEffect(() => {
		if (!isLoading && isSuccess) {
			onCancel();
		}
	}, [isLoading, isSuccess]);

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

	return <form onSubmit={form.onSubmit(editProject)}>
		{isError && <div css={formStyles.spacing}><Error disallowClose /></div>}

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
	</form>;
}