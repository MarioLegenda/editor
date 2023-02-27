import { Avatar, Group, SelectItemProps } from '@mantine/core';
import { forwardRef } from 'react';

import * as styles from '@/styles/editor/search/Autocomplete.styles';

interface ItemProps extends SelectItemProps {
  value: string;
  description: string;
  color: string;
	id: string;
}

export const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
	({ description, value, color, id }: ItemProps, ref) => (
		<div ref={ref} css={styles.root} onClick={() => console.log('Click id ', id)}>
			<Group noWrap>
				<Avatar css={styles.avatarBackground(color)} radius="xl">{value.substring(0, 1).toUpperCase()}</Avatar>

				<div>
					<p>{value}</p>
					<p>
						{description}
					</p>
				</div>
			</Group>
		</div>
	)
);

AutoCompleteItem.displayName = 'AutocompleteItem';