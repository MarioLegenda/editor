import { BaseModal } from '@/lib/components/modal/BaseModal';
import { RenameDirectoryForm } from '@/features/editor/explorer/forms/RenameDirectoryForm';

interface Props {
  projectId: string;
  fileId: string;
  show: boolean;
  parent: string;
  fileType: FileType;
  value: string;
  onCancel: () => void;
}

export function RenameDirectoryModal({
  projectId,
  show,
  value,
  parent,
  onCancel,
  fileId,
}: Props) {
  return (
    <>
      {show && (
        <BaseModal show={show} onCancel={onCancel}>
          <RenameDirectoryForm
            parent={parent}
            value={value}
            projectId={projectId}
            fileId={fileId}
            onCancel={onCancel}
          />
        </BaseModal>
      )}
    </>
  );
}
