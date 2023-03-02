import * as styles from '@/styles/projects/Listing.styles';
import { useGetProjects } from '@/lib/dataSource/features/projects/useGetProjects';
import { Loader, Pagination } from '@mantine/core';
import { Error } from '@/lib/components/notifications/Error';
import { Box } from '@/features/projects/Box';
import { Item } from '@/features/projects/listing/Item';
import { useEffect, useState } from 'react';
import { useLoadProjectTotalCount } from '@/features/projects/listing/hooks/useLoadProjectTotalCount';
import { useTotal } from '@/lib/stateManagement/project/getters';

function removeItem(id: string, data: Project[]) {
	const idx = data.findIndex((item) => item.id === id);

	if (idx !== -1) {
		data.splice(idx, 1);
	}

	const newData = [...data];

	if (newData.length === 0) {
		return [];
	}

	return newData;
}

const INITIAL_LIMIT = 8;
const INITIAL_PAGE = 0;

export function Listing() {
	const {query: {isLoading, isError, isSuccess, data}, setPage, currentPage} = useGetProjects(INITIAL_PAGE, INITIAL_LIMIT);
	const [listing, setListing] = useState<Project[]>([]);
	useLoadProjectTotalCount();
	const total = useTotal()();

	useEffect(() => {
		if (data && isSuccess) {
			setListing(data.length === 0 ? [] : data);
		}

		if (listing && isError) {
			setListing([]);
		}
	}, [data, isSuccess, isError]);

	return <div css={styles.root}>
		{isError && <Box>
			<Error />
		</Box>}

		{isLoading && <Box>
			<div css={styles.loader}>
				<Loader size="md" />
			</div>
		</Box>}

		<div css={styles.listingGrid}>
			{!isLoading && isSuccess && listing.length !== 0 && <div css={styles.listing}>
				{listing.map((item) => <Item key={item.id} item={item} onDelete={() => setListing(removeItem(item.id, listing))} />)}
			</div>}

			{!isLoading && isSuccess && listing.length === 0 && <p css={[styles.noProjects]}>
				No projects to show
			</p>}

			{!isLoading && isSuccess && typeof total === 'number' && total > INITIAL_LIMIT && <div css={styles.pagination}>
				<Pagination page={currentPage} onChange={(page) => setPage(page - 1)} total={total / INITIAL_LIMIT + 1} />
			</div>}
		</div>
	</div>;
}