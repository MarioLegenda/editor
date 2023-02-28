import * as styles from '@/styles/editor/explorer/fileExplorer/File.styles';
import { LanguageIcon } from '@/lib/components/LanguageIcon';

interface Props {
  item: File;
	isRoot: boolean;
}

export function File({item, isRoot = false}: Props) {
	return <div css={styles.root}>
		<div css={[styles.content, styles.move(isRoot ? 5 : 2)]}>
			<LanguageIcon fileType={item.file_type} />

			<p>{item.name}</p>
		</div>
	</div>;
}