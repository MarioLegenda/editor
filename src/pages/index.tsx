import Head from 'next/head';
import { useRunInBrowser } from '@/lib/helpers/useRunInBrowser';
import {Button, Center} from '@mantine/core';

import * as styles from '@/styles/index/index.styles';
import {IconLogin, IconUserPlus} from '@tabler/icons';

export default function Home() {
	const inBrowser = useRunInBrowser();

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>{inBrowser &&
				<Center css={styles.fullHeight}>
					<div css={styles.root}>
						<Button leftIcon={<IconUserPlus />} component="a" size="lg" href="/sign-up" variant="default">Sign up</Button>
						<Button leftIcon={<IconLogin />} component="a" size="lg" href="/sign-in" variant="default">Sign in</Button>
					</div>
				</Center>
			}</main>
		</>
	);
}
