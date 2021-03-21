import React from 'react';
import { Offer } from '../../../types/job';
import { headingRowNames } from '../../common/common';
import TextInputCell from '../../Cells/BasicCell/TextInputCell/TextInputCell';
import { OFFER } from '../LocalStore/types';
import { DispatchType } from '../types';
import { CellWidth, CollectionProps } from '../../Cells/shared/types';

type PositionProps = CollectionProps & Pick<Offer, 'position'> 

const Position = ({ position, dispatch }: PositionProps) => [
   <TextInputCell
      key={headingRowNames.PositionName}
      initValue={position?.name}
      setValue={(name) => dispatch({
         type: OFFER.POSITION,
         position: {
            ...position,
            name,
         },
      })}
      width={CellWidth.Large}
   />,
   <TextInputCell
      key={headingRowNames.PositionLevel}
      initValue={position?.level}
      setValue={(level) => dispatch({
         type: OFFER.POSITION,
         position: {
            ...position,
            level,
         },
      })}
      width={CellWidth.Small}
   />,
];

export default Position;
