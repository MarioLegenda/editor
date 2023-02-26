import { Center, Loader, Notification } from '@mantine/core';
import { IconX } from '@tabler/icons';

export default function Index() {
	return <Center style={{width: '100%', height: '100vh'}}>
		<div><Loader size="xl" /></div>
		<Notification icon={<IconX />} color="red">
			Something went wrong. Please, try again later.
		</Notification>
	</Center>;
}