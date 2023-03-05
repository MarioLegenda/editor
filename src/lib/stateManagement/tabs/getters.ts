import { useRecoilValue } from 'recoil';
import { tabsListingAtom } from '@/lib/stateManagement/tabs/atoms';

export function useGetTabs() {
	return useRecoilValue(tabsListingAtom);
}
