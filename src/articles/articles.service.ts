import { Injectable, Logger } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Articles } from './entities/article.entity';
import { EntityManager, Repository } from 'typeorm';
import { WriteArticleDto } from './dto/writearticle.dto';
import { User } from 'src/user/entities/user.entity';
import { AppDataSource } from '../data-source';

@Injectable()
export class ArticlesService {
  private logger = new Logger();
  @InjectEntityManager()
  private manager: EntityManager;
  // private userRepository: Repository<User>;

  async write(article: WriteArticleDto) {
    const user = await this.manager.findOne(User, {
      where: { username: article.username },
    });

    const e1 = new Articles();
    e1.title = article.title;
    e1.content = article.content;
    e1.user = user;
    try {
      await this.manager.save(Articles, [e1]);
      return '发布成功';
    } catch (error) {
      return error;
    }
  }

  async getArticles() {
    try {
      const articles = await this.manager.find(Articles);
      return articles;
    } catch (error) {
      return error;
    }
  }
}
