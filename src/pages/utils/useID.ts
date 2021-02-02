import { useState } from 'react';

type UseIDArgs = {
   prefix?: string,
   id?: string
}

export const useID = ({ id, prefix = 'id' }: UseIDArgs) => {
   const [ID] = useState(id || prefix + '_' + Math.floor(Math.random() * 10 ** 8));
   return ID;
};