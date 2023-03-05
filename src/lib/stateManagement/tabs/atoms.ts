import { atom, selector } from 'recoil';
import { Tabs } from '@/lib/stateManagement/types/tabs';
import { sortTabsAlphabetically } from '@/lib/stateManagement/sorting/sortTabsAlphabetically';

export const tabsListingAtom = atom<Tab[]>({
	key: Tabs.LISTING,
	default: [],
});

export const tabsHistoryAtom = atom<Tab[]>({
	key: Tabs.TABS_HISTORY,
	default: [],
});

export const tabsSelector = selector({
	key: Tabs.LISTING_SORTED,
	get: ({ get }) => {
		return sortTabsAlphabetically(get(tabsListingAtom));
	},
});
