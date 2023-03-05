import { PropsWithChildren } from 'react';

import * as styles from '@/styles/projects/Box.styles';

export function Box({ children }: PropsWithChildren) {
  return <div css={styles.root}>{children}</div>;
}
