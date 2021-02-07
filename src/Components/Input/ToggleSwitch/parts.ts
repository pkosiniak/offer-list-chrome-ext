import styled, { css } from 'styled-components';
import { color } from '../../../Styles/color';

const size = 20;
const borderSize = 4;

export type IsCheckedType = {
   isChecked: boolean
}

const onCheckedChangeLabel = (
   { isChecked }: IsCheckedType,
) => isChecked
   ? css`
         border-color: ${color.gray};
         background-color: ${color.gray};
      `
   : css`
         border-color: ${color.darker};
         background-color: ${color.darker};
      `;

export const LabelWrapper = styled.label<IsCheckedType>`
   height: ${size}px;
   width: ${2 * size }px;
   border: ${borderSize}px solid;
   ${onCheckedChangeLabel}
   transition: all 1s ease;
   /* margin-left: 8px; */
`;

export const HiddenInput = styled.input`
   display: none;
`;

const onCheckedChangeSlider = (
   { isChecked }: IsCheckedType,
) => isChecked
   ? css`
         /* margin-left: -${borderSize}px; */
      `
   : css`
         margin-left: -${size}px;
      `;

export const Slider = styled.span<IsCheckedType>`
   position: absolute;
   height: ${size}px;
   width: ${size}px;
   ${onCheckedChangeSlider}
   background-color: ${color.dark};
   transition: all 0.5s ease;
`;