import { css } from '@emotion/react';

export const root = css`
  grid-column: span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
`;

export const explorer = css`
  grid-column: span 2 / span 2;
`;

export const codeEditor = css`
  grid-column: span 10 / span 10;
`;