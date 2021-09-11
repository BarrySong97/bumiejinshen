import { Injectable } from '@nestjs/common';
import Chapter from '../DTO/comic/Chapter';
import SearchComicItem from '../DTO/comic/SearchComicItem';
import { getSearchInfoList, getChapters } from '../spider/comic';

@Injectable()
export class ComicService {
  async searchComicByName(url: string): Promise<SearchComicItem[]> {
    const res = await getSearchInfoList(url);

    return res;
  }

  async getChapterByUrl(url: string): Promise<Chapter[]> {
    const res = await getChapters(url);

    return res;
  }
}
