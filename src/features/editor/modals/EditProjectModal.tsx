import { Button, Group, Modal, Textarea, TextInput, useMantineTheme } from '@mantine/core';

import * as formStyles from '@/styles/shared/Form.styles';
import { useForm } from '@mantine/form';
import { combine } from '@/lib/validation/combine';
import { required } from '@/lib/validation/required';
import { min } from '@/lib/validation/min';
import { max } from '@/lib/validation/max';
import { useEffect } from 'react';
import { Error } from '@/lib/components/notifications/Error';
import { useEditProject } from '@/lib/dataSource/projects/useEditProject';
import * as styles from '@/styles/editor/modals/DeleteProjectModal.styles';

interface Props {
  item: EditProject;
  id: string;
  show: boolean;
  onCancel: () => void;
  onDone: (item: EditProject) => void;
}

export function EditProjectModal({show, onCancel, item, id, onDone}: Props) {
	const theme = useMantineTheme();
	const {mutation: {isLoading, isSuccess, isError, data}, editProject} = useEditProject(id);

	useEffect(() => {
		if (!isLoading && isSuccess && data) {
			onDone(data);
		}
	}, [isLoading, isSuccess, data]);

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
				<h2 css={[styles.heading, formStyles.spacing]}>Edit project <strong>{item.name}</strong></h2>

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
			</form>
		</Modal>}
	</>;
}