import * as styles from '@/styles/editor/initial/Listing.styles';
import { useGetProjects } from '@/lib/dataSource/projects/useGetProjects';
import { Loader } from '@mantine/core';
import { Error } from '@/lib/components/notifications/Error';
import { Box } from '@/features/editor/initial/Box';
import { Item } from '@/features/editor/initial/listing/Item';

export function Listing() {
	const {query: {isLoading, isError, isSuccess, data}} = useGetProjects();

	return <div css={styles.root}>
		{isError && <Box>
			<Error />
		</Box>}
		
		{isLoading && <Box>
			<div css={styles.loader}>
				<Loader size="sm" />
			</div>
		</Box>}

		{!isLoading && isSuccess && data && <div css={styles.listing}>
			{data.map((item) => <Item key={item.id} item={item} />)}
		</div>}
	</div>;
}