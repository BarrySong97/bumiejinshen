import axios from 'axios';
import cheerio from 'cheerio';
import Chapter from '../DTO/comic/Chapter';
import SearchComicItem from '../DTO/comic/SearchComicItem';
const getSearchUrl = (animeName: string) =>
  encodeURI(`https://www.mangabz.com/search?title=${animeName}/`);

const getSearchInfoList = async (animeName: string) => {
  const fetchUrl = getSearchUrl(animeName);
  const { data } = await axios.get(fetchUrl);
  const $ = cheerio.load(data);

  const hotContent = $('.mh-item')
    .toArray()
    .map((v) => {
      const animeInfo = cheerio(v);
      const titleInfo = animeInfo.find('.mh-item-detali .title a');
      const link = titleInfo.attr('href');
      const cover = animeInfo.find('a img').attr('src');
      const title = titleInfo.text();
      const lastUpdateDate = animeInfo.find('.mh-item-detali p a').text();
      return new SearchComicItem(
        title,
        cover,
        `mangabz.com${link}`,
        lastUpdateDate,
      );
    });
  return hotContent;
};

const getChapters = async (url: string) => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const hotContent = $('.movurl ul li a')
    .toArray()
    .map((v) => {
      const episodeInfo = cheerio(v);
      const link = episodeInfo.attr('href');
      const name = episodeInfo.text();
      return new Chapter(name, `http://www.yhdm.so${link}`);
    });
  return hotContent;
};

export { getSearchInfoList, getChapters };
