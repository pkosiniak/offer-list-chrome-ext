/* eslint-disable no-console */
export const storageLogger = (
   type: 'local' | 'sync',
   method: 'get' | 'set',
   name: string,
   object: any,
) => () => console.log(
   '%c' + `storage.${type}.${method}( ${name} )`.toUpperCase(),
   'color: #a7f',
   object,
);