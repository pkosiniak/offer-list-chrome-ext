import * as T from './types';

const setIsActive = (
   isActive: boolean,
): T.ExpandableAction => ({
   type: T.EXPANDABLE.ACTIVE,
   isActive,
});

const setIsDisabled = (
   isDisabled: boolean,
): T.ExpandableAction => ({
   type: T.EXPANDABLE.DISABLE,
   isDisabled,
});

const setIsExpanded = (
   isExpanded: boolean,
): T.ExpandableAction => ({
   type: T.EXPANDABLE.EXPAND,
   isExpanded,
});

const setRefHeight = (
   refHeight?: number,
): T.ExpandableAction => ({
   type: T.EXPANDABLE.HEIGHT,
   refHeight,
});

const setAll = (
   isDisabled: boolean,
   isExpanded: boolean,
   isActive: boolean,
): T.ExpandableAction => ({
   type: T.EXPANDABLE.ALL,
   isActive,
   isDisabled,
   isExpanded,
});

export const expandableAction = {
   setAll,
   setIsActive,
   setIsDisabled,
   setIsExpanded,
   setRefHeight,
};