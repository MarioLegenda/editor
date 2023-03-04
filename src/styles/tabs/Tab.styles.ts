import { css } from '@emotion/react';

export const root = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 2px solid var(--color-primaryBackground);
  border-right: 1px solid var(--color-primaryBackground);
  border-left: 1px solid var(--color-primaryBackground);

  width: 150px;

  padding: 8px 8px 8px 0;

  &:hover {
    border-bottom: 2px solid var(--color-primary);
  }

  .close-icon {
    display: none;
  }

  &:hover .close-icon {
    display: block;
  }

  .close-icon:hover {
    color: var(--color-primary);
  }
`;

export const content = css`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;

  margin-left: 2px;
`;

export const selected = css`
  border-bottom: 2px solid var(--color-primaryBackground);
  border-right: 1px solid var(--color-lighterBackground);
  border-left: 1px solid var(--color-lighterBackground);
  border-bottom: 2px solid var(--color-primary);
`;
