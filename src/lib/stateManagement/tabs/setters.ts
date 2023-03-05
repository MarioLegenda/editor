import { useRecoilCallback } from 'recoil';
import {
	tabsHistoryAtom,
	tabsListingAtom,
} from '@/lib/stateManagement/tabs/atoms';
import { SelectedTabSubscriber } from '@/lib/stateManagement/eventSubscriber/SelectedTabSubscriber';
import { createSelectedTabTopic } from '@/lib/stateManagement/eventSubscriber/keys/createSelectedTabTopic';

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

export function useAddTabToHistory() {
	return useRecoilCallback(
		({ snapshot, set }) =>
			async (tab: Tab) => {
				const tabsHistory = await snapshot.getPromise(tabsHistoryAtom);

				const idx = tabsHistory.findIndex((item) => item.id === tab.id);
				if (idx !== -1) {
					const end = tabsHistory.length - 1;
					if (end !== idx) {
						const temp = [...tabsHistory];

						const t = temp[end];
						temp[end] = tab;
						temp[idx] = t;

						set(tabsHistoryAtom, temp);
					}
					return;
				}

				const temp = [...tabsHistory];
				set(tabsHistoryAtom, [...temp, tab]);
			},
		[],
	);
}

export function useRemoveTab() {
	return useRecoilCallback(
		({ snapshot, set, reset }) =>
			async (tab: Tab) => {
				const tabs = await snapshot.getPromise(tabsListingAtom);
				const tabsHistory = await snapshot.getPromise(tabsHistoryAtom);
				const idx = tabs.findIndex((item) => item.id === tab.id);

				if (idx !== -1) {
					const temp = [...tabs];
					temp.splice(idx, 1);
					set(tabsListingAtom, [...temp]);
				}

				const selectedTab = tabsHistory[tabsHistory.length - 1];
				// if removed tab is a selected tab,
				// select previous and remove selected from history
				if (selectedTab.id === tab.id) {
					const idx = tabsHistory.length - 2;
					const previousTab = tabsHistory[idx];
					if (previousTab) {
						SelectedTabSubscriber.create().publish(
							createSelectedTabTopic(previousTab.id),
							previousTab,
						);
					} else {
						// only one history tab exists that is about to be removed
						// so we can just reset the history atom

						reset(tabsHistoryAtom);
						SelectedTabSubscriber.create().publish('selected', undefined);

						return;
					}

					const temp = [...tabsHistory];
					temp.splice(tabsHistory.length - 1, 1);
					set(tabsHistoryAtom, [...temp]);

					return;
				}

				const historyIdx = tabsHistory.findIndex((item) => item.id === tab.id);
				const temp = [...tabsHistory];
				temp.splice(historyIdx, 1);
				set(tabsHistoryAtom, [...temp]);
			},
		[],
	);
}
