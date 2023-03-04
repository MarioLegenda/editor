export function isTab(item: unknown): item is Tab {
	const a = item as Tab;

	return (
		a &&
    Object.hasOwn(a, 'id') &&
    Object.hasOwn(a, 'name') &&
    Object.hasOwn(a, 'projectId') &&
    Object.hasOwn(a, 'userId') &&
    Object.hasOwn(a, 'parent') &&
    Object.hasOwn(a, 'fileType') &&
    Object.hasOwn(a, 'fileExtension') &&
    Boolean(a.id)
	);
}
