import * as styles from '@/styles/editor/initial/Item.styles';
import { Link } from 'react-router-dom';
import { Avatar, Button, Menu } from '@mantine/core';
import { IconDots, IconTrash, IconEdit } from '@tabler/icons';
import { useState } from 'react';
import { DeleteProjectModal } from '@/features/projects/modals/DeleteProjectModal';
import { EditProjectModal } from '@/features/projects/modals/EditProjectModal';

interface Props {
	item: Project;
	onDelete: (id: string) => void;
}

export function Item({item, onDelete}: Props) {
	const [isEdit, setIsEdit] = useState(false);
	const [isDelete, setIsDelete] = useState(false);
	const [internalItem, setInternalItem] = useState(item);

	return <Link to="" css={[styles.root, isEdit ? styles.highlightItem : undefined]}>
		<div css={styles.content}>
			<Avatar css={styles.avatarBackground(internalItem.color)} radius="xl">{internalItem.name.substring(0, 1).toUpperCase()}</Avatar>
			<div css={styles.item}>
				<h3>{internalItem.name}</h3>

				<p>{internalItem.description}</p>
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
			id={internalItem.id}
			userId={internalItem.user_id}
			projectName={internalItem.name}
			show={isDelete}
			onCancel={() => setIsDelete(false)}
			onDeleted={() => {
				onDelete(internalItem.id);
				setIsDelete(false);
			}}
		/>

		<EditProjectModal
			id={internalItem.id}
			item={item}
			show={isEdit}
			onCancel={() => setIsEdit(false)}
			onDone={(editedProject) => {
				setInternalItem((item) => {
					return {
						...item,
						name: editedProject.name,
						description: editedProject.description
					};
				});
				setIsEdit(false);
			}}
		/>
	</Link>;
}