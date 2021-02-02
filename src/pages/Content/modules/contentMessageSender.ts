import { Message, MESSAGE_TYPE, OriginType } from '../../../types/message';
import { messageSender } from '../../../utils/messages/messageSender';
import { SendToOption } from '../../../utils/messages/types';
import { UUID } from '../UUID';


export const contentSendMessage = <T>(
   type: MESSAGE_TYPE, 
   message: T,
   requireException?: boolean,
) => messageSender(
      type,
      { originType: OriginType.Tab, uuid: UUID },
      message,
      SendToOption.Runtime,
   );
