import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import * as P from './parts';
import { ActionButtonType } from './types';

interface OkButtonProps extends ActionButtonType { }


const OkButton: ForwardRefRenderFunction<HTMLButtonElement, OkButtonProps> = ({
   isActive,
   isDisabled,
   setIsDisabled,
   text = '✔',
   onClickCallback,
}, ref) => {
   return (
      <>
         {!isDisabled && <P.OkButton
            ref={ref}
            onClick={() => {
               setIsDisabled && setIsDisabled(true);
               onClickCallback && onClickCallback();
            }}
            text={text}
            style={{ zIndex: isActive ? 2 : void 1 }}
         />}
      </>
   );
};

export default forwardRef<HTMLButtonElement, OkButtonProps>(OkButton);
