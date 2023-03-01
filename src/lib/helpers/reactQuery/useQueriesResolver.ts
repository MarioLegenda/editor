import { UseQueryResult } from 'react-query';
import { useEffect, useState } from 'react';

export function useQueriesResolver<T>(query: UseQueryResult<T>[]) {
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState<T[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const isNotLoading = query.every((q) => !q.isLoading);
		const isSuccess = query.every(q => q.isSuccess);
		const dataLoaded = query.every(q => q.data);
		const isError = query.every(q => q.isError);

		if (isNotLoading && isSuccess && dataLoaded) {
			const resolvedData: T[] = [];
			for (const q of query) {
				if (q.data) {
					resolvedData.push(q.data);
				}
			}

			setData(resolvedData);
			setIsLoading(false);
		}

		if (isError) {
			setIsError(true);
		}
	}, [query]);

	return {
		isError,
		data,
		isLoading,
	};
}