export function isFile(item: unknown): item is AppFile {
	const a = item as AppFile;

	return (
		a &&
    Object.hasOwn(a, 'id') &&
    Object.hasOwn(a, 'name') &&
    Object.hasOwn(a, 'project_id') &&
    Object.hasOwn(a, 'user_id') &&
    Object.hasOwn(a, 'parent') &&
    Object.hasOwn(a, 'is_directory') &&
    Object.hasOwn(a, 'file_type') &&
    Object.hasOwn(a, 'file_extension') &&
    Boolean(a.user_id) &&
    Boolean(a.project_id) &&
    Boolean(a.id)
	);
}
