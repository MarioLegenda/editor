import { useForm } from '@mantine/form';
import { combine, max, min, required } from '@/lib/validation/validations';
import * as formStyles from '@/styles/shared/Form.styles';
import { Button, Group, TextInput } from '@mantine/core';
import { FileMetadata } from '@/features/editor/explorer/helpers/FileMetadata';
import { useFilesystem } from '@/lib/stateManagement/project/getters';
import { LanguageIcon } from '@/lib/components/LanguageIcon';
import { useEffect } from 'react';
import { isFile } from '@/lib/dataSource/features/fileSystem/check/isFile';
import { useRenameFile } from '@/lib/dataSource/features/fileSystem/useRenameFile';
import { RenamedFileSubscriber } from '@/lib/stateManagement/eventSubscriber/RenamedFileSubscriber';
import { SelectedTabSubscriber } from '@/lib/stateManagement/eventSubscriber/SelectedTabSubscriber';
import { createSelectedTabTopic } from '@/lib/stateManagement/eventSubscriber/keys/createSelectedTabTopic';
import {
  useUpdateHistory,
  useUpdateTab,
} from '@/lib/stateManagement/tabs/setters';
import { createRenamedFileTopic } from '@/lib/stateManagement/eventSubscriber/keys/createRenamedFileTopic';

interface Props {
  fileType: FileType;
  fileId: string;
  parent: string;
  value: string;
  onCancel: () => void;
  projectId: string;
}

export function RenameFileForm({
  fileType,
  value,
  fileId,
  onCancel,
  projectId,
  parent,
}: Props) {
  const {
    mutation: { isLoading, isSuccess, data },
    renameFile,
  } = useRenameFile(projectId);
  const files = useFilesystem();
  const updateHistory = useUpdateHistory();
  const updateTabs = useUpdateTab();

  useEffect(() => {
    if (isSuccess && data && isFile(data)) {
      RenamedFileSubscriber.create().publish(
        createRenamedFileTopic(fileId, false),
        data.name,
      );
      const tab = {
        id: data.id,
        name: data.name,
        projectId: data.project_id,
        userId: data.user_id,
        parent: data.parent,
        fileType: data.file_type,
        fileExtension: data.file_extension,
      };
      SelectedTabSubscriber.create().publish(
        createSelectedTabTopic(fileId),
        tab,
      );
      updateHistory(tab);
      updateTabs(tab);

      onCancel();
    }
  }, [isSuccess, data]);

  const form = useForm({
    initialValues: {
      name: value,
    },
    validate: {
      name: (value: string) => {
        const errors = combine(
          [
            required('File name is required'),
            min(1, 'File name cannot have less than 1 character'),
            max(100, 'File name cannot have more than 100 characters'),
          ],
          value,
        );

        if (errors) return errors[0];

        const fileMetadata = FileMetadata.create(value, fileType);

        const invalid = fileMetadata.validate();
        if (invalid) {
          return invalid;
        }

        for (const file of files) {
          if (
            file.parent === parent &&
            file.name === fileMetadata.derivedOriginal() &&
            !file.is_directory
          ) {
            return `File with name ${fileMetadata.derivedOriginal()} already exists`;
          }
        }

        return null;
      },
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        const fileMetadata = FileMetadata.create(values.name, fileType);

        renameFile({
          name: fileMetadata.derivedOriginal(),
          projectId: projectId,
          id: fileId,
        });
      })}>
      <>
        <div css={formStyles.spacing}>
          <TextInput
            icon={<LanguageIcon fileType={fileType} />}
            data-autofocus
            withAsterisk
            name="name"
            placeholder="Name"
            {...form.getInputProps('name')}
          />
        </div>

        <Group position="right" mt="lg">
          <Button
            onClick={onCancel}
            type="button"
            size="md"
            variant="light"
            color="gray">
            Cancel
          </Button>

          <Button loading={isLoading} type="submit" size="md" color="blue">
            Rename
          </Button>
        </Group>
      </>
    </form>
  );
}
