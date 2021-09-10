import { Injectable } from '@nestjs/common';
import FictionCatalog from '../DTO/FictionCatalog';
import FictionSearchListItem from '../DTO/FictionSearchListItem';
import {
  getSearchInfoList,
  getFictionCatalog,
  getFictionContent,
} from '../spider/fiction';

@Injectable()
export class FictionService {
  async searchFictionByName(
    fictionName: string,
  ): Promise<FictionSearchListItem[]> {
    const res = await getSearchInfoList(fictionName);

    return res;
  }

  async getFictionCatalogByUrl(url: string): Promise<FictionCatalog[]> {
    const res = await getFictionCatalog(url);

    return res;
  }

  async getFictionContentByUrl(url: string): Promise<string> {
    const res = await getFictionContent(url);

    return res;
  }
}
