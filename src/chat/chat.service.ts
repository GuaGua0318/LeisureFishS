import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { SendChatDto } from './dto/send-chat.dto';
import { Chat } from './entities/chat.entity';
import { ReceiveChatDto } from './dto/receive-chat.dto';

@Injectable()
export class ChatService {
  @InjectEntityManager()
  private manager: EntityManager;
  async sendMessage(sendChatDto: SendChatDto) {
    const message = new Chat();
    message.sendUser = sendChatDto.sendUser;
    message.receiveUser = sendChatDto.receiveUser;
    message.message = sendChatDto.message;
    try {
      await this.manager.save(Chat, message);
      return '发送成功';
    } catch (error) {
      return error;
    }
  }

  async receiveMessage(receiveChatDto: ReceiveChatDto) {
    const message = await this.manager.find(Chat, {
      where: {
        sendUser: receiveChatDto.sendUser,
        receiveUser: receiveChatDto.receiveUser,
      },
    });
    const message2 = await this.manager.find(Chat, {
      where: {
        sendUser: receiveChatDto.receiveUser,
        receiveUser: receiveChatDto.sendUser,
      },
    });
    return [...message, ...message2].sort((a, b) => a.id - b.id);
  }

  async isOnline() {
    const user = await this.manager.find(User);
    return user;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} chat`;
  // }

  // update(id: number, updateChatDto: UpdateChatDto) {
  //   return `This action updates a #${id} chat`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} chat`;
  // }
}
