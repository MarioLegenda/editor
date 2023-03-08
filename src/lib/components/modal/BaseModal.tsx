import { PropsWithChildren } from 'react';
import { Modal, useMantineTheme } from '@mantine/core';

interface Props extends PropsWithChildren {
  show: boolean;
  onCancel: () => void;
  size?: string | number;
}

export function BaseModal({ children, show, onCancel, size = 'sm' }: Props) {
	const theme = useMantineTheme();

	return (
		<Modal
			centered
			opened={show}
			closeButtonLabel="Close dialog"
			transition="fade"
			transitionDuration={600}
			transitionTimingFunction="ease"
			onClose={onCancel}
			size={size}
			overlayColor={
				theme.colorScheme === 'dark'
					? theme.colors.dark[9]
					: theme.colors.gray[2]
			}
			overlayOpacity={0.55}
			overlayBlur={3}>
			{children}
		</Modal>
	);
}
