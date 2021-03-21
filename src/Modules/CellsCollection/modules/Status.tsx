import React from 'react';
import { ApplicationStatus, Offer } from '../../../types/job';
import { OFFER } from '../LocalStore/types';
import { DispatchType } from '../types';
import SelectCell from '../../Cells/BasicCell/SelectCell/SelectCell';
import { CellWidth, CollectionProps } from '../../Cells/shared/types';

type StatusProps = CollectionProps & Pick<Offer, 'status'>

const Status = ({ dispatch, status }: StatusProps) => {
   return (
      <SelectCell
         initValue={(status || '').toString()}
         setValue={status => dispatch({
            type: OFFER.STATUS,
            status: status as ApplicationStatus,
         })}
         options={
            Object.values(ApplicationStatus).map(stat => ({
               label: stat,
               value: stat,
            }))
         }
         width={CellWidth.Medium}
      />
   );
};

export default Status;
