import * as styles from '@/styles/editor/initial/Listing.styles';
import { useGetProjects } from '@/lib/dataSource/projects/useGetProjects';
import { Loader } from '@mantine/core';
import { Error } from '@/lib/components/notifications/Error';
import { Box } from '@/features/editor/initial/Box';
import { Item } from '@/features/editor/initial/listing/Item';
import { useEffect, useState } from 'react';

function removeItem(id: string, data: Project[]) {
	const idx = data.findIndex((item) => item.id === id);

	if (idx !== -1) {
		data.splice(idx, 1);
	}

	const newData = [...data];

	if (newData.length === 0) {
		return null;
	}

	return newData;
}

export function Listing() {
	const {query: {isLoading, isError, isSuccess, data}} = useGetProjects();
	const [listing, setListing] = useState<Project[] | null>(null);

	useEffect(() => {
		if (data && isSuccess) {
			setListing(data.length === 0 ? null : data);
		}

		if (listing && isError) {
			setListing(null);
		}
	}, [data, isSuccess, isError]);

	return <div css={styles.root}>
		{isError && <Box>
			<Error />
		</Box>}
		
		{isLoading && <Box>
			<div css={styles.loader}>
				<Loader size="sm" />
			</div>
		</Box>}

		{!isLoading && isSuccess && listing && listing.length !== 0 && <div css={styles.listing}>
			{listing.map((item) => <Item key={item.id} item={item} onDelete={() => setListing(removeItem(item.id, listing))} />)}
		</div>}

		{!isLoading && isSuccess && !listing && <p css={[styles.listing, styles.noProjects]}>
			No projects to show
		</p>}
	</div>;
}