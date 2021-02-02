import React from 'react';
import Row from '../../../Components/Table/Row';
import { headingRowNames } from '../../common/common';

interface HeadingRowProps {

}



const HeadingRow: React.FC<HeadingRowProps> = ({ }) => {
   return (
      <Row
         isHeading
         columns={Object.values(headingRowNames)}
      />
   );
};

export default HeadingRow;
