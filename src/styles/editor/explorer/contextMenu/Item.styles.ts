import { css } from '@emotion/react';

export const root = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const disabled = css`
  color: var(--color-lightText);
  cursor: not-allowed;
`;

export const leftSection = css`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 12px;
`;
