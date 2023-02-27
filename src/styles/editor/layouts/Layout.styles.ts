import { css } from '@emotion/react';

export const root = css`
  grid-column: span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
`;

export const explorer = css`
  grid-column: span 3 / span 3;
  
  border: 1px solid blue;
`;

export const codeEditor = css`
  grid-column: span 9 / span 9;
  
  border: 1px solid red;
`;