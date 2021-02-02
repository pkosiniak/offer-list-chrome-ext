import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import * as P from './parts';
import { ChildrenExportType } from '../shared/types';
import { ActionButtonType } from './types';

interface CancelButtonProps extends ActionButtonType { }

const CancelButton: ForwardRefRenderFunction<HTMLButtonElement, CancelButtonProps> = ({
   isActive,
   isDisabled,
   setIsDisabled,
   text = '✖',
   onClickCallback,
}, ref) => {
   return (
      <>
         {!isDisabled && (
            <P.CancelButton
               ref={ref}
               onClick={() => {
                  setIsDisabled && setIsDisabled(true);
                  onClickCallback && onClickCallback();
               }}
               text={text}
               style={{ zIndex: isActive ? 2 : void 1 }}
            />
         )}
      </>
   );
};

export default forwardRef<HTMLButtonElement, CancelButtonProps>(CancelButton);
