import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'Chat',
})
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: '消息内容',
  })
  message: string;

  @Column({
    comment: '发送人',
  })
  sendUser: string;

  @Column({
    comment: '接收人',
  })
  receiveUser: string;
}
