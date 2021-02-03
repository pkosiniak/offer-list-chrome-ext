import { useState } from 'react';
import { UUIDType } from '../types/message';
import { v4 as getUUID } from 'uuid';

export const useUUID = (uuid?: UUIDType): UUIDType => {
   const [UUID] = useState<UUIDType>(uuid || getUUID());
   return UUID;
};