export enum CellWidth {
   XSmall = 1,
   Small,
   Medium,
   Large,
   XLarge,
   XXLarge,
   X3Large,
   Default = Medium
}

export type WidthType = { width?: CellWidth }
export type ExtendedType = { extend?: -2 | -1 | 0 | 1 | 2 | 3 }
export type IsExpandedType = { isExpanded: boolean }
export type IsDisabledType = { isDisabled: boolean }
export type IsActiveType = { isActive: boolean }
export type HeightType = { height?: number }

export type DEPRECATED_WrapperProps = WidthType & IsDisabledType;
export type ExtendableWidthProps = WidthType & ExtendedType;
export type PlaceholderProps = WidthType & IsDisabledType;
export type AbsoluteWrapperProps = WidthType & IsExpandedType & IsDisabledType;
export type StyledULProps = IsExpandedType & IsDisabledType;
export type ULWrapperProps = HeightType & IsExpandedType & IsDisabledType & IsActiveType;
export type InputEditorWrapperProps = Required<WidthType>;
