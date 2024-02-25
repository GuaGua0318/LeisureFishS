import { IsNotEmpty } from "class-validator";

export class WriteArticleDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  content: string;
}
