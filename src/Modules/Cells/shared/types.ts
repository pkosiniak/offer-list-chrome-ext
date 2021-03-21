import { Dispatch, SetStateAction } from 'react';
import { StackRequirements } from '../../../types/job';
import { DispatchType } from '../../CellsCollection/types';
import * as LS from '../localStore/types';
import { CellWidth } from './types.parts';

export type ChildrenExportType = {
   isExpanded?: boolean,
   disabled?: boolean,
   setDisabled?: Dispatch<SetStateAction<boolean>>,
   isActive?: boolean,
   setIsActive?: Dispatch<SetStateAction<boolean>>,
   refHeight?: number,
}

export type ExpandableCellState = LS.ExpandableState & {
   dispatch: Dispatch<LS.ExpandableAction>,
   prevState?: LS.ExpandableState,
   zIndex: number,
   width: CellWidth
}

export type WithExpandableState = { expandableState: ExpandableCellState };

export type BasicChildrenExportType<T> = {
   inputValue?: T,
   disabled: boolean,
   setInputValue: Dispatch<SetStateAction<T | undefined>>
}

export type ListCellBodyProps<Type, State> = {
   state: State,
   setState:  (list: Type[]) => void,
   onOkClick: () => void,
   newItem?: Type,
   setNewItem: Dispatch<SetStateAction<Type | undefined>>
} & WithExpandableState

export type ListItemPickFromExpandable = Pick<ExpandableCellState, 'isExpanded' | 'isDisabled'>
   & Required<Pick<ExpandableCellState, 'width'>>
export type PickExpandableCellStateIsExpandedAndWidth = Pick<ExpandableCellState, 'isExpanded'>
   & Required<Pick<ExpandableCellState, 'width'>>

export type CollectionProps = {
   dispatch: DispatchType,
   zIndex?: number,
}

export type ListState<T> = {
   item: T,
   setItem: (item: T) => void,
   deleteItem: () => void,
   index: number,
   list: T[]
}

export {
   CellWidth,
   WidthType,
   HeightType,
   IsExpandedType,
   IsDisabledType,
} from './types.parts';
