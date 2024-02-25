import { Injectable, Logger } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Articles } from './entities/article.entity';
import { EntityManager, Repository } from 'typeorm';
import { WriteArticleDto } from './dto/writearticle.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ArticlesService {
  private logger = new Logger();
  @InjectEntityManager()
  private manager: EntityManager;
  // private userRepository: Repository<User>;

  async write(article: WriteArticleDto) {
    const test = await this.manager.findOne(User, {
      where: { username: '123456' },
    });
    return test;
  }
}
