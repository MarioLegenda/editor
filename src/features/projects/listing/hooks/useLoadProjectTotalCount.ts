import { useGetTotal } from '@/lib/dataSource/features/projects/useGetTotal';
import { useEffect } from 'react';
import { useSetTotal } from '@/lib/stateManagement/project/setters';

export function useLoadProjectTotalCount() {
  const { isLoading, isError, isSuccess, data } = useGetTotal();
  const setTotal = useSetTotal();

  useEffect(() => {
    if (!isLoading && isSuccess && typeof data === 'number') {
      setTotal(data);
    }
  }, [isLoading, isSuccess, isError, data]);

  return { isLoading, isError, isSuccess, data };
}
