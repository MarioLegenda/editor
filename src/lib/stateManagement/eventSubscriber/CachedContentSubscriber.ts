import PubSub from 'pubsub-js';
import SubscriptionListener = PubSubJS.SubscriptionListener;
import { getContent } from '@/lib/dataSource/features/fileSystem/implementation/getContent';
import { ContentCache } from '@/lib/stateManagement/eventSubscriber/cache/ContentCache';

let subscriber: CachedContentSubscriber | null = null;

export class CachedContentSubscriber {
	private selectedFile: Record<string, CachedContentPayload> = {};
	private cache = new ContentCache();

	static create(): CachedContentSubscriber {
		if (!subscriber) {
			subscriber = new CachedContentSubscriber();
		}

		return subscriber;
	}

	updateCache(id: string, value: string) {
		if (this.cache.has(id)) {
			this.cache.update(id, value);
		}
	}

	publish(name: string, value: CachedContentPayload) {
		this.sendPreviousSelected();

		console.log('publish', this.cache.has(value.id));

		if (this.cache.has(value.id)) {
			PubSub.publish(name, value);
			this.selectedFile[name] = value;

			return;
		}

		getContent(value.id, value.projectId, value.userId).then((content) => {
			if (typeof content === 'string') {
				this.cache.add(value.id, content);
				PubSub.publish(name, {
					id: value.id,
					userId: value.userId,
					projectId: value.projectId,
					content: content,
				});

				this.selectedFile[name] = value;
			}
		});
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
