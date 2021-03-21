import * as T from './types';

const matcher = (
   str: string | undefined,
   predict: string,
) => str?.toLocaleLowerCase().match(predict.toLowerCase());


const stringMatch = (
   str: string | undefined,
   predict: string,
) => !!matcher(str, predict);

const listMatch = <KT extends {}, T extends { [K in keyof KT]: string | undefined }>(
   list: T[] | undefined,
   params: (keyof T)[],
   predict: string,
) => !!list?.flatMap(
      item => params.map(
         param => !!matcher(item[param], predict),
      ),
   ).includes(true);

const dateStringMatch = (
   date: Date | undefined,
   predict: string,
) => {
   const dd = date?.getDate();
   const mm = date?.getMonth();
   const yy = date?.getFullYear();
   return !!matcher(
      `${dd || ''}.${mm !== undefined ? mm + 1 : ''}.${yy || ''}`,
      predict,
   );
};

export const filterBy: T.FilterByType = {
   ID: filter => offer => stringMatch(offer.id, filter),
   Links: filter => offer => listMatch(offer.links, ['name', 'url'], filter),
   CompanyName: filter => offer => stringMatch(offer.company?.name, filter),
   CompanyLocation: filter => offer => stringMatch(offer.company?.location, filter),
   PositionName: filter => offer => stringMatch(offer.position?.name, filter),
   PositionLevel: filter => offer => stringMatch(offer.position?.level, filter),
   Requirements: filter => offer => listMatch(offer.requirements, ['name'], filter),
   Salary: filter => offer => stringMatch(offer.salary, filter),
   Notes: filter => offer => stringMatch(offer.notes, filter),
   ExposeDate: filter => offer => dateStringMatch(offer.exposeDate, filter),
   ApplicationDate: filter => offer => dateStringMatch(offer.applicationDate, filter),
   Status: filter => offer => stringMatch(offer.status, filter),
};
