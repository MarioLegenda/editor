import { BaseModal } from '@/lib/components/modal/BaseModal';
import { RenameFileForm } from '@/features/editor/explorer/forms/RenameFileForm';

interface Props {
  projectId: string;
  fileId: string;
  show: boolean;
  parent: string;
  fileType: FileType;
  value: string;
  onCancel: () => void;
}

export function RenameFileModal({
  projectId,
  fileType,
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
          <RenameFileForm
            parent={parent}
            value={value}
            fileType={fileType}
            projectId={projectId}
            fileId={fileId}
            onCancel={onCancel}
          />
        </BaseModal>
      )}
    </>
  );
}
