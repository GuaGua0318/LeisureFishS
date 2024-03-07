import { IsNotEmpty } from 'class-validator';

export class SendChatDto {
  @IsNotEmpty()
  message: string;
  @IsNotEmpty()
  receiveUser: string;
  @IsNotEmpty()
  sendUser: string;
}
