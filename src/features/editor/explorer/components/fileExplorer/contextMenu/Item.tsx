import * as styles from '@/styles/editor/explorer/contextMenu/Item.styles';
import React from 'react';

interface Props {
  name: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

export function Item({ name, rightIcon, leftIcon }: Props) {
  return (
    <div css={styles.root}>
      <div css={styles.leftSection}>
        {leftIcon && leftIcon}
        <p>{name}</p>
      </div>

      {rightIcon && rightIcon}
    </div>
  );
}
