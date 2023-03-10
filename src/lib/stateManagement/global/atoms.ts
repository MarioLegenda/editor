import { atom } from 'recoil';
import { Global } from '@/lib/stateManagement/types/global';

export const stateIndicatorAtom = atom<GlobalStateIndicator>({
  key: Global.STATE_INDICATOR,
  default: 'idle',
});
