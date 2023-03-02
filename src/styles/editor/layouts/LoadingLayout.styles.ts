import { css } from '@emotion/react';

export const root = css`
  grid-column: span 12 / span 12;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const projectNotFound = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  
  color: var(--color-lightText);
  font-size: 32px;
`;

export const notFoundHeader = css`
  font-size: 128px;
  color: var(--color-error);
`;

export const notFoundParagraph = css`
  font-size: 32px;
`;