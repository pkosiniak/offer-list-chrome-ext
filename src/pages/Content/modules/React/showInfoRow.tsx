import React from 'react';
import { render } from 'react-dom';
import { SettingsType } from '../../../../types/settings';
import { isJustJoin, isNoFluff } from '../helpers/helpers';
import OfferInfoRow from './OfferInfoRow';
import { pushHeight } from './parts';


const pushDownNoFLuff = (
   showInfoRow: boolean,
) => {
   const nav = document.querySelector(
      'body > nfj-root > nfj-layout > nfj-navbar > header > nav',
   );
   nav?.setAttribute('style', `top: ${showInfoRow ? pushHeight : 0}px`);
   const container = document.querySelector('body > nfj-root > nfj-layout > nfj-main-content > div > div > div.main-content__outlet.mb-5.pb-5');
   const container2 = document.querySelector('body > nfj-root > nfj-layout > nfj-main-content > div > div > div.main-content__outlet.mb-5.pb-5 > nfj-posting-details');
   container?.setAttribute('style', `margin-top: ${showInfoRow ? pushHeight : 0}px`);
   container2?.setAttribute('style', `margin-top: ${showInfoRow ? pushHeight : 0}px`);
   const button = document.createElement('button');
   button.innerText = '✖ Modal';
   button.setAttribute('style', 'position: fixed; right: 20px; top: 200px; z-index: 10000; font-size: 10px;');
   button.onclick = () => {
      (document.querySelector('#btn-close-modal-external') as HTMLButtonElement)?.click();
   };
   showInfoRow
      ? document.body.appendChild(button)
      : document.body.removeChild(button);
   const listener = (() => {
      window.scrollY > 73 &&
         document.querySelector('#floatingBar')?.setAttribute(
            'style', `top: ${pushHeight}px`,
         );
   });
   showInfoRow
      ? document.addEventListener('scroll', listener)
      : document.removeEventListener('scroll', listener);
};

const pushDownJustJoin = (
   showInfoRow: boolean,
) => {
   document.getElementById('root')
      ?.setAttribute('style', `margin-top: ${showInfoRow ? pushHeight : 0}px`);
   document.body
      .setAttribute('style', `height: calc(100% - ${showInfoRow ? pushHeight : 0}px)`);
};

export const showOfferRow = (
   uuid: string,
   showInfoRow: boolean,
   settings: SettingsType,
) => {
   isNoFluff(() => pushDownNoFLuff(showInfoRow));
   isJustJoin(() => pushDownJustJoin(showInfoRow));

   const container = document.getElementById('extensionContainer');
   container?.setAttribute('style', `display: ${showInfoRow ? 'block' : 'none'};`);

   if (!showInfoRow || container)
      return;

   const extensionContainer = document.createElement('div');
   extensionContainer.id = 'extensionContainer';
   extensionContainer.setAttribute('style', 'display: block;');
   document.body.prepend(extensionContainer);

   const url = window.location.href;
   render(
      <OfferInfoRow
         url={url}
         uuid={uuid}
         settings={settings}
         showInfoRow={showInfoRow}
      />,
      extensionContainer,
   );
};