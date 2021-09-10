import { Injectable } from '@nestjs/common';
import SearchAnimeItem from 'src/DTO/anime/SearchAnimeItem';
import { getSearchInfoList } from 'src/spider/anime';

@Injectable()
export class AnimeService {
  async searchAnimeByName(animeName: string): Promise<SearchAnimeItem[]> {
    const res = await getSearchInfoList(animeName);

    return res;
  }
}
