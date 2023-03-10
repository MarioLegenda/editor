import { useSetRecoilState } from 'recoil';
import { stateIndicatorAtom } from '@/lib/stateManagement/global/atoms';

export function useSetStateIndicator() {
  return useSetRecoilState(stateIndicatorAtom);
}
