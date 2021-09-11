import { Controller, Get, Query } from '@nestjs/common';
import { ComicService } from '../service/comic.service';
import SearchAnimeItem from '../DTO/anime/SearchAnimeItem';
import Episode from 'src/DTO/anime/Episode';
@Controller('/comic')
export class ComicController {
  constructor(private readonly comicService: ComicService) {}

  @Get()
  async searchFiction(
    @Query('comicName') animeName: string,
  ): Promise<SearchAnimeItem[]> {
    const content = this.comicService.searchComicByName(animeName);
    return content;
  }

  @Get('/chapter')
  async getEpisodes(@Query('comicUrl') comicUrl: string): Promise<Episode[]> {
    const content = this.comicService.getChapterByUrl(comicUrl);
    return content;
  }
}
