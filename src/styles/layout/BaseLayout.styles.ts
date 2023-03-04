import { css } from '@emotion/react';

export const root = css`
  grid-column: span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
`;
