import { css } from '@emotion/react';

export const root = css`
  grid-column: span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
`;

export const fullWidth = css`
  grid-column: span 12 / span 12;
`;

export const explorer = css`
  grid-column: span 2 / span 2;
`;

export const codeEditor = css`
  grid-column: span 10 / span 10;
  display: flex;
  flex-direction: column;
`;

export const actualEditor = css`
  width: 100%;
  height: 95vh;
`;

export const tabs = css`
  width: 100%;
`;
