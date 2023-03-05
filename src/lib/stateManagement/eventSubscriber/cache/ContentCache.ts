export class ContentCache {
	private cache: Record<string, CachedContentEvent> = {};

	add(id: string, content: CachedContentEvent) {
		this.cache[id] = content;
	}

	has(id: string): boolean {
		return Object.hasOwn(this.cache, id);
	}

	update(id: string, value: CachedContentEvent) {
		this.cache[id] = value;
	}

	get(id: string) {
		return this.cache[id];
	}

	remove(id: string): boolean {
		return delete this.cache[id];
	}
}
