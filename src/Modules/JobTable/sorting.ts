import { OrderType, SortOrder, SortByType } from './types';


const compareStrings = (
   fst?: string, snd?: string,
) => (fst || '').toLowerCase().localeCompare((snd || '').toLowerCase());

const inOrder = (
   order: OrderType,
   fst?: string,
   snd?: string,
) => order === SortOrder.ASC
   ? compareStrings(fst, snd)
   : compareStrings(snd, fst);

const getTime = (toMilis: any) => toMilis ? new Date(toMilis).getTime() : 0;

const compareDates = (
   order: OrderType,
   fst?: Date,
   snd?: Date,
) => order === SortOrder.ASC
   ? getTime(fst) - getTime(snd)
   : getTime(snd) - getTime(fst);

const compareNumbers = (
   order: OrderType,
   fst?: number,
   snd?: number,
) => order === SortOrder.ASC
   ? (fst || 0) - (snd || 0)
   : (snd || 0) - (fst || 0);

export const sortBy: SortByType = {
   ID: (order) => (fst, snd) => inOrder(order, fst.id, snd.id),
   Links: (order) => (fst, snd) => inOrder(order, fst.links?.[0].name, snd.links?.[0].name),
   CompanyName: (order) => (fst, snd) => inOrder(order, fst.company?.name, snd.company?.name),
   CompanyLocation: (order) => (fst, snd) => inOrder(order, fst.company?.location, snd.company?.location),
   PositionName: (order) => (fst, snd) => inOrder(order, fst.position?.name, snd.position?.name),
   PositionLevel: (order) => (fst, snd) => inOrder(order, fst.position?.level, snd.position?.level),
   Requirements: (order) => (fst, snd) => compareNumbers(order, fst.requirements?.length, snd.requirements?.length),
   Salary: (order) => (fst, snd) => inOrder(order, fst.salary, snd.salary),
   Notes: (order) => (fst, snd) => inOrder(order, fst.notes, snd.notes),
   ExposeDate: (order) => (fst, snd) => compareDates(order, fst.exposeDate, snd.exposeDate),
   ApplicationDate: (order) => (fst, snd) => compareDates(order, fst.applicationDate, snd.applicationDate),
   Status: (order) => (fst, snd) => inOrder(order, fst.status, snd.status),
};

