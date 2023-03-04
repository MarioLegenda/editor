import { Directory } from '@/features/editor/explorer/components/fileExplorer/Directory';
import { File } from '@/features/editor/explorer/components/fileExplorer/File';

interface Props {
  files: AppFile[];
  isRoot: boolean;
  childSpace: number;
}

export function FileListing({ files, isRoot = false, childSpace }: Props) {
	return (
		<div>
			{files.map((file) =>
				file.is_directory ? (
					<Directory
						childSpace={childSpace}
						isRoot={isRoot}
						key={file.id}
						item={file}
					/>
				) : (
					<File
						childSpace={childSpace}
						isRoot={isRoot}
						key={file.id}
						item={file}
					/>
				),
			)}
		</div>
	);
}
