import { IsNotEmpty } from 'class-validator';

export class WriteArticleDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  content: string;
}
