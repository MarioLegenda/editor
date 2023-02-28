import * as styles from '@/styles/editor/explorer/fileExplorer/File.styles';

interface Props {
  item: File;
}

export function File({item}: Props) {
	return <div css={styles.root}></div>;
}