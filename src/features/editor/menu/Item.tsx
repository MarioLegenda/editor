import * as styles from '@/styles/menu/Item.styles';
import { Button, Menu, Loader } from '@mantine/core';
import { IconLogout } from '@tabler/icons';
import { useSignOut } from '@/lib/dataSource/features/auth/useSignOut';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { showNotification } from '@mantine/notifications';

interface Props {
  name: string;
}

export function Item({ name }: Props) {
	const {
		mutation: { isLoading, isError, isSuccess },
		signOut,
	} = useSignOut();
	const { push } = useRouter();

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
				message:
          'We are sorry but we cannot log you out at this time. Please, try again later.',
				autoClose: 10000,
			});
		}
	}, [isError]);

	return (
		<div css={styles.root}>
			<Menu>
				<Menu.Target>
					<Button
						css={styles.buttonFix}
						compact
						color="gray"
						size="md"
						variant="subtle">
						{name}
					</Button>
				</Menu.Target>

				<Menu.Dropdown>
					<Menu.Item>New</Menu.Item>

					<Menu.Divider />

					<Menu.Item
						onClick={signOut}
						icon={isLoading ? <Loader size={14} /> : <IconLogout size={14} />}
						color="white">
            Sign out
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</div>
	);
}
