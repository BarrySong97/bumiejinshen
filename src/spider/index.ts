import axios from 'axios';
import cheerio from 'cheerio';
import FictionSearchListItem from 'src/DTO/FictionSearchListItem';
const getSearchUrl = (bookName: string) =>
  encodeURI(
    `https://www.biquwx.la/modules/article/search.php?searchkey=${bookName}`,
  );

const getSearchInfoList = async (bookName: string) => {
  const fetchUrl = getSearchUrl(bookName);
  const { data } = await axios.get(fetchUrl);
  const $ = cheerio.load(data);

  const hotContent = $('tbody tr:not(:first-child)')
    .toArray()
    .map((v) => {
      const itemInfo = cheerio(v).find('td').toArray();

      const titleInfo = cheerio(itemInfo[0]).find('td a');

      const lastUpdateInfo = cheerio(itemInfo[1]).find('td a');
      const title = titleInfo.text().trim();
      const link = titleInfo.attr('href');

      const author = cheerio(itemInfo[2]).text().trim();
      const lastUpdateDate = cheerio(itemInfo[4]).text().trim();
      const lastUpdateChapterUrl = lastUpdateInfo.attr('href');
      const lastUpdateChapterTitle = lastUpdateInfo.text().trim();
      return new FictionSearchListItem(
        title,
        author,
        `https://www.biquwx.la${link}`,
        lastUpdateDate,
        `https://www.biquwx.la/${lastUpdateChapterUrl}`,
        lastUpdateChapterTitle,
      );
    });
  return hotContent;
};

export { getSearchInfoList };
