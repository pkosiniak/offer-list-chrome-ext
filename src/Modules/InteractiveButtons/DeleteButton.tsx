import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import * as P from './parts';

interface DeleteButtonProps {
   deleteAction: () => void;
   confirmMsg: string;
   text?: string
}

const DeleteButton: ForwardRefRenderFunction<HTMLButtonElement, DeleteButtonProps> = ({
   deleteAction,
   confirmMsg,
   text = '🗑',
}, ref) => {
   return (
      <P.DeleteButton
         ref={ref}
         text={text}
         onClick={() => {
            const doDelete = confirm(confirmMsg);
            doDelete && deleteAction();
         }}
      />
   );
};

export default forwardRef<HTMLButtonElement, DeleteButtonProps>(DeleteButton);
