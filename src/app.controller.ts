import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import FictionCatalog from './DTO/FictionCatalog';
import FictionSearchListItem from './DTO/FictionSearchListItem';

@Controller('/fiction')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async searchFiction(
    @Query('fictionName') fictionName: string,
  ): Promise<FictionSearchListItem[]> {
    const content = this.appService.searchFictionByName(fictionName);
    return content;
  }

  @Get('/catalog')
  async getCatalog(
    @Query('fictionCatalogLink') url: string,
  ): Promise<FictionCatalog[]> {
    const content = this.appService.getFictionCatalogByUrl(url);
    return content;
  }

  @Get('/content')
  async getFictioContent(@Query('contentLink') url: string): Promise<string> {
    const content = this.appService.getFictionContentByUrl(url);
    return content;
  }
}
