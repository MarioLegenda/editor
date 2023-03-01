export function useProjectSlug(): string | null {
	const match = location.pathname.match(new RegExp('/editor/(.*)'));
	if (match) {
		return match[1];
	}

	return null;
}