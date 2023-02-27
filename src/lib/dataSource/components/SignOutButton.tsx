import { Button, Loader } from '@mantine/core';
import { IconLogout } from '@tabler/icons';
import { useSignOut } from '@/lib/dataSource/auth/useSignOut';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { showNotification } from '@mantine/notifications';

export function SignOutButton() {
	const {mutation: {isLoading, isError, isSuccess}, signOut} = useSignOut();
	const {push} = useRouter();

	useEffect(() => {
		if (!isLoading && isSuccess) {
			push('/sign-in');
		}
	}, [isSuccess, isLoading]);

	useEffect(() => {
		if (isError) {
			showNotification({
				color: 'red',
				title: 'Something went wrong.',
				message: 'We are sorry but we cannot log you out at this time. Please, try again later.',
				autoClose: 10000,
			});
		}
	}, [isError]);

	return <Button onClick={() => signOut()} leftIcon={
		<>
			{isLoading && <Loader size={14} />}
			{!isLoading && <IconLogout size={14} />}
		</>
	} variant="outline" color="gray">Logout</Button>;

}