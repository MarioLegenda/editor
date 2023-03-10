import { useForm } from '@mantine/form';
import { combine, max, min, required } from '@/lib/validation/validations';
import * as formStyles from '@/styles/shared/Form.styles';
import { Button, Group, TextInput } from '@mantine/core';
import { useRunOnDone } from '@/lib/helpers/forms/useRunOnDone';
import { useFilesystem } from '@/lib/stateManagement/project/getters';
import { IconFolder } from '@tabler/icons';
import { useEffect } from 'react';
import { isFile } from '@/lib/dataSource/features/fileSystem/check/isFile';
import { useUpdateFileName } from '@/lib/stateManagement/project/setters';
import { useRenameFile } from '@/lib/dataSource/features/fileSystem/useRenameFile';
import { RenamedFileSubscriber } from '@/lib/stateManagement/eventSubscriber/RenamedFileSubscriber';
import { createRenamedFileTopic } from '@/lib/stateManagement/eventSubscriber/keys/createRenamedFileTopic';

interface Props {
  value: string;
  fileId: string;
  parent: string;
  onCancel: () => void;
  projectId: string;
}

export function RenameDirectoryForm({
  onCancel,
  projectId,
  parent,
  value,
  fileId,
}: Props) {
  const {
    mutation: { isLoading, isSuccess, data },
    renameFile,
  } = useRenameFile(projectId);
  useRunOnDone(isLoading, isSuccess, onCancel);
  const files = useFilesystem();
  const updateFileName = useUpdateFileName();

  useEffect(() => {
    if (isSuccess && data && isFile(data)) {
      RenamedFileSubscriber.create().publish(
        createRenamedFileTopic(fileId, true),
        data.name,
      );
      updateFileName(data.name, fileId);
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
            required('Directory name is required'),
            min(1, 'Directory name cannot have less than 1 character'),
            max(100, 'Directory name cannot have more than 100 characters'),
          ],
          value,
        );

        if (errors) return errors[0];

        if (
          new RegExp(
            '^[a-zA-Z0-9](?:[a-zA-Z0-9 ._-]*[a-zA-Z0-9])?\\.[a-zA-Z0-9_-]+$',
          ).test(value)
        ) {
          return 'Invalid directory name given. File names can only contain alphanumeric characters. Please, consult this regex expression: ^[a-zA-Z0-9](?:[a-zA-Z0-9 ._-]*[a-zA-Z0-9])?\\.[a-zA-Z0-9_-]+$';
        }

        for (const file of files) {
          if (
            file.parent === parent &&
            file.is_directory &&
            file.name === value
          ) {
            return `Directory with name ${value} already exists`;
          }
        }

        return null;
      },
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        renameFile({
          name: values.name,
          projectId: projectId,
          id: fileId,
        });
      })}>
      <>
        <div css={formStyles.spacing}>
          <TextInput
            icon={<IconFolder size={20} />}
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
            Create
          </Button>
        </Group>
      </>
    </form>
  );
}
