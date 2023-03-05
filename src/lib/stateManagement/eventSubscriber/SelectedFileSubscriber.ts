import PubSub from 'pubsub-js';
import SubscriptionListener = PubSubJS.SubscriptionListener;

let subscriber: SelectedFileSubscriber | null = null;

export class SelectedFileSubscriber {
	private selectedFile: Record<string, string | AppFile> = {};

	static create(): SelectedFileSubscriber {
		if (!subscriber) {
			subscriber = new SelectedFileSubscriber();
		}

		return subscriber;
	}

	publish(name: string, value: string | AppFile) {
		this.sendPreviousSelected();
		PubSub.publish(name, value);
		this.selectedFile[name] = value;
	}

	subscribe<T>(name: string, subscriber: SubscriptionListener<T>) {
		return PubSub.subscribe(name, subscriber);
	}

	close() {
		this.selectedFile = {};
	}

	private sendPreviousSelected() {
		const keys = Object.keys(this.selectedFile);
		if (keys.length !== 0) {
			const key = Object.keys(this.selectedFile)[0];

			PubSub.publish(key, undefined);

			delete this.selectedFile[key];
		}
	}
}
