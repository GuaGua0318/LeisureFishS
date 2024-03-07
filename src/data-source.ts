import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Articles } from './articles/entities/article.entity';
import { User } from './user/entities/user.entity';
import { Chat } from './chat/entities/chat.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'shb123456',
  database: 'login_test',
  synchronize: true,
  logging: true,
  entities: [User, Articles, Chat],
  poolSize: 10,
  connectorPackage: 'mysql2',
  extra: {
    authPlugin: 'sha256_password',
  },
});
