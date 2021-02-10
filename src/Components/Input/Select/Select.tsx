import React, { ReactNode, SelectHTMLAttributes } from 'react';
import styled from 'styled-components';
import * as P from '../parts';

export type OptionType = {
   value: string,
   label: string,
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
   options?: OptionType[],
}


export const Option = styled.option`
   
`;

const Select: React.FC<SelectProps> = ({
   options,
   children,
   ...rest
}) => {
   return (
      <P.Select
         {...rest}
      >
         {children || options?.map(({label, value}, index) => (
            <Option
               key={index}
               value={value}
            >
               {label}
            </Option>
         ))}
      </P.Select>
   );
};

export default Select;
