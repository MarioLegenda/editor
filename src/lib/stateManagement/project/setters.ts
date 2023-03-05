import { useSetRecoilState } from 'recoil';
import {
  fileSystemAtom,
  projectAtom,
  projectTotalAtom,
  rootFileAtom,
} from '@/lib/stateManagement/project/atoms';

export function useSetTotal() {
  return useSetRecoilState(projectTotalAtom);
}

export function useSetFilesystem() {
  return useSetRecoilState(fileSystemAtom);
}

export function useSetProject() {
  return useSetRecoilState(projectAtom);
}

export function useSetRootFile() {
  return useSetRecoilState(rootFileAtom);
}
