import { IsNotEmpty } from 'class-validator';

export class ReceiveChatDto {
  @IsNotEmpty()
  receiveUser: string;
  @IsNotEmpty()
  sendUser: string;
}
