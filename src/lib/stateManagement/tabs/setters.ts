import { useRecoilCallback } from 'recoil';
import {
	tabsHistoryAtom,
	tabsListingAtom,
} from '@/lib/stateManagement/tabs/atoms';
import { SelectedTabSubscriber } from '@/lib/stateManagement/eventSubscriber/SelectedTabSubscriber';
import { createSelectedTabTopic } from '@/lib/stateManagement/eventSubscriber/keys/createSelectedTabTopic';
import { projectAtom } from '@/lib/stateManagement/project/atoms';
import { accountAtom } from '@/lib/stateManagement/auth/account';
import { updateHistory } from '@/lib/dataSource/features/tabs/implementation/updateHistory';
import { updateSelectedHistoryTab } from '@/lib/dataSource/features/tabs/implementation/updateSelectedHistoryTab';

export function useAddTab() {
	return useRecoilCallback(
		({ snapshot, set }) =>
			async (tab: Tab) => {
				const tabs = await snapshot.getPromise(tabsListingAtom);
				const project = await snapshot.getPromise(projectAtom);
				const account = await snapshot.getPromise(accountAtom);

				if (project && account) {
					const idx = tabs.findIndex((item) => item.id === tab.id);

					if (idx === -1) {
						const t = [...tabs, tab];
						updateHistory(project.id, account.id, JSON.stringify(t));
						set(tabsListingAtom, t);
					}
				}
			},
		[],
	);
}

export function useAddHistory() {
	return useRecoilCallback(
		({ set }) =>
			async (history: TabsHistory) => {
				set(tabsListingAtom, history.history);
				set(tabsHistoryAtom, history.history);

				const selected = history.selected;
				SelectedTabSubscriber.create().publish(
					createSelectedTabTopic(selected.id),
					selected,
				);
			},
		[],
	);
}

export function useUpdateTab() {
	return useRecoilCallback(
		({ snapshot, set }) =>
			async (tab: Tab) => {
				const tabs = await snapshot.getPromise(tabsListingAtom);
				const project = await snapshot.getPromise(projectAtom);
				const account = await snapshot.getPromise(accountAtom);

				if (project && account) {
					const idx = tabs.findIndex((item) => item.id === tab.id);

					if (idx !== -1) {
						const temp = [...tabs];
						temp[idx] = tab;
						set(tabsListingAtom, temp);
					}
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
				const project = await snapshot.getPromise(projectAtom);
				const account = await snapshot.getPromise(accountAtom);

				if (project && account) {
					const idx = tabsHistory.findIndex((item) => item.id === tab.id);
					if (idx !== -1) {
						const end = tabsHistory.length - 1;
						if (end !== idx) {
							const temp = [...tabsHistory];

							const t = temp[end];
							temp[end] = tab;
							temp[idx] = t;

							updateHistory(project.id, account.id, JSON.stringify(temp));

							set(tabsHistoryAtom, temp);
						}
						return;
					}

					const temp = [...tabsHistory];
					set(tabsHistoryAtom, [...temp, tab]);
				}
			},
		[],
	);
}

export function useUpdateHistory() {
	return useRecoilCallback(
		({ snapshot, set }) =>
			async (tab: Tab) => {
				const tabsHistory = await snapshot.getPromise(tabsHistoryAtom);
				const project = await snapshot.getPromise(projectAtom);
				const account = await snapshot.getPromise(accountAtom);

				if (project && account) {
					const idx = tabsHistory.findIndex((item) => item.id === tab.id);
					if (idx !== -1) {
						const temp = [...tabsHistory];
						temp[idx] = tab;

						updateHistory(project.id, account.id, JSON.stringify(temp));

						set(tabsHistoryAtom, temp);
					}
				}
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
				const project = await snapshot.getPromise(projectAtom);
				const account = await snapshot.getPromise(accountAtom);

				if (project && account) {
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

							updateSelectedHistoryTab(
								project.id,
								account.id,
								JSON.stringify(previousTab),
							);
						} else {
							// only one history tab exists that is about to be removed
							// so we can just reset the history atom
							updateHistory(project.id, account.id, JSON.stringify([]));

							reset(tabsHistoryAtom);
							SelectedTabSubscriber.create().publish('selected_tab', undefined);

							return;
						}

						const temp = [...tabsHistory];
						temp.splice(tabsHistory.length - 1, 1);
						const t = [...temp];
						set(tabsHistoryAtom, t);

						updateHistory(project.id, account.id, JSON.stringify(t));

						return;
					}

					const historyIdx = tabsHistory.findIndex(
						(item) => item.id === tab.id,
					);
					const temp = [...tabsHistory];
					temp.splice(historyIdx, 1);

					const t = [...temp];
					updateHistory(project.id, account.id, JSON.stringify(t));
					set(tabsHistoryAtom, t);
				}
			},
		[],
	);
}
