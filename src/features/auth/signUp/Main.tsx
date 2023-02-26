import { Form } from '@/features/auth/signUp/Form';

import * as styles from '@/styles/signUp/Main.styles';
import { Success } from '@/lib/components/notifications/Success';
import { Error } from '@/lib/components/notifications/Error';
import { useSimpleUiState } from '@/lib/helpers/useSimpleUiState';

export function Main() {
	const {current, set} = useSimpleUiState<'isSignUpSuccess' | 'isSignUpError'>({
		isSignUpSuccess: false,
		isSignUpError: false,
	});

	return <div css={styles.root}>
		{current === 'isSignUpSuccess' && <div css={styles.notification}>
			<Success disallowClose title="Sign up successful" message="You are now signed up. Confirmation email has been sent to your email." />
		</div>}

		{current === 'isSignUpError' && <div css={styles.notification}>
			<Error />
		</div>}

		<Form onSuccess={() => set('isSignUpSuccess')} onError={() => set('isSignUpError')} />
	</div>;
}