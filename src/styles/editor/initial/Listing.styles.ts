import { css } from '@emotion/react';
import { spacing } from '@/styles/global/base.styles';

export const root = css`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 24px;
  width: 100%;

  font-family: var(--font-primary);
`;

export const loader = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-top: ${spacing}
`;

export const listing = css`
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

export const noProjects = css`
  color: var(--color-lightText);
  font-size: 24px;
  align-self: center;
  width: 100%;
  
  margin-top: 64px;
`;