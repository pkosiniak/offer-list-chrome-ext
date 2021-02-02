import React from 'react';
import Box from '../../Components/Box/Box';
import JobTable from '../../Modules/JobTable/JobTable';
import { OriginType } from '../../types/message';
import * as P from './parts';

const NewTab = () => {

   return (
      <P.Wrapper id={'globalWrapper'}>
         <JobTable originType={OriginType.TableTab} />
      </P.Wrapper>
   );
};

export default NewTab;
