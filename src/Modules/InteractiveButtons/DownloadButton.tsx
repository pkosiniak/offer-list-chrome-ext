import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../../Components/Button/Button';
import { OfferList, ExportOfferList } from '../../types/job';
import * as P from './parts';



interface DownloadButtonProps {
   offerList: OfferList
}
export const DownloadButton: React.FC<DownloadButtonProps> = ({
   offerList,
}) => {
   const ref = useRef<HTMLAnchorElement>(null);
   const downloadBackup = () => {
      const note = prompt('Add note?');
      const timestamp = new Date(Date.now());
      const dateName = `${timestamp.toLocaleDateString().replaceAll('.', '-')}_${timestamp.getHours()}-${timestamp.getMinutes()}`;
      const storedOfferList: ExportOfferList = {
         offerList,
         meta: {
            note,
            timestamp: timestamp.getTime(),
         },
      };
      const file = new Blob(
         [JSON.stringify(storedOfferList)],
         { type: 'application/json' },
      );
      const element = document.createElement('a');
      element.href = URL.createObjectURL(file);
      element.download = `Job_Offer_List_Backup_${dateName}.json`;
      ref.current?.appendChild(element);
      element.click();
      ref.current?.removeChild(element);
   };
   return (
      <>
         <P.DownloadButton
            onClick={downloadBackup}
         >
            <P.DownloadArrow>
               {'⇥'}
            </P.DownloadArrow>
            {'BACKUP'}
         </P.DownloadButton>
         <a ref={ref} style={{ display: 'none' }} />
      </>
   );
};