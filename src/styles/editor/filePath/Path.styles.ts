import { css } from '@emotion/react';

export const root = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const caret = css`
  margin-right: 8px;
  color: var(--color-primary);
  font-weight: 900;
`;

export const content = css`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 6px;
`;
