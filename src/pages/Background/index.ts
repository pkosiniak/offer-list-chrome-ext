/* eslint-disable no-console */
import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';
import { backgroundMessageListener } from './modules/messageListener';
import { createAppStore } from './store/store';
import { getOfferList } from './modules/storageWorker';
import { UUID } from './UUID';

console.log('This is the background page.');
console.log('Put the background scripts here.');

const store = createAppStore();
getOfferList(store.dispatch);

backgroundMessageListener(store, UUID);