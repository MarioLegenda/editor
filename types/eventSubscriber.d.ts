interface EventSubscriber {
  publish<T>(name: string, value: T);
  close(): void;
  subscribe<T>(name: string, subscriber: Subscription<T>): Unsubscribe | null;
}

type SubscriptionBuffer<T> = Record<string, ((payload: T) => void)[] | null>;
type Subscription<T> = (value: T) => void;
type Unsubscribe = () => void;