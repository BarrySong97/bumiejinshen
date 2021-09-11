import { Injectable } from '@nestjs/common';
import FictionContetn from 'src/DTO/comic/FictionContent';
import FictionCatalog from '../DTO/fiction/FictionCatalog';
import FictionSearchListItem from '../DTO/fiction/FictionSearchListItem';
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

  async getFictionContentByUrl(url: string): Promise<FictionContetn> {
    const res = await getFictionContent(url);

    return res;
  }
}
