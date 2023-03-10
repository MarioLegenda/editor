import { useRecoilValue } from 'recoil';
import { stateIndicatorAtom } from '@/lib/stateManagement/global/atoms';

export function useStateIndicator() {
	return useRecoilValue(stateIndicatorAtom);
}
