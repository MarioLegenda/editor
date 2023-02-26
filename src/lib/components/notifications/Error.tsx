import { Notification } from '@mantine/core';
import { IconX } from '@tabler/icons';

export function Error() {
	return <Notification icon={<IconX size={18} />} color="red" title="Something went wrong">
		Please, try again later.
	</Notification>;
}