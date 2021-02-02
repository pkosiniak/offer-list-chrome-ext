import * as T from './types';

const getInnerText: T.OnCallback = (
   element,
) => element?.textContent?.trim() || '';

const getChildrenInnerText = (
   element: Element,
) => Array.from(element.children).map(getInnerText);

const getInnerTextFromArray: T.OnAllCallback = (
   elements,
   getChildren,
   options,
) => {
   const { asArray = false, separator = ', ', removeFalsyElements = true } = options || {};
   const elementsArray = Array.from(elements);
   const textArray = !getChildren && elementsArray.map(getInnerText);
   const textTable = !!getChildren && elementsArray.map(getChildrenInnerText);
   if (textArray)
      return asArray
         ? textArray
         : textArray.reduce((prev, curr) => prev += curr + (curr && separator), '').trim();
   if (textTable)
      return removeFalsyElements
         ? textTable.map(table => table.filter(text => !!text))
         : textTable;
};

export const getText = (
   doc: HTMLHtmlElement | Document | Element,
   selector: T.SelectorType,
   options?: T.OnCallbackOptions,
) => selector.queryAll
   ? getInnerTextFromArray(
      doc.querySelectorAll(selector.queryAll),
      selector.getChildren,
      options,
   )
   : selector.query && getInnerText(
      doc.querySelector(selector.query),
   );


export const timeAgoToDate = (ago: string) => {
   const multi = +(ago.match(/\d+/)?.[0] || 0);
   const days = (ago.match(/day/) && 1)
      || (ago.match(/week/) && 7)
      || (ago.match(/month/) && 31)
      || (ago.match(/year/) && 365)
      || 0;
   const milis = days * multi * 1000 * 60 * 60 * 24;
   return new Date(Date.now() - milis);
};