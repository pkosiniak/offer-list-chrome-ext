import React from 'react';
import { Offer } from '../../../types/job';
import TextInputCell from './Cells/TextInputCell';
import { OFFER } from '../LocalStore/types';
import { DispatchType } from '../types';
import { CollectionProps } from './Cells/shared/types';

type SalaryProps = CollectionProps & Pick<Offer, 'salary'>

const Salary = ({ dispatch, salary }: SalaryProps) => {
   return (
      <TextInputCell
         initValue={(salary || '').toString()}
         setValue={salary => dispatch({
            type: OFFER.SALARY,
            salary,
         })}
      />
   );
};

export default Salary;
