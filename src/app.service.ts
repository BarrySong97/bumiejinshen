import { Injectable } from '@nestjs/common';
import FictionSearchListItem from './DTO/FictionSearchListItem';
import { getSearchInfoList } from './spider';

@Injectable()
export class AppService {
  async searchFictionByName(
    fictionName: string,
  ): Promise<FictionSearchListItem[]> {
    const res = await getSearchInfoList(fictionName);

    return res;
  }
}
