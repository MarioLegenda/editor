import { BaseModal } from '@/lib/components/modal/BaseModal';
import { Main } from '@/features/editor/clipboard/components/Main';

interface Props {
  show: boolean;
  onCancel: () => void;
  paths: string[];
}

export function PasteBufferView({ show, onCancel }: Props) {
	return (
		<>
			{show && (
				<BaseModal size="xl" show={show} onCancel={onCancel}>
					<Main />
				</BaseModal>
			)}
		</>
	);
}
