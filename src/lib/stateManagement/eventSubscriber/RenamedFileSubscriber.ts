import PubSub from 'pubsub-js';
import SubscriptionListener = PubSubJS.SubscriptionListener;

let subscriber: RenamedFileSubscriber | null = null;

export class RenamedFileSubscriber {
	static create(): RenamedFileSubscriber {
		if (!subscriber) {
			subscriber = new RenamedFileSubscriber();
		}

		return subscriber;
	}

	publish(name: string, value: string) {
		PubSub.publish(name, value);
	}

	subscribe<T>(name: string, subscriber: SubscriptionListener<T>) {
		return PubSub.subscribe(name, subscriber);
	}
}
