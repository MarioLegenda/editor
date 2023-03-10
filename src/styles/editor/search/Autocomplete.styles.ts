import { css } from '@emotion/react';

export const root = css`
  padding: 12px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-lighterBackground);
  }
`;

export const avatarBackground = (color: string) => {
	return css`
    background-color: ${color};
  `;
};
