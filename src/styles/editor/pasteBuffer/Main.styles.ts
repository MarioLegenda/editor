import { css } from '@emotion/react';

export const root = css``;

export const heading = css`
  font-size: 24px;
  margin-bottom: 42px;
`;

export const actions = css`
  display: flex;
  justify-content: right;
  align-content: center;

  gap: 8px;
  margin-bottom: 24px;
  padding: 0 24px 0 24px;
`;
export const card = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;

  margin-bottom: 12px;
`;

export const cardItemButton = css`
  color: white;

  &:hover {
    background-color: transparent;
  }
`;

export const panel = css`
  margin-top: 0;
  max-height: 40vh;

  overflow-y: auto;
  padding: 0 24px 0 8px;
`;

export const noItems = css`
  text-align: center;
  color: var(--color-lightText);
  margin-top: 24px;
  font-weight: 900;
`;
