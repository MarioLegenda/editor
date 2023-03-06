import * as styles from '@/styles/filePath/Main.styles';
import { IconSquare } from '@tabler/icons';
import {
	useGetFilePath,
	useProject,
} from '@/lib/stateManagement/project/getters';
import { Path } from '@/features/filePath/Path';
import { useEffect, useState } from 'react';
import { SelectedFileSubscriber } from '@/lib/stateManagement/eventSubscriber/SelectedFileSubscriber';
import { isFile } from '@/lib/dataSource/features/fileSystem/check/isFile';

export function Main() {
	const project = useProject();
	const [paths, setPaths] = useState<Path[]>([]);

	const getFilePath = useGetFilePath();

	useEffect(() => {
		SelectedFileSubscriber.create().subscribe('selected_file', (msg, file) => {
			const id = isFile(file) ? file.id : (file as string);
			if (id) {
				getFilePath(id, project.id).then((paths) => {
					if (paths) {
						setPaths(paths);
					}
				});
			}
		});
	}, []);

	return (
		<div css={styles.root}>
			<div css={styles.rootItem}>
				<IconSquare size={14} color="var(--color-primary)" />
				{project.name}
			</div>

			{paths.map((item, i) => (
				<Path
					key={i}
					name={item.name}
					fileType={item.fileType}
					isDirectory={item.isDirectory}
				/>
			))}
		</div>
	);
}
