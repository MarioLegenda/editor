import { atom } from 'recoil';
import { Tabs } from '@/lib/stateManagement/types/tabs';

export const tabsListingAtom = atom<Tab[]>({
	key: Tabs.LISTING,
	default: [],
});
