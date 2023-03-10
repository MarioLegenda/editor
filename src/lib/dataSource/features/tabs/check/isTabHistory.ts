export function isTabHistory(item: unknown): item is TabsHistory {
  const a = item as TabsHistory;

  return (
    a &&
    Object.hasOwn(a, 'projectId') &&
    Object.hasOwn(a, 'history') &&
    Object.hasOwn(a, 'id') &&
    Boolean(a.history) &&
    Array.isArray(a.history) &&
    Boolean(a.id)
  );
}
