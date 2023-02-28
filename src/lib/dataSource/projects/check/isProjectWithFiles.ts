export function isProjectWithFiles(item: unknown): item is ProjectWithFiles {
	const a = item as ProjectWithFiles;

	return a
    && Object.hasOwn(a, 'name')
    && Object.hasOwn(a, 'description')
    && Object.hasOwn(a, 'id')
    && Object.hasOwn(a, 'user_id')
    && Object.hasOwn(a, 'files')
    && Array.isArray(a.files)
    && Boolean(a.user_id)
    && Boolean(a.id);
}