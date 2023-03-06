import { css } from '@emotion/react';

export const root = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 2px solid var(--color-primaryBackground);
  border-right: 1px solid var(--color-primaryBackground);
  border-left: 1px solid var(--color-primaryBackground);
  position: relative;

  width: 150px;

  padding: 8px 8px 8px 0;

  &:hover {
    border-bottom: 2px solid var(--color-primary);
  }

  .close-icon-wrapper {
    display: none;
  }

  &:hover .close-icon-wrapper {
    display: block;
  }

  .close-icon-wrapper:hover {
    color: var(--color-primary);
  }
`;

export const closeIconWrapper = css`
  background-color: var(--color-primaryBackground);
  position: absolute;
  top: 8px;
  right: 0;

  height: 24px;
  border-radius: 5px;
`;

export const content = css`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;

  margin-left: 2px;
  overflow: hidden;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const selected = css`
  border-bottom: 2px solid var(--color-primaryBackground);
  border-right: 1px solid var(--color-lighterBackground);
  border-left: 1px solid var(--color-lighterBackground);
  border-bottom: 2px solid var(--color-primary);

  background-color: var(--color-lighterBackground);
`;
