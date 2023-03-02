export function isSearchProjectList(list: unknown): list is Project[] {
	if (Array.isArray(list)) {
		if (list[0]) {
			const item = list[0] as Project;

			return Object.hasOwn(item, 'name')
        && Object.hasOwn(item, 'id')
        && Object.hasOwn(item, 'user_id')
        && Boolean(item.user_id)
        && Boolean(item.id);
		}

		return true;
	}

	return false;
}