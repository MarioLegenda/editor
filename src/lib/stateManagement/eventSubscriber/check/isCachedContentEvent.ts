export function isCachedContentEvent(
  item: unknown,
): item is CachedContentEvent {
  const a = item as CachedContentEvent;

  return (
    a &&
    Object.hasOwn(a, 'id') &&
    Object.hasOwn(a, 'projectId') &&
    Object.hasOwn(a, 'userId') &&
    Object.hasOwn(a, 'content') &&
    Boolean(a.userId) &&
    Boolean(a.projectId) &&
    Boolean(a.id)
  );
}
