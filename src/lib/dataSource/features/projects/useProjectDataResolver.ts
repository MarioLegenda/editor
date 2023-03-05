import { useProjectSlug } from '@/lib/helpers/useProjectSlug';
import { useGetProjectAndFiles } from '@/lib/dataSource/features/projects/useGetProjectAndFiles';
import { useEffect } from 'react';
import {
  useSetFilesystem,
  useSetProject,
  useSetRootFile,
} from '@/lib/stateManagement/project/setters';
import { isProject } from '@/lib/dataSource/features/projects/check/isProject';
import { isFileListing } from '@/lib/dataSource/features/fileSystem/check/isFileListing';
import { isFile } from '@/lib/dataSource/features/fileSystem/check/isFile';

export function useProjectDataResolver() {
  const projectId = useProjectSlug();
  const { isLoading, data, isError } = useGetProjectAndFiles(projectId);
  const setProject = useSetProject();
  const setFiles = useSetFilesystem();
  const setRootFile = useSetRootFile();

  useEffect(() => {
    if (!isLoading && data) {
      for (const q of data) {
        if (isProject(q)) {
          setProject(q);
        }

        if (isFileListing(q)) {
          const root = q.filter((file) => file.parent === projectId);

          if (root.length !== 0 && isFile(root[0])) {
            setRootFile(root[0].id);
          }

          setFiles(q);
        }
      }
    }
  }, [data, isLoading]);

  return {
    notFound: isError,
    isLoading: isLoading,
  };
}
