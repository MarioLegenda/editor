export function isRawHistory(item: unknown): item is RawHistory {
	const a = item as RawHistory;

	return (
		a &&
    Object.hasOwn(a, 'project_id') &&
    Object.hasOwn(a, 'history') &&
    Object.hasOwn(a, 'id') &&
    Object.hasOwn(a, 'user_id') &&
    typeof a.history === 'string' &&
    Boolean(a.id)
	);
}
