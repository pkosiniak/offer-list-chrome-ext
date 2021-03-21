// import { ExpandableCellState } from '../shared/types';
// TODO: Move this types to root
import { ExpandableCellState } from '../Cells/shared/types';

export type ActionButtonType = {
   setIsDisabled?: (isDisabled: boolean) => void,
   text?: string,
   onClickCallback?: () => void,
} & Pick<ExpandableCellState, 'isActive' | 'isDisabled'>