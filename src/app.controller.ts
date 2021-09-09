import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
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
}
