import { css } from '@emotion/react';

export const root = css`
  display: flex;
  justify-content: left;
  flex-direction: column;
  text-decoration: none;
  color: white;
  width: 100%;

  padding: 12px;
  border-radius: 5px;

  &:hover {
    background-color: var(--color-lighterBackground);
  }
`;

export const highlightItem = css`
  background-color: var(--color-lighterBackground);
`;

export const content = css`
  display: flex;
  justify-content: left;
`;

export const item = css`
  width: 100%;
  padding-left: 12px;

  h3 {
    margin-bottom: 8px;
  }

  p {
    width: 50%;
    color: var(--color-lightText);
  }
`;

export const menu = css`
  align-self: center;
  position: relative;
`;

export const avatarBackground = (color: string) => {
  return css`
    background-color: ${color};
  `;
};
