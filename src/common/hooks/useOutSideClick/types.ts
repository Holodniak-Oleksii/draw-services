import { RefObject } from 'react';

export type TOutsideClick = (
  refs: Array<RefObject<HTMLElement> | undefined> | undefined,
  handler?: () => void
) => void;
