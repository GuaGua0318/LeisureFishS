import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { WriteArticleDto } from './dto/writearticle.dto';
import { Response } from 'express';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post('write')
  async write(
    @Body() article: WriteArticleDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const test = await this.articlesService.write(article);
    console.log('----test', test);
  }
}
