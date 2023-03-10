import { BaseModal } from '@/lib/components/modal/BaseModal';
import { CreateDirectoryForm } from '@/features/editor/explorer/forms/CreateDirectoryForm';

interface Props {
  projectId: string;
  parent: string;
  show: boolean;
  onCancel: () => void;
}

export function CreateDirectoryModal({
  projectId,
  show,
  onCancel,
  parent,
}: Props) {
  return (
    <>
      {show && (
        <BaseModal show={show} onCancel={onCancel}>
          <CreateDirectoryForm
            parent={parent}
            projectId={projectId}
            onCancel={onCancel}
          />
        </BaseModal>
      )}
    </>
  );
}
