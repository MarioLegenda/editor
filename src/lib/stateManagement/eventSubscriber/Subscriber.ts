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

	subscribe<T>(name: string, subscriber: Subscription<T>) {
		if (this.subscriptionBuffer[name]) {
			return;
		}

		this.subscriptionBuffer[name] = subscriber;
	}

	close() {
		this.subscriptionBuffer = {};
	}
}