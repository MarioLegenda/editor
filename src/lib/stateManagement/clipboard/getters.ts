import { useRecoilValue } from 'recoil';
import {
	copyBufferAtom,
	cutBufferAtom,
} from '@/lib/stateManagement/clipboard/atoms';

export function useGetCutBuffer() {
	return useRecoilValue(cutBufferAtom);
}
export function useGetCopyBuffer() {
	return useRecoilValue(copyBufferAtom);
}

export function useIsBufferEmpty() {
	const copy = useGetCopyBuffer();
	const cut = useGetCutBuffer();

	return copy.length === 0 && cut.length === 0;
}
