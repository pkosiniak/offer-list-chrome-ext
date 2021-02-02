

// type T =  //keyof ReturnType<typeof selectorKeys>
import { Offer } from '../../../types/job';
import { getText } from './querySelectors';
import * as T from './types';

export const noFluffQueries: { [K in T.selectorKeys]: T.SelectorType[] } = {
   companyName: [
      {
         query: '#postingCompanyUrl > dl > dd',
      },
   ],
   companyLocation: [
      {
         query: '#posting-header > div > div > a:nth-child(4) > dl > dd > nfj-postings-locations > div > span',
      },
      {
         queryAll: 'body > nfj-root > nfj-layout > nfj-main-content > div > div > div.main-content__outlet.mb-5.pb-5 > nfj-posting-details > common-main-loader > section > div.row.mb-3 > div.col-lg-4 > nfj-posting-apply-box > div > div.additional-info.border-top > div > nfj-postings-locations > div > ul > li',
      },
   ],
   positionName: [
      {
         query: '#posting-header > div > div > h1',
      },
   ],
   positionLevel: [
      {
         query: '#posting-header > div > div > a:nth-child(5) > dl > dd',
      },
      {
         queryAll: 'ody > nfj-root > nfj-layout > nfj-main-content > div > div > div.main-content__outlet.mb-5.pb-5 > nfj-posting-details > common-main-loader > section > div.row.mb-3 > div.col.mobile-no-padding.col-lg-8 > div.border > nfj-posting-seniority > div > div .active p',
      },
   ],
   salary: [
      {
         query: 'body > nfj-root > nfj-layout > nfj-main-content > div > div > nfj-fixed-banner > section > nfj-posting-bottom-bar > div > div > div.col-7.one-type.d-flex.justify-content-start.align-items-center > div > h4',
      },
      {
         query: 'body > nfj-root > nfj-layout > nfj-main-content > div > div > div.main-content__outlet.mb-5.pb-5 > nfj-posting-details > common-main-loader > section > div.row.mb-3 > div.col-lg-4 > nfj-posting-apply-box > div > div.top-section > nfj-posting-salaries > div > h4',
      },
   ],
   requirements: [
      {
         queryAll: '#posting-requirements .btn.btn-outline-success.btn-sm.text-truncate',
      },
   ],
   exposeDate: [],
};

export const noFluffSelector = (
   doc: HTMLHtmlElement | Document | Element,
   selectors: T.SelectorType[],
   options?: T.OnCallbackOptions,
) => getText(doc, selectors[0], options)
   || (selectors.length > 1 && getText(doc, selectors[1], options));

export const getNoFluffOffer = (): Offer => ({
   company: {
      name: noFluffSelector(document, noFluffQueries.companyName) as string, //getInnerText(document, querySelector.companyName),
      location: noFluffSelector(document, noFluffQueries.companyLocation) as string, // getInnerText(document, querySelector.companyLocation[0]),
   },
   position: {
      name: noFluffSelector(document, noFluffQueries.positionName) as string,
      level: noFluffSelector(document, noFluffQueries.positionLevel, { separator: ' / ' }) as string,
   },
   salary: noFluffSelector(document, noFluffQueries.salary) as string,
   requirements: (noFluffSelector(document, noFluffQueries.requirements, { asArray: true }) as string[]).map(req => ({ name: req })),
   links: [{ url: window.location.href, name: window.location.hostname, isAvailable: true }],
});