let subscriber: EventSubscriber | null = null;

export class Subscriber implements EventSubscriber{
	private subscriptionBuffer: SubscriptionBuffer<never> = {};

	static create(): EventSubscriber {
		if (!subscriber) {
			subscriber = new Subscriber();
		}

		return subscriber;
	}

	publish<T extends never>(name: string, value: T) {
		const fn = this.subscriptionBuffer[name];

		if (fn) {
			fn(value);
		}
	}

	subscribe<T>(name: string, subscriber: Subscription<T>): Unsubscribe | null {
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