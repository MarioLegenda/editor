import { css } from '@emotion/react';
import { spacing } from '@/styles/global/base.styles';

export const root = css`
  display: flex;
  justify-content: left;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  font-family: var(--font-primary);
`;

export const loader = css`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  margin-top: ${spacing};
`;

export const listing = css`
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  overflow-x: auto;
`;

export const pagination = css`
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const noProjects = css`
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-self: center;

  color: var(--color-lightText);
  font-size: 24px;
  align-self: center;
  width: 100%;
  text-align: center;

  margin: 64px 0 64px 0;
`;

export const listingGrid = css`
  display: grid;
  grid-template-rows: 80vh auto;
`;
