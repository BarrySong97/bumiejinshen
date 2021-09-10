import { Injectable } from '@nestjs/common';
import Episode from 'src/DTO/anime/Episode';
import SearchAnimeItem from '../DTO/anime/SearchAnimeItem';
import { getSearchInfoList, getEpisodes } from '../spider/anime';

@Injectable()
export class AnimeService {
  async searchAnimeByName(animeName: string): Promise<SearchAnimeItem[]> {
    const res = await getSearchInfoList(animeName);

    return res;
  }

  async getEpisodesByUrl(animeUrl: string): Promise<Episode[]> {
    const res = await getEpisodes(animeUrl);

    return res;
  }
}
