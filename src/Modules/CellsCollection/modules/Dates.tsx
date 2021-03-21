import React, { useRef } from 'react';
import { Offer } from '../../../types/job';
import { headingRowNames } from '../../common/common';
import TextInputCell from '../../Cells/BasicCell/TextInputCell/TextInputCell';
import { OFFER } from '../LocalStore/types';
import { DispatchType } from '../types';
import DateCell from '../../Cells/BasicCell/DateCell/DateCell';
import { CellWidth, CollectionProps } from '../../Cells/shared/types';

type DateProps = CollectionProps & Pick<Offer, 'exposeDate' | 'applicationDate'>

export const Dates = ({
   dispatch,
   applicationDate,
   exposeDate,
}: DateProps) => [
   <DateCell
      key={headingRowNames.ExposeDate}
      width={CellWidth.Medium}
      initValue={exposeDate && new Date(exposeDate) || void 0}
      setValue={exposeDate => dispatch({
         type: OFFER.EXPOSE_DATE,
         exposeDate,
      })}
   />,
   <DateCell
      key={headingRowNames.ApplicationDate}
      width={CellWidth.Medium}
      initValue={applicationDate && new Date(applicationDate) || void 0}
      setValue={applicationDate => dispatch({
         type: OFFER.APPLICATION_DATE,
         applicationDate,
      })}
   />,
];

// date.valueAsDate = new Date()

// const ref = useRef<HTMLInputElement>(null)
// ref.current?.valueAsDate