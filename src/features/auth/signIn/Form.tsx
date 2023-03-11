import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import * as styles from '@/styles/shared/Form.styles';
import { z } from 'zod';
import { useSignIn } from '@/lib/dataSource/features/auth/useSignIn';
import { useEffect } from 'react';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';
import { ErrorCodes } from '@/lib/dataSource/error/errorCodes';
import { Error } from '@/lib/components/notifications/Error';

export function Form() {
	const {
		mutation: { isLoading, isError, error },
		signIn,
	} = useSignIn();

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

	useEffect(() => {
		if (
			isError &&
      (error as DataSourceError<AppError>).data.code === ErrorCodes.AUTH_ERROR
		) {
			form.setFieldError('email', 'Email or password are invalid.');
		}
	}, [isError, error]);

	return (
		<form onSubmit={form.onSubmit(signIn)}>
			<>
				{error &&
          (error as DataSourceError<AppError>).data.code !==
            ErrorCodes.AUTH_ERROR && (
					<Error disallowClose css={styles.spacing} />
				)}
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
					<Button type="submit" disabled={isLoading} loading={isLoading}>
            Sign in
					</Button>
				</Group>
			</>
		</form>
	);
}
