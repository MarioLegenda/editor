import * as styles from '@/styles/editor/initial/Item.styles';
import { Link } from 'react-router-dom';
import { Avatar, Button, Menu } from '@mantine/core';
import { IconDots, IconTrash, IconEdit } from '@tabler/icons';
import { useState } from 'react';
import { EditProjectForm } from '@/features/editor/initial/forms/EditProjectForm';
import { DeleteProjectModal } from '@/features/editor/modals/DeleteProjectModal';

interface Props {
	item: Project;
	onDelete: (id: string) => void;
}

export function Item({item, onDelete}: Props) {
	const [isEdit, setIsEdit] = useState(false);
	const [isDelete, setIsDelete] = useState(false);

	return <Link to="" css={[styles.root, isEdit ? styles.highlightItem : undefined]}>
		<div css={styles.content}>
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
						<Menu.Item onClick={() => setIsEdit(true)} icon={<IconEdit size={14} />}>Edit</Menu.Item>

						<Menu.Divider />

						<Menu.Item onClick={() => setIsDelete(true)} color="red" icon={<IconTrash size={14} />}>Remove</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			</div>
		</div>

		<DeleteProjectModal
			id={item.id}
			userId={item.user_id}
			projectName={item.name}
			show={isDelete}
			onCancel={() => setIsDelete(false)}
			onDeleted={() => {
				onDelete(item.id);
				setIsDelete(false);
			}}
		/>

		{isEdit && <div css={styles.editForm}>
			<EditProjectForm onCancel={() => setIsEdit(false)} item={item} id={item.id} />
		</div>}
	</Link>;
}