import PubSub from 'pubsub-js';
import SubscriptionListener = PubSubJS.SubscriptionListener;

let subscriber: SelectedTabSubscriber | null = null;

export class SelectedTabSubscriber {
	private selectedTab: Record<string, Tab | undefined> = {};

	static create(): SelectedTabSubscriber {
		if (!subscriber) {
			subscriber = new SelectedTabSubscriber();
		}

		return subscriber;
	}

	publish(name: string, value: Tab | undefined) {
		this.sendPreviousSelected();
		PubSub.publish(name, value);
		this.selectedTab[name] = value;
	}

	subscribe<T>(name: string, subscriber: SubscriptionListener<T>) {
		return PubSub.subscribe(name, subscriber);
	}

	close() {
		this.selectedTab = {};
	}

	private sendPreviousSelected() {
		const keys = Object.keys(this.selectedTab);
		if (keys.length !== 0) {
			const key = Object.keys(this.selectedTab)[0];

			PubSub.publish(key, undefined);

			delete this.selectedTab[key];
		}
	}
}
