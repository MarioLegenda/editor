import { Notification, NotificationProps } from '@mantine/core';
import { IconCheck } from '@tabler/icons';

interface Props extends NotificationProps {
  title: string;
  message: string;
}

export function Success({ title, message, ...rest }: Props) {
	return (
		<Notification
			icon={<IconCheck size={18} />}
			color="teal"
			title={title}
			{...rest}>
			{message}
		</Notification>
	);
}
