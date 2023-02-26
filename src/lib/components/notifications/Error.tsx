import { Notification, NotificationProps } from '@mantine/core';
import { IconX } from '@tabler/icons';

export function Error({...rest}: NotificationProps) {
	return <Notification icon={<IconX size={18} />} color="red" title="Something went wrong" {...rest}>
		Please, try again later.
	</Notification>;
}