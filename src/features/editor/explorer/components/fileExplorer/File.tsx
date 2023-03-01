import * as styles from '@/styles/editor/explorer/fileExplorer/File.styles';
import { LanguageIcon } from '@/lib/components/LanguageIcon';
import { useSelectedFile } from '@/lib/stateManagement/project/getters';
import { useSetSelectedFile } from '@/lib/stateManagement/project/setters';

interface Props {
  item: File;
	isRoot: boolean;
	childSpace: number;
}

export function File({item, isRoot = false, childSpace}: Props) {
	const selectedFile = useSelectedFile();
	const setSelectedFile = useSetSelectedFile();
	const nextChildSpace = childSpace + 3;
	
	return <div
		css={[
			styles.root
		]}
		onClick={() => setSelectedFile(item)}>

		<div css={[
			styles.content,
			styles.move(isRoot ? 5 : nextChildSpace),
			selectedFile?.id === item.id ? styles.open : undefined
		]}>
			<LanguageIcon fileType={item.file_type as FileType} />

			<p>{item.name}</p>
		</div>
	</div>;
}