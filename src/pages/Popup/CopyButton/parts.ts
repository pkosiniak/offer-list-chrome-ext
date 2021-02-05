import Button from '../../../Components/Button/Button';
import styled from 'styled-components';

export const Page = styled.span`
   position: relative;
   display: flex;
   flex: 1;
`;

export const Copy = styled.span`
   position: absolute;
   margin-top: 5px;
   margin-left: 4px;
   /* margin-left: -12px; */
`;

export const OK = styled.span`
   position: absolute;
   /* margin-left: -18px; */
   color: #009900;
   font-weight: bolder;
   font-size: 20px;
`;

export const CopyButton = styled(Button)`
   width: 52px;
   height: 52px;
   font-size: 18px;
   align-items: start;
`;
