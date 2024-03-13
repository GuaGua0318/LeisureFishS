import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { UseInterceptors } from '@nestjs/common';
import { MapTestInterceptor } from 'src/map-test.interceptor';
import { SendChatDto } from './dto/send-chat.dto';
import { ReceiveChatDto } from './dto/receive-chat.dto';

@WebSocketGateway(3001, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
  // namespace: 'chat',
})
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}

  @SubscribeMessage('sendMessage')
  @UseInterceptors(MapTestInterceptor)
  async create(@MessageBody() sendChatDto: SendChatDto) {
    try {
      const result = await this.chatService.sendMessage(sendChatDto);
      return result;
    } catch (error) {
      return error;
    }
  }

  @SubscribeMessage('isOnline')
  @UseInterceptors(MapTestInterceptor)
  async findAll() {
    // return this.chatService.isOnline();
    try {
      const result = await this.chatService.isOnline();
      return result;
    } catch (error) {
      return error;
    }
  }

  @SubscribeMessage('getMessage')
  async findMessage(
    @MessageBody() @MessageBody() receiveChatDto: ReceiveChatDto,
  ) {
    // return this.chatService.find(id);
    try {
      const result = await this.chatService.receiveMessage(receiveChatDto);
      return result;
    } catch (error) {
      return error;
    }
  }

  // @SubscribeMessage('updateChat')
  // update(@MessageBody() updateChatDto: UpdateChatDto) {
  //   return this.chatService.update(updateChatDto.id, updateChatDto);
  // }

  // @SubscribeMessage('removeChat')
  // remove(@MessageBody() id: number) {
  //   return this.chatService.remove(id);
  // }
}
