let subscriber: Subscriber | null = null;

export class Subscriber {
	private subscriptionBuffer: Record<string, (payload: string) => void> = {};

	static create() {
		if (!subscriber) {
			subscriber = new Subscriber();
		}

		return subscriber;
	}

	publish(name: string, value: string) {
		const fn = this.subscriptionBuffer[name];

		if (fn) {
			fn(value);
		}
	}

	subscribe(
		name: string,
		subscriber: Subscription<string>,
	): Unsubscribe | null {
		if (this.subscriptionBuffer[name]) {
			return null;
		}

		this.subscriptionBuffer[name] = subscriber;

		return () => delete this.subscriptionBuffer[name];
	}

	close() {
		this.subscriptionBuffer = {};
	}
}
