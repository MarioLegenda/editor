import PubSub from 'pubsub-js';
import SubscriptionListener = PubSubJS.SubscriptionListener;
import { getContent } from '@/lib/dataSource/features/fileSystem/implementation/getContent';
import { ContentCache } from '@/lib/stateManagement/eventSubscriber/cache/ContentCache';
import { showNotification } from '@mantine/notifications';

let subscriber: CachedContentSubscriber | null = null;

export class CachedContentSubscriber {
	private cache = new ContentCache();

	static create(): CachedContentSubscriber {
		if (!subscriber) {
			subscriber = new CachedContentSubscriber();
		}

		return subscriber;
	}

	updateCache(id: string, value: CachedContentEvent) {
		if (this.cache.has(id)) {
			this.cache.update(id, value);
		}
	}

	publish(name: string, value: CachedContentPayload) {
		if (this.cache.has(value.id)) {
			PubSub.publish(name, this.cache.get(value.id));

			return;
		}

		getContent(value.id, value.projectId, value.userId)
			.then((content) => {
				if (typeof content === 'string') {
					this.cache.add(value.id, {
						id: value.id,
						userId: value.userId,
						projectId: value.projectId,
						content: content,
					});

					PubSub.publish(name, {
						id: value.id,
						userId: value.userId,
						projectId: value.projectId,
						content: content,
					});
				}
			})
			.catch(() => {
				showNotification({
					id: 'cachedContentError',
					title: 'Something went wrong.',
					autoClose: 10000,
					message:
            'We cannot get the content of this file at this moment. Please, try again later.',
					color: 'red',
					loading: false,
				});
			});
	}

	subscribe<T>(name: string, subscriber: SubscriptionListener<T>) {
		return PubSub.subscribe(name, subscriber);
	}
}
