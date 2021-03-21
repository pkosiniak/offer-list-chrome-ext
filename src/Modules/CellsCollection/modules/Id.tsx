import React from 'react';
import { Offer } from '../../../types/job';
import TextInputCell from '../../Cells/BasicCell/TextInputCell/TextInputCell';
import { OFFER } from '../LocalStore/types';
import { DispatchType } from '../types';
import { CellWidth, CollectionProps } from '../../Cells/shared/types';

type IdProps = CollectionProps & Pick<Offer, 'id'>;

const Id = ({ dispatch, id }: IdProps) => (
   <TextInputCell
      readOnly
      initValue={id}
      setValue={(id) => dispatch({ type: OFFER.ID, id })}
      width={CellWidth.XSmall}
   />
);

export default Id;