import * as styles from '@/styles/editor/explorer/fileExplorer/Directory.styles';

interface Props {
  directory: File;
}

export function Directory({directory}: Props) {
	return <div css={styles.root}></div>;
}