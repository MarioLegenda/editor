import { useRecoilCallback } from 'recoil';
import { tabsListingAtom } from '@/lib/stateManagement/tabs/atoms';

export function useAddTab() {
	return useRecoilCallback(
		({ snapshot, set }) =>
			async (tab: Tab) => {
				const tabs = await snapshot.getPromise(tabsListingAtom);

				const idx = tabs.findIndex((item) => item.id === tab.id);

				if (idx === -1) {
					set(tabsListingAtom, [...tabs, tab]);
				}
			},
		[],
	);
}

export function useRemoveTab() {
	return useRecoilCallback(
		({ snapshot, set }) =>
			async (tab: Tab) => {
				const tabs = await snapshot.getPromise(tabsListingAtom);

				const idx = tabs.findIndex((item) => item.id === tab.id);

				console.log(idx);

				if (idx !== -1) {
					const temp = [...tabs];
					temp.splice(idx, 1);
					set(tabsListingAtom, [...temp]);
				}
			},
		[],
	);
}
