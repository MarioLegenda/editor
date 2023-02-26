import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import * as styles from '@/styles/shared/Form.styles';
import { z } from 'zod';
import { useSignIn } from '@/lib/dataSource/auth/useSignIn';
import { useEffect } from 'react';

export function Form() {
	const {
		mutation: {isLoading, isError},
		signIn,
	} = useSignIn();

	useEffect(() => {
		if (!isLoading && !isError) {
			// store jwt/refresh tokens to cookie
			// update local storage with user and session
			// store user to state
			// redirect to editor
		}
	}, [isLoading, isError]);

	const form = useForm({
		validateInputOnChange: true,
		initialValues: {
			email: '',
			password: '',
		},

		validate: {
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

	return <form onSubmit={form.onSubmit(signIn)}>
		<TextInput
			css={styles.spacing}
			withAsterisk
			type="text"
			label="Email"
			placeholder="your@email.com"
			{...form.getInputProps('email')}
		/>

		<TextInput
			withAsterisk
			type="password"
			label="Password"
			placeholder="Your password"
			{...form.getInputProps('password')}
		/>

		<Group position="right" mt="md">
			<Button type="submit" disabled={isLoading} loading={isLoading}>Sign up</Button>
		</Group>
	</form>;
}