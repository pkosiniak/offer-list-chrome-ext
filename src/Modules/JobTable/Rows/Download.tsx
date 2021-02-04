import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../../../Components/Button/Button';
import { OfferList, ExportOfferList } from '../../../types/job';


export const DownloadArrow = styled.div`
   transform: rotate(90deg) scale(1,2);
   font-stretch: ultra-expanded;
   margin-right: 4px;
`;

export const DownloadButton = styled(Button)`
   display: flex;
`;

interface DownloadProps {
   offerList: OfferList
}
export const Download: React.FC<DownloadProps> = ({
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
         <DownloadButton
            onClick={downloadBackup}
         >
            <DownloadArrow>
               {'⇥'}
            </DownloadArrow>
            {'BACKUP'}
         </DownloadButton>
         <a ref={ref} style={{ display: 'none' }} />
      </>
   );
};