import * as styles from '@/styles/editor/initial/Item.styles';
import { Link } from 'react-router-dom';
import { Avatar, Button, Menu } from '@mantine/core';
import { IconDots, IconTrash, IconEdit } from '@tabler/icons';

interface Props {
	item: Project;
}

export function Item({item}: Props) {
	return <Link to="" css={[styles.root]}>
		<Avatar css={styles.avatarBackground(item.color)} radius="xl">{item.name.substring(0, 1).toUpperCase()}</Avatar>
		<div css={styles.item}>
			<h3>{item.name}</h3>

			<p>{item.description}</p>
		</div>

		<div css={styles.menu}>
			<Menu width={200} position="bottom-end" withArrow transition="skew-down" transitionDuration={100}>
				<Menu.Target>
					<Button color="white" variant="subtle"><IconDots color="white" /></Button>
				</Menu.Target>

				<Menu.Dropdown>
					<Menu.Item icon={<IconEdit size={14} />}>Edit</Menu.Item>

					<Menu.Divider />

					<Menu.Item color="red" icon={<IconTrash size={14} />}>Remove</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</div>
	</Link>;
}