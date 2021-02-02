import { contentMessageListener } from './modules/messageListener';
import { justJoinScripts } from './modules/scripts/justJoinScripts';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

contentMessageListener();
justJoinScripts();