import { css } from '@emotion/react';

export const root = css`
  display: flex;
  justify-content: left;
  flex-direction: column;
`;

export const content = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const header = css`
  font-size: 14px;
  font-weight: 900;
  
  padding-left: 12px;
`;

export const menuItem = css`
  svg {
    width: 24px;
    height: 24px;
  }
`;