import { getSettingsListener } from '../../settings/settingsListener';
import { OriginType } from '../../types/message';
import { SettingsType } from '../../types/settings';
import { contentMessageListener, settingsWorker } from './modules/messageListener';
import { justJoinScripts } from './modules/scripts/justJoinScripts';
import { UUID } from './UUID';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

const settings: { current: SettingsType } = { current: {} };

const setSettings = (newSettings: SettingsType) => {
   settings.current = { ...newSettings };
};

settingsWorker(setSettings, UUID);
contentMessageListener(UUID, settings.current, setSettings);
justJoinScripts();