import { Offer } from '../../../types/job';
import { getText, timeAgoToDate } from './querySelectors';
import * as T from './types';

export const justJoinQueries: { [K in T.selectorKeys]: T.SelectorType[] } = {
   companyName: [
      {
         query: '#root > div.css-1smbjja > div.css-1wz2v6p > div > div.css-1rkhkar > div.css-vuh3mm > div.css-1kgdb8a > div:nth-child(1) > a',
      },
   ],
   companyLocation: [
      {
         queryAll: '#root > div.css-1smbjja > div.css-1wz2v6p > div > div.css-1rkhkar > div.css-vuh3mm > div.css-14t1cx5 > div > div > div.css-1ex2t5a > div.css-env1z2 span',
      },
   ],
   positionName: [
      {
         query: '#root > div.css-1smbjja > div.css-1wz2v6p > div > div.css-1rkhkar > div.css-vuh3mm > div.css-14t1cx5 > div > div > div.css-1ex2t5a > div.css-1id4k1',
      },
   ],
   positionLevel: [
      {
         query: '#root > div.css-1smbjja > div.css-1wz2v6p > div > div.css-1rkhkar > div.css-vuh3mm > div.css-1kgdb8a > div:nth-child(3) > div.css-2ntsa1',
      },
   ],
   salary: [
      {
         queryAll: '#root > div.css-1smbjja > div.css-1wz2v6p > div > div.css-1rkhkar > div.css-vuh3mm > div.css-14t1cx5 > div > div > div.css-1ex2t5a > div.css-1wla3xl',
      },
      {
         queryAll: '#root > div.css-1smbjja > div.css-1wz2v6p > div > div.css-1rkhkar > div.css-vuh3mm > div.css-14t1cx5 > div > div.css-1wla3xl',
      },
   ],
   requirements: [
      {
         queryAll: '#root > div.css-1smbjja > div.css-1wz2v6p > div > div.css-1rkhkar > div:nth-child(2) > div:nth-child(1) > div.css-1xc9aks > div > div > div',
         getChildren: true,
      },
      {
         queryAll: '#root > div.css-1smbjja > div.css-1wz2v6p > div > div.css-1rkhkar > div:nth-child(2) > div:nth-child(2) > div.css-1xc9aks > div > div > div',
         getChildren: true,
      },
   ],
   exposeDate: [
      {
         query: '#root > div.css-1smbjja > div.css-1wz2v6p > div > div.css-1rkhkar > div.css-vuh3mm > div.css-1kgdb8a > div:nth-child(4) > div.css-2ntsa1',
      },
   ],
};

export const justJoinSelector = (
   doc: HTMLHtmlElement | Document | Element,
   selectors: T.SelectorType[],
   options?: T.OnCallbackOptions,
) => {
   const text = getText(doc, selectors[0], options);
   return text?.length ? text : (selectors.length > 1 && getText(doc, selectors[1], options));
};

export const getJustJoinOffer = (): Offer => ({
   company: {
      name: justJoinSelector(
         document,
         justJoinQueries.companyName,
      ) as string,
      location: justJoinSelector(
         document,
         justJoinQueries.companyLocation,
      ) as string,
   },
   position: {
      name: justJoinSelector(
         document,
         justJoinQueries.positionName,
      ) as string,
      level: justJoinSelector(
         document,
         justJoinQueries.positionLevel,
         { separator: ' / ' },
      ) as string,
   },
   salary: justJoinSelector(
      document,
      justJoinQueries.salary,
   ) as string,
   requirements: (justJoinSelector(
      document,
      justJoinQueries.requirements,
   ) as string[][]).map(req => ({
      name: req[0],
      level: req[1],
   })),
   links: [{
      url: window.location.href,
      name: window.location.hostname,
      isAvailable: true,
   }],
   exposeDate: timeAgoToDate(justJoinSelector(
      document,
      justJoinQueries.exposeDate,
   ) as string),
});
