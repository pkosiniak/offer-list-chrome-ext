import React from 'react';
import { CellWidth } from '../../Modules/CellsCollection/modules/Cells/shared/types';
import HeadingCell from '../../Modules/Heading/HeadingCell';
import { SortDirection } from '../../Modules/Heading/types';
import './Options.css';

interface Props {
}

const Options: React.FC<Props> = ({ }) => {
   return (
      <div className="OptionsContainer">
         <HeadingCell
            text="APPLICATION"
            width={CellWidth.Medium}
            widthRange={{
               min: CellWidth.Small,
               max: CellWidth.Large,
               default: CellWidth.Medium,
            }}
            setFilter={() => { }}
            sort={SortDirection.NONE}
            setSort={() => { }}
         />
      </div>
   );
};

export default Options;
