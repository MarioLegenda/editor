import { PropsWithChildren } from 'react';
import { useOnAuthStateChange } from '@/lib/dataSource/subscriptions/useOnAuthStateChange';
import { useOnce } from '@/lib/helpers/useOnce';

export function DataSourceEventsProvider({ children }: PropsWithChildren) {
  const onAuthStateChange = useOnAuthStateChange();

  useOnce(() => {
    onAuthStateChange();
  });

  return <>{children}</>;
}
