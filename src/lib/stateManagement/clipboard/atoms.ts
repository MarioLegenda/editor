import { atom } from 'recoil';
import { Clipboard } from '@/lib/stateManagement/types/clipboard';

export const cutBufferAtom = atom<ClipboardBufferItem[]>({
  key: Clipboard.CUT_BUFFER,
  default: [],
});

export const copyBufferAtom = atom<ClipboardBufferItem[]>({
  key: Clipboard.COPY_BUFFER,
  default: [],
});
