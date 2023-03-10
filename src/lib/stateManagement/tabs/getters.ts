import { useRecoilValue } from 'recoil';
import { tabsSelector } from '@/lib/stateManagement/tabs/atoms';

export function useGetTabs() {
	return useRecoilValue(tabsSelector);
}
