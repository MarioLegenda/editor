import * as styles from '@/styles/editor/initial/Initial.styles';
import { Actions } from '@/features/projects/Actions';
import { useSimpleUiState } from '@/lib/helpers/useSimpleUiState';
import { NewProjectForm } from '@/features/projects/forms/NewProjectForm';
import { Box } from '@/features/projects/Box';
import { Listing } from '@/features/projects/listing/Listing';

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