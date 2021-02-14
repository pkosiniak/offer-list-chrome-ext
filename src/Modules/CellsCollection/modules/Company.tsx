import React, { useState } from 'react';
import { Offer } from '../../../types/job';
import { headingRowNames } from '../../common/common';
import TextInputCell from './Cells/TextInputCell';
import ExpandableCell from './Cells/ExpandableCell';
import TextAreaCellBody from './Cells/TextAreaCellBody';
import { OFFER } from '../LocalStore/types';
import { useMapPropsToState } from '../../../hooks/useMapPropsToState';
import { usePrevProps } from '../../../hooks/usePrevProps';
import { CellWidth, CollectionProps } from './Cells/shared/types';

type CompanyNameProps = CollectionProps & Pick<Offer, 'company'>

const Company = ({ company, dispatch, zIndex }: CompanyNameProps) => {
   const [location, setLocation] = useMapPropsToState(company?.location);
   const prevLocation = usePrevProps(company?.location);
   return [
      <TextInputCell
         key={headingRowNames.CompanyLocation}
         initValue={company?.name}
         setValue={(name) => dispatch({
            type: OFFER.COMPANY,
            company: {
               ...company,
               name,
            },
         })}
      />,
      <ExpandableCell
         key={headingRowNames.CompanyName}
         width={CellWidth.Medium}
         zIndex={zIndex || 1}
         onCancelClick={() => setLocation(prevLocation)}
         onOkClick={() => dispatch({
            type: OFFER.COMPANY,
            company: {
               ...company,
               location,
            },
         })}
      >
         {(expandableState) => (
            <TextAreaCellBody
               value={location}
               onChange={setLocation}
               expandableState={expandableState}
            />
         )}
      </ExpandableCell>,
   ];
};

export default Company;
