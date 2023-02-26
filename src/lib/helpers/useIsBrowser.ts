export function useIsBrowser() {
	return typeof window !== undefined;
}