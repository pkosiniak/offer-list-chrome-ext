import { Action } from 'redux';
import { SettingsType } from '../../../../types/settings';

export enum SETTINGS_STORE {
   GET = 'SETTINGS_STORE_GET',
   SET = 'SETTINGS_STORE_SET',
   AUTO_TOGGLE = 'SETTINGS_STORE_AUTO_TOGGLE'
}

export interface SettingsStoreState extends SettingsType { }

export type SettingsStoreAction = SettingsStoreState & Action<SETTINGS_STORE>;