import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Articles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    comment: '标题',
  })
  title: string;

  @Column({
    length: 50,
    comment: '内容',
  })
  content: string;

  @ManyToOne(() => User, {
    cascade: true,
  })
  user: User;
}
