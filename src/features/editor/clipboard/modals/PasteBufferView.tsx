import { BaseModal } from '@/lib/components/modal/BaseModal';
import { Main } from '@/features/editor/clipboard/components/Main';

interface Props {
  show: boolean;
  cutPaths: string[];
  copyPaths: string[];
  onCancel: () => void;
  paths: string[];
}

export function PasteBufferView({
	show,
	cutPaths,
	copyPaths,
	onCancel,
}: Props) {
	return (
		<>
			{show && (
				<BaseModal size="xl" show={show} onCancel={onCancel}>
					<Main cutPaths={cutPaths} copyPaths={copyPaths} />
				</BaseModal>
			)}
		</>
	);
}
