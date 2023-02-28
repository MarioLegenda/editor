import * as styles from '@/styles/editor/layouts/LoadingLayout.styles';
import { Button, Center, Loader } from '@mantine/core';

interface Props {
	notFound: boolean;
	loading: boolean
}

export function LoadingLayout({notFound, loading}: Props) {
	return <>{(notFound || loading) && <div css={styles.root}>
		<Center>
			{loading && <Loader size="md" />}

			{notFound && <div css={styles.projectNotFound}>
				<div>
					<h1 css={styles.notFoundHeader}>404</h1>
				</div>

				<div>
					<p css={styles.notFoundParagraph}>Project not found</p>
					<Button component="a" href="/editor/projects">Back to dashboard</Button>
				</div>
			</div>}
		</Center>
	</div>}</>;
}