import { isJustJoin } from '../helpers/helpers';

const justJoin: {
   mapElement?: Node | null,
   widgetStyle?: string | null,
   widget: HTMLDivElement | null
} = {
   mapElement: null,
   widgetStyle: null,
   widget: null,
};

const disposeMap = () => {
   const element = document.querySelector(
      '#root > div.css-1smbjja > div.css-1nluhym > div',
   );
   if (!element) return;
   justJoin.mapElement = element.cloneNode(true);
   document.querySelector(
      '#root > div.css-1smbjja > div.css-1nluhym',
   )?.removeChild(element);
};

const showMap = () => {
   justJoin.mapElement && document.querySelector(
      '#root > div.css-1smbjja > div.css-1nluhym',
   )?.appendChild(justJoin.mapElement);
};

export const disposeMapButton = () => {
   const button = document.createElement('button');
   let state = true;
   const timeout = setTimeout(() => {
      state && button.click();
   }, 5000);
   button.onclick = function () {
      state = !state;
      state ? showMap() : disposeMap();
      button.innerText = `🗺${state ? '❌' : '✔'}`;
      clearTimeout(timeout);
   };
   button.innerText = `🗺${state ? '❌' : '✔'}`;
   button.setAttribute('style', 'position: fixed; top: 152px; right: 0px; z-index: 10000;');
   document.body.appendChild(button);

};

const removeWidget = () => {
   const interval = setInterval(() => {
      justJoin.widget = document.querySelector('#chat-widget-container');
      if (justJoin.widget) {
         justJoin.widget && document.body.removeChild<HTMLDivElement>(justJoin.widget);
         clearInterval(interval);
      }
   }, 1000);

};

export const justJoinScripts = () => isJustJoin(() => {
   removeWidget();
   disposeMapButton();
});