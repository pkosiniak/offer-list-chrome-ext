import React from 'react';
import DeleteButton from './Cells/components/DeleteButton';

interface RemoveProps {
   removeAction: () => void
}

const Remove = ({ removeAction }: RemoveProps) => {
   return (
      <DeleteButton
         text={'🗑 Row'}
         confirmMsg={'Remove offer?'}
         deleteAction={removeAction}
      />
   );
};

export default Remove;
