import { css } from '@emotion/react';

export const root = css`
  cursor: pointer;
`;

export const content = css`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;

  padding: 2px 0 2px 0;

  &:hover {
    background-color: var(--color-lighterBackground);
  }
`;

export const move = (num: number) => {
  return css`
    padding-left: ${num * 4}px;
  `;
};

export const softOpen = css`
  background-color: var(--color-lighterBackground);
`;

export const open = css`
  background-color: var(--color-primaryDark);

  &:hover {
    background-color: var(--color-primaryDark);
  }
`;

export const title = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
