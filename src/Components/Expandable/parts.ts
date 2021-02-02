import styled, { css } from 'styled-components';
import Button from '../Button/Button';

export interface WrapperProps {

}

export const Wrapper = styled.div<WrapperProps>`
   display: flex;
   flex-direction: column;
`;

export const HeaderWrapper = styled.div`
   display: flex;
`;

const expand = css`
   height: auto;
   visibility: visible;
`;

const collapse = css`
   height: 0;
   visibility: hidden;
`;

interface ContentProps {
   isExpanded: boolean,
   over?: boolean
}

export const Content = styled.div<ContentProps>`
   display: flex;
   ${({ isExpanded }) => isExpanded
      ? expand
      : collapse
};
   position: ${({ over }) => over ? 'absolute' : 'relative'};
`;

export const Toggle = styled(Button)`
   visibility: visible;
   /* display: flex; */
   /* flex-shrink: 1; */
`;