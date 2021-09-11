import axios from 'axios';
import cheerio from 'cheerio';
import FictionContetn from 'src/DTO/comic/FictionContent';
import FictionCatalog from '../DTO/fiction/FictionCatalog';
import FictionSearchListItem from '../DTO/fiction/FictionSearchListItem';
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

const getFictionCatalog = async (link: string) => {
  const { data } = await axios.get(link);
  const $ = cheerio.load(data);
  const hotContent = $('.box_con #list dl dd a')
    .toArray()
    .map((v) => {
      const name = cheerio(v).text().trim();
      const link = cheerio(v).attr('href');
      return new FictionCatalog(name, `https://www.biquwx.la/10_10233/${link}`);
    });

  return hotContent;
};

const getFictionContent = async (link: string) => {
  const { data } = await axios.get(link);
  const $ = cheerio.load(data);
  const hotContent = $('#content').toString();
  const linkInfo = $('.bottem1 a').toArray();
  const pre = cheerio(linkInfo[1]).attr('href');
  const next = cheerio(linkInfo[3]).attr('href');
  return new FictionContetn(next, pre, hotContent);
};

export { getSearchInfoList, getFictionCatalog, getFictionContent };
