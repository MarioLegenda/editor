import * as styles from '@/styles/editor/initial/Initial.styles';
import { Actions } from '@/features/editor/initial/Actions';
import { useSimpleUiState } from '@/lib/helpers/useSimpleUiState';
import { NewProjectForm } from '@/features/editor/initial/forms/NewProjectForm';
import { Box } from '@/features/editor/initial/Box';
import { Listing } from '@/features/editor/initial/listing/Listing';

export function Main() {
	const {current, set} = useSimpleUiState<'newProject' | 'listing'>({
		newProject: false,
		listing: true,
	});

	return <div css={styles.root}>
		<Actions onNewProject={() => set('newProject')} />

		{current === 'newProject' &&
				<Box>
					<NewProjectForm onCancel={() => set('listing')} />
				</Box>
		}

		{current === 'listing' &&
			<Box>
				<Listing />
			</Box>
		}
	</div>;
}