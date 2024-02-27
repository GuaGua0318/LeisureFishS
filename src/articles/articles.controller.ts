import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { WriteArticleDto } from './dto/writearticle.dto';
import { Response } from 'express';
import { MapTestInterceptor } from 'src/map-test.interceptor';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post('write')
  @UseInterceptors(MapTestInterceptor)
  async write(
    @Body() article: WriteArticleDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const test = await this.articlesService.write(article);
  }

  @Get('getArticles')
  @UseInterceptors(MapTestInterceptor)
  async getArticles(
    @Body() article: WriteArticleDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const data = await this.articlesService.getArticles();
    return data;
  }
}
