import React, { useState } from 'react';
import { Offer } from '../../../types/job';
import { headingRowNames } from '../../common/common';
import TextInputCell from './Cells/TextInputCell';
import ExpandableCell from './Cells/ExpandableCell';
import TextAreaCellBody from './Cells/TextAreaCellBody';
import { OFFER } from '../LocalStore/types';
import { useMapPropsToState } from '../../../hooks/useMapPropsToState';
import { usePrevProps } from '../../../hooks/usePrevProps';
import { expandableAction } from './Cells/localStore/actions';
import { CollectionProps } from './Cells/shared/types';

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
         zIndex={zIndex || 1}
         onCancelClick={() => setLocation(prevLocation)}
         onOkClick={() => dispatch({
            type: OFFER.COMPANY,
            company: {
               ...company,
               location,
            },
         })}
         key={headingRowNames.CompanyName}
      >
         {({ isDisabled, isExpanded, isActive, dispatch, zIndex }) => (
            <TextAreaCellBody
               zIndex={zIndex}
               value={location}
               onChange={setLocation}
               isDisabled={isDisabled}
               isExpanded={isExpanded}
               isActive={isActive}
               setIsActive={(value) => dispatch(expandableAction.setIsActive(value))}
            />
         )}
      </ExpandableCell>,
   ];
};

export default Company;
