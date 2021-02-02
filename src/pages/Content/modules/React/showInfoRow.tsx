import React from 'react';
import { render } from 'react-dom';
import { isJustJoin, isNoFluff } from '../helpers/helpers';
import OfferInfoRow from './OfferInfoRow';
import { pushHeight } from './parts';


const pushDownNoFLuff = () => {
   const nav = document.querySelector(
      'body > nfj-root > nfj-layout > nfj-navbar > header > nav',
   );
   nav?.setAttribute('style', `top: ${pushHeight}px`);
   document.addEventListener('scroll', (event => {
      window.scrollY > 73 &&
         document.querySelector('#floatingBar')?.setAttribute(
            'style', `top: ${pushHeight}px`,
         );
   }));
};

const pushDownJustJoin = () => {
   document.getElementById('root')?.setAttribute('style', `margin-top: ${pushHeight}px`);
   document.body.setAttribute('style', `height: calc(100% - ${pushHeight}px)`);
};

export const showOfferRow = () => {
   const extensionContainer = document.createElement('div');
   extensionContainer.id = 'extensionContainer';

   document.querySelector('body')
      ?.prepend(extensionContainer);

   isNoFluff(pushDownNoFLuff);
   isJustJoin(pushDownJustJoin);

   const url = window.location.href;

   render(<OfferInfoRow url={url} />, extensionContainer);
};