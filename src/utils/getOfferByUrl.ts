import { OfferList } from '../types/job';

export const getOfferByUrl = (
   offerList: OfferList, url: string,
) => offerList.filter(offer => !!offer.links?.find(link => link.url === url));