import styled from 'styled-components';
import { color } from '../../Styles/color';
import { font } from '../../Styles/font';

export const Link = styled.a`
   ${font.medium}
   /* unvisited link */
   :link {
      color: ${color.link};
   }

   /* visited link */
   :visited {
      color: ${color.visited};
   }

   /* mouse over link */
   :hover {
      /* color: hotpink; */
   }

   /* selected link */
   :active {
      color: ${color.active};
   }
`;