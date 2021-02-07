import { backgroundMessageListener } from './modules/messageListener';
import { createAppStore } from './store/store';
import { getOfferList, getSettings } from './modules/storageWorker';

// eslint-disable-next-line no-console
console.log('\nThis is the background page.\n');

const store = createAppStore();
getOfferList(store.dispatch);
getSettings(store.dispatch);

backgroundMessageListener(store);
