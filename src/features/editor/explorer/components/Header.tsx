import * as styles from '@/styles/editor/explorer/Header.styles';
import { StateIndicator } from '@/features/editor/explorer/components/StateIndicator';

export function Header() {
  return (
    <div css={styles.root}>
      <h2>EXPLORER</h2>

      <StateIndicator />
    </div>
  );
}
