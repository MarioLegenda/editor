import { Autocomplete, Loader } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useSearchProjects } from '@/lib/dataSource/projects/useSearchProjects';
import { AutoCompleteItem } from '@/features/projects/search/AutocompleteItem';

export function Main() {
	const [text, setText] = useState('');
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [debouncedText, _] = useDebounce(text, 500);
	const [listData, setListData] = useState<ProjectAutocompleteList[]>([]);

	const {query: {isLoading, isError, isSuccess, data}, updateTerm} = useSearchProjects(debouncedText);

	useEffect(() => {
		updateTerm(debouncedText);
	}, [debouncedText]);

	useEffect(() => {
		if (!isLoading && isSuccess && data) {
			const listing = [];
			for (const project of data) {
				listing.push({
					value: project.name,
					id: project.id,
					description: project.description,
					color: project.color,
				});
			}

			setListData(listing);
		}

		if (!isLoading && isError) {
			setListData([]);
		}
	}, [isLoading, isSuccess, isError, data]);

	const onChange = useCallback((value: string) => {
		setText(value);
	}, []);
	
	return <Autocomplete
		transition="pop-top-left"
		transitionDuration={80}
		itemComponent={AutoCompleteItem}
		transitionTimingFunction="ease"
		data={listData} placeholder="Search projects..."
		onChange={onChange} rightSection={<>
			{isLoading &&<Loader size="sm" />}
		</>}
	/>;
}