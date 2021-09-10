import { Controller, Get, Query } from '@nestjs/common';
import { AnimeService } from '../service/anime.service';
import SearchAnimeItem from '../DTO/anime/SearchAnimeItem';
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
}
