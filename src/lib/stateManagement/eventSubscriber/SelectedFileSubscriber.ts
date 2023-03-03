let subscriber: EventSubscriber | null = null;

export class SelectedFileSubscriber implements EventSubscriber{
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private subscriptionBuffer: SubscriptionBuffer<any> = {};
	private selectedFile: Record<string, string> = {};

	static create(): EventSubscriber {
		if (!subscriber) {
			subscriber = new SelectedFileSubscriber();
		}

		return subscriber;
	}

	publish<T>(name: string, value: T) {
		const fn = this.subscriptionBuffer[name];

		if (fn) {
			this.sendPreviousSelected();
			this.sendValues(fn, value);
			if (typeof value === 'string') {
				this.selectedFile[name] = value;
			}
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
		this.selectedFile = {};
	}

	private sendPreviousSelected() {
		const keys = Object.keys(this.selectedFile);

		if (keys.length !== 0) {
			const key = Object.keys(this.selectedFile)[0];

			if (!this.subscriptionBuffer[key]) {
				return;
			}

			const fn = this.subscriptionBuffer[key];

			if (fn) {
				this.sendValues(fn, undefined);
				delete this.selectedFile[key];
			}
		}
	}

	private async sendValues<T>(fn: Subscription<T>, value: T) {
		fn(value);
	}
}