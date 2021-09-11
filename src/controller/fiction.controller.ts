import { Controller, Get, Query } from '@nestjs/common';
import { FictionService } from '../service/fiction.service';
import FictionCatalog from '../DTO/fiction/FictionCatalog';
import FictionSearchListItem from '../DTO/fiction/FictionSearchListItem';
import FictionContetn from 'src/DTO/comic/FictionContent';

@Controller('/fiction')
export class FictionController {
  constructor(private readonly fictionService: FictionService) {}

  @Get()
  async searchFiction(
    @Query('fictionName') fictionName: string,
  ): Promise<FictionSearchListItem[]> {
    const content = this.fictionService.searchFictionByName(fictionName);
    return content;
  }

  @Get('/catalog')
  async getCatalog(
    @Query('fictionCatalogLink') url: string,
  ): Promise<FictionCatalog[]> {
    const content = this.fictionService.getFictionCatalogByUrl(url);
    return content;
  }

  @Get('/content')
  async getFictioContent(
    @Query('contentLink') url: string,
  ): Promise<FictionContetn> {
    const content = this.fictionService.getFictionContentByUrl(url);
    return content;
  }
}
