import { css } from 'styled-components';
import { color } from './color';

interface ThemeProps {
   withBorder?: boolean,
   withScrollBar?: boolean,
}

export const border = css`
   border: 1px solid ${color.light};
   border-radius: 0px;
`;

export const borderDarker = css`
   border: 1px solid ${color.grayLight};
   border-radius: 0px;
`;

export const borderBold = css`
   border: 2px solid ${color.light};
   border-radius: 0px;
`;

export const borderDarkerBold = css`
   border: 2px solid ${color.grayLight};
   border-radius: 0px;
`;

export const borderLightBold = css`
   border: 2px solid ${color.lighter};
   border-radius: 0px;
`;

const composition = {
   darkLighter: css`
      background-color: ${color.grayDark};
      color: ${color.lightest};
   `,
   dark: css`
      background-color: ${color.dark};
      color: ${color.lightest};
   `,
   darker: css`
      background-color: ${color.darker};
      color: ${color.lightest};
   `,
};

const colorGradient = (direction: 0 | 90 | 180 | 270, procent: number) => `
   linear-gradient(${direction}deg, ${color.lighter} ${procent}%, red ${procent}%)
`;

export const scrollBar = css`
   ::-webkit-scrollbar {
      ${composition.darker}
   }

   ::-webkit-scrollbar-thumb{
      ${composition.darkLighter}
      /* color: ${colorGradient(0, 50)} */
   }

   ::-webkit-scrollbar-corner{
      ${composition.darkLighter}
   }

   ::-webkit-scrollbar-button {
      :single-button {
         border: 8.5px solid ${color.darker};
         :horizontal {
            :increment {
               border-left: 16px solid ${color.light};
               :hover{
                  border-left-color: ${color.lightest}
               }
            }
            :decrement {
               border-right: 16px solid ${color.light};
               border-left: 0px;
               :hover{
                  border-right-color: ${color.lightest}
               }
            }
         }
         :vertical {
            :increment {
               border-top: 16px solid ${color.light};
               border-bottom: 0px;
               :hover{
                  border-top-color: ${color.lightest}
               }
            }
            :decrement {
               border-bottom: 16px solid ${color.light};
               :hover{
                  border-bottom-color: ${color.lightest}
               }
            }
         }
      }
      
   }
   /* ::-webkit-scrollbar-track-piece {
      color: red;
      background-color: green;
   } */
`;


const darkLighter = ({ withBorder, withScrollBar = true }: ThemeProps) => css`
   ${withBorder && borderDarker}
   ${withScrollBar && scrollBar}
   ${composition.darkLighter}
`;
const dark = ({ withBorder, withScrollBar = true }: ThemeProps) => css`
   ${withBorder && border}
   ${withScrollBar && scrollBar}
   ${composition.dark}
`;
const darker = ({ withBorder, withScrollBar = true }: ThemeProps) => css`
   ${withBorder && border}
   ${withScrollBar && scrollBar}
   ${composition.darker}
`;

export const getTheme = (props?: ThemeProps) => ({
   darkLighter: darkLighter(props || {}),
   dark: dark(props || {}),
   darker: darker(props || {}),
});

export const theme = getTheme();
export const themeWithBorder = getTheme({ withBorder: true });


