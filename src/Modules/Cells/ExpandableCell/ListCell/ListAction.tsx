import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import OkButton from '../../../InteractiveButtons/OkButton';
import { ActionButtonType } from '../../../InteractiveButtons/types';
// import OkButton from './components/OkButton';
// import LinkListItem from './LinkListItem';
// import { OfferLink } from '../../../../types/job';
// import * as T from './localStore/types';
// import { ChildrenExportType } from './shared/types';
import * as P from '../../shared/parts';
// import { ActionButtonType } from './components/types';

interface LinkListActionsProps extends Omit<
   ActionButtonType, 'text' | 'onClickCallback'
   > {
   newItem: boolean,
   onAddClick: () => void,
   onOkClick: () => void,
   // showAddButton: boolean,
   // setShowAddButton: React.Dispatch<React.SetStateAction<boolean>>
}
const ListActions: React.FC<LinkListActionsProps> = ({
   children,
   newItem,
   onAddClick,
   onOkClick,
   // showAddButton,
   // setShowAddButton,
   isActive,
   isDisabled,
   setIsDisabled,
}) => {
   return (
      <>
         {newItem && children}
         <P.SpaceWrapper>
            {!newItem && (
               <P.AddButton
                  onClick={() => {
                     onAddClick();
                     // setShowAddButton(false);
                  }}
                  text={'ADD'}
               />
            )}
            <OkButton
               isDisabled={isDisabled}
               isActive={isActive}
               setIsDisabled={setIsDisabled}
               text='OK ✔'
               onClickCallback={() => {
                  // setShowAddButton(true);
                  onOkClick();
               }}
            />
         </P.SpaceWrapper>
      </>
   );
};

export default ListActions;
