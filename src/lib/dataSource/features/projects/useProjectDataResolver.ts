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
import { useAddHistory } from '@/lib/stateManagement/tabs/setters';
import { isTabHistory } from '@/lib/dataSource/features/tabs/check/isTabHistory';

export function useProjectDataResolver() {
  const projectId = useProjectSlug();
  const { isLoading, data, isError } = useGetProjectAndFiles(projectId);
  const setProject = useSetProject();
  const setHistory = useAddHistory();
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

        if (isTabHistory(q)) {
          setHistory(q);
        }
      }
    }
  }, [data, isLoading]);

  return {
    notFound: isError,
    isLoading: isLoading,
  };
}
