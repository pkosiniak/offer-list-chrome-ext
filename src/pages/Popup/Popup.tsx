import React, { useEffect, useRef, useState } from 'react';
import { MESSAGE_TYPE, OriginType, SenderType } from '../../types/message';
import { messageSender } from '../../utils/messages/messageSender';
import { useUUID } from '../../hooks/useUUID';
import './Popup.css';
import * as P from './parts';
import TextInput from '../../Components/Input/TextInput/TextInput';
import CopyButton from './CopyButton/CopyButton';
import { messageListener } from '../../utils/messages/messageListener';
import { SendToOption } from '../../utils/messages/types';
import { getSettingsListener } from '../../settings/settingsListener';
import { SettingsType } from '../../types/settings';
import { usePrevProps } from '../../hooks/usePrevProps';
import CopyRow from './modules/CopyRow';
import ExpandableCell from '../../Modules/Cells/ExpandableCell/ExpandableCell';

const useSender = (originType: OriginType): SenderType => {
   const UUID = useUUID();
   return {
      uuid: UUID,
      originType,
   };
};

const code = 'document.getElementById("extensionContainer")?.style.display';

const Popup = () => {

   const [isShowOffer, setIsShowOffer] = useState(false);
   useEffect(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, result => {
         const id = result[0].id;
         id && chrome.tabs.executeScript({ code }, result => {
            setIsShowOffer(!!result[0] && result[0] === 'block');
         });
      });
   }, []);

   const sender = useSender(OriginType.Popup);

   const sendShowOfferInfoRow = (prev: boolean) => {
      messageSender(
         MESSAGE_TYPE.TOGGLE_OFFER_INFO_ROW,
         sender,
         !prev,
         { toActiveTab: true },
      );
      setIsShowOffer(!prev);
   };

   const [settings, setSettings] = useState<SettingsType>();
   useEffect(() => {
      return getSettingsListener((settings) => setSettings(settings), sender);
   }, []);

   const sendAutoToggle = (
      current: SettingsType,
   ) => {
      messageSender(
         MESSAGE_TYPE.SETTINGS_AUTO_TOGGLE,
         sender,
         !current.autoToggle,
         SendToOption.Runtime,
      );
      setSettings({ ...current, autoToggle: !current.autoToggle });
   };


   const [linkedInCopy, setLinkedInCopy] = useState(false);
   const [githubCopy, setGithubCopy] = useState(false);

   // console.log('settings, prevSettings', settings, prevSettings);
   return (
      <P.Wrapper v>
         <P.LineWrapper>
            <P.StyledToggleSwitch
               label={'TOGGLE OFFER ROW'}
               inputPosition={'insideAfter'}
               isChecked={isShowOffer}
               setIsChecked={() => sendShowOfferInfoRow(isShowOffer)}
               wrapperProps={{ className: 'toggleSwitchWrapper' }}
               labelProps={{ className: 'toggleSwitchLabel' }}
            />
         </P.LineWrapper>
         <P.LineWrapper>
            <P.StyledToggleSwitch
               label={'AUTO TOGGLE OFFER ROW'}
               inputPosition={'insideAfter'}
               isChecked={!!settings?.autoToggle}
               setIsChecked={() => settings && sendAutoToggle(settings)}
               wrapperProps={{ className: 'toggleSwitchWrapper' }}
               labelProps={{ className: 'toggleSwitchLabel' }}
            />
         </P.LineWrapper>
         <CopyRow
            label={'LinkedIn'}
            text={'https://www.linkedin.com/in/pawel-kosiniak/'}
            isCopied={linkedInCopy}
            setIsCopied={() => {
               setLinkedInCopy(true);
               setGithubCopy(false);
            }}
         />
         <CopyRow
            label={'GitHub'}
            text={'https://github.com/pkosiniak'}
            isCopied={githubCopy}
            setIsCopied={() => {
               setLinkedInCopy(false);
               setGithubCopy(true);
            }}
         />
      </P.Wrapper>
   );
};

export default Popup;
