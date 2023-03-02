export function isProject(item: unknown): item is Project {
	const a = item as Project;

	return a
		&& Object.hasOwn(a, 'name')
    && Object.hasOwn(a, 'description')
    && Object.hasOwn(a, 'id')
    && Object.hasOwn(a, 'user_id')
    && Boolean(a.user_id)
    && Boolean(a.id);
}