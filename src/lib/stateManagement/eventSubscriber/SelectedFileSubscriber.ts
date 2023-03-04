import { isFile } from '@/lib/dataSource/features/fileSystem/check/isFile';

let subscriber: EventSubscriber | null = null;

export class SelectedFileSubscriber implements EventSubscriber {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private subscriptionBuffer: SubscriptionBuffer<any> = {};
	private selectedFile: Record<string, string | AppFile> = {};

	static create(): EventSubscriber {
		if (!subscriber) {
			subscriber = new SelectedFileSubscriber();
		}

		return subscriber;
	}

	publish<T>(name: string, value: T) {
		const fns = this.subscriptionBuffer[name];

		this.sendPreviousSelected();
		if (fns) {
			for (const fn of fns) {
				(async function (_this) {
					fn(value);

					if (typeof value === 'string' || isFile(value)) {
						_this.selectedFile[name] = value;
					}
				})(this);
			}
		}
	}

	subscribe<T>(name: string, subscriber: Subscription<T>): Unsubscribe | null {
		if (!this.subscriptionBuffer[name]) {
			this.subscriptionBuffer[name] = [];
		}

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		for (const fn of this.subscriptionBuffer[name]) {
			if (fn.toString() === subscriber.toString()) {
				return null;
			}
		}

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const idx = this.subscriptionBuffer[name].push(subscriber);

		return () => {
			this.subscriptionBuffer[name]?.splice(idx, 1);
		};
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

			const fns = this.subscriptionBuffer[key];

			if (Array.isArray(fns)) {
				for (const fn of fns) {
					this.sendValues(fn, undefined);
				}
			}

			delete this.selectedFile[key];
		}
	}

	private async sendValues<T>(fn: Subscription<T>, value: T) {
		fn(value);
	}
}
