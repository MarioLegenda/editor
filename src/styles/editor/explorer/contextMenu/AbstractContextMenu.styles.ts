import { css } from '@emotion/react';

export const root = css`
  &:hover {
    background-color: var(--color-primaryDark) !important;
  }
`;

export const submenuRoot = css`
  background-color: var(--color-primaryBackground);
`;

export const divider = css`
  border-bottom: 1px solid var(--color-lightText) !important;
`;

export const danger = css`
  background-color: var(--color-lightError) !important;
  color: var(--color-primaryBackground) !important;

  &:hover {
    background-color: var(--color-error) !important;
  }
`;