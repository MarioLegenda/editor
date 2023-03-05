import { useRecoilValue } from 'recoil';
import { useCallback } from 'react';
import {
  fileSystemAtom,
  parentFileStructureSelectorFamily,
  projectAtom,
  projectTotalAtom,
  rootFileAtom,
} from '@/lib/stateManagement/project/atoms';

export function useTotal() {
  const total = useRecoilValue(projectTotalAtom);

  return useCallback(() => total, [total]);
}

export function useProject() {
  return useRecoilValue(projectAtom) as Project;
}

export function useFilesystem() {
  return useRecoilValue(fileSystemAtom);
}

export function useRootFile() {
  return useRecoilValue(rootFileAtom) as string;
}

export function useParentFiles(parentId: string) {
  return useRecoilValue(parentFileStructureSelectorFamily(parentId));
}
