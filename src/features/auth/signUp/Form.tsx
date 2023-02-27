import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import * as styles from '@/styles/shared/Form.styles';
import { z } from 'zod';
import { combine, required, max, min } from '@/lib/validation/validations';
import { useSignUp } from '@/lib/dataSource/auth/useSignUp';
import { useEffect, useState } from 'react';

interface Props {
	onSuccess: () => void;
	onError: () => void;
}

export function Form({onSuccess, onError}: Props) {
	const {
		mutation: {isLoading, isError, isSuccess},
		signUp,
	} = useSignUp();

	const [isFormDisabled, setIsFormDisabled] = useState(false);

	useEffect(() => {
		if (!isLoading && !isError && isSuccess) {
			setIsFormDisabled(true);
			onSuccess();
			// store jwt/refresh tokens to cookie
			// update local storage with user and session
			// store user to state
			// redirect to editor
		}

		if (isError) {
			onError();
		}
	}, [isLoading, isError]);

	const form = useForm({
		validateInputOnChange: true,
		initialValues: {
			name: '',
			lastName: '',
			email: '',
			password: '',
		},

		validate: {
			name: (value) => {
				const errors =  combine([
					required('Name is required'),
					min(1, 'Name cannot have less than 1 character'),
					max(100, 'Name cannot have more than 100 characters'),
				], value);

				if (errors) return errors[0];

				return null;
			},
			lastName: (value) => {
				const errors =  combine([
					required('Last name is required'),
					min(1, 'Last name cannot have less than 1 character'),
					max(100, 'Last name cannot have more than 100 characters'),
				], value);

				if (errors) return errors[0];

				return null;
			},
			email: (value) => {
				const schema = z.string().email();

				if (!schema.safeParse(value).success) {
					return 'Email is invalid';
				}

				return null;
			},
			password: (value) => !value,
		},
	});

	return <form onSubmit={form.onSubmit(signUp)}>
		<TextInput
			css={styles.spacing}
			disabled={isFormDisabled}
			withAsterisk
			type="text"
			label="Name"
			placeholder="Your name..."
			{...form.getInputProps('name')}
		/>

		<TextInput
			css={styles.spacing}
			disabled={isFormDisabled}
			withAsterisk
			type="text"
			label="Last name"
			placeholder="Your last name..."
			{...form.getInputProps('lastName')}
		/>

		<TextInput
			css={styles.spacing}
			withAsterisk
			disabled={isFormDisabled}
			type="text"
			label="Email"
			placeholder="your@email.com"
			{...form.getInputProps('email')}
		/>

		<TextInput
			withAsterisk
			disabled={isFormDisabled}
			type="password"
			label="Password"
			placeholder="Your password"
			{...form.getInputProps('password')}
		/>

		<Group position="right" mt="md">
			<Button type="submit" disabled={isLoading || isFormDisabled} loading={isLoading}>Sign up</Button>
		</Group>
	</form>;
}