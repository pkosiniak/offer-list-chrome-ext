import { ExpandableCellState } from '../shared/types';

export type ActionButtonType = {
   setIsDisabled?: (isDisabled: boolean) => void,
   text?: string,
   onClickCallback?: () => void,
} & Pick<ExpandableCellState, 'isActive' | 'isDisabled'>