import { Controller, Get, Query } from '@nestjs/common';
import { AnimeService } from '../service/anime.service';
import SearchAnimeItem from '../DTO/anime/SearchAnimeItem';
import Episode from 'src/DTO/anime/Episode';
@Controller('/anime')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Get()
  async searchFiction(
    @Query('animeName') animeName: string,
  ): Promise<SearchAnimeItem[]> {
    const content = this.animeService.searchAnimeByName(animeName);
    return content;
  }

  @Get('/episedes')
  async getEpisodes(@Query('animeUrl') animeUrl: string): Promise<Episode[]> {
    const content = this.animeService.getEpisodesByUrl(animeUrl);
    return content;
  }
}
