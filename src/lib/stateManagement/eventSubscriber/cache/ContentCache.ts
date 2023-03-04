export class ContentCache {
	private cache: Record<string, string> = {};
	add(id: string, content: string) {
		this.cache[id] = content;
	}

	has(id: string): boolean {
		return Object.hasOwn(this.cache, id);
	}

	update(id: string, value: string) {
		this.cache[id] = value;
	}

	remove(id: string): boolean {
		return delete this.cache[id];
	}
}
