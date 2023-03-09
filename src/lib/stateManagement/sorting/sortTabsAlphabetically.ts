export function sortTabsAlphabetically(tabs: Tab[]): Tab[] {
	const temp = [...tabs];
	temp.sort((a, b) => {
		if (a.name < b.name) {
			return -1;
		}

		if (a.name > b.name) {
			return 1;
		}
		return 0;
	});

	return [...temp];
}
