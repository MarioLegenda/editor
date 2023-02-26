import { css } from '@emotion/react';

export const root = css`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(12, minmax(0, auto));
  
  grid-gap: 24px;
`;