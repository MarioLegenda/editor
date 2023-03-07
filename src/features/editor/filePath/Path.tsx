import * as styles from '@/styles/filePath/Path.styles';
import { LanguageIcon } from '@/lib/components/LanguageIcon';
import DirClosed from '/public/editor/folderClosed.svg';

interface Props {
  name: string;
  fileType: FileType | null;
  isDirectory: boolean;
}

export function Path({ name, fileType, isDirectory }: Props) {
	return (
		<div css={styles.root}>
			<span css={styles.caret}>/</span>
			<span css={styles.content}>
				{isDirectory ? (
					<DirClosed width={16} />
				) : (
					<LanguageIcon name={name} fileType={fileType} />
				)}
				{name}
			</span>
		</div>
	);
}
