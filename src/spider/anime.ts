import axios from 'axios';
import cheerio from 'cheerio';
import Episode from 'src/DTO/anime/Episode';
import SearchAnimeItem from 'src/DTO/anime/SearchAnimeItem';
const getSearchUrl = (animeName: string) =>
  encodeURI(`http://www.yhdm.so/search/${animeName}/`);

const getSearchInfoList = async (animeName: string) => {
  const fetchUrl = getSearchUrl(animeName);
  const { data } = await axios.get(fetchUrl);
  const $ = cheerio.load(data);

  const hotContent = $('.lpic ul li')
    .toArray()
    .map((v) => {
      const animeInfo = cheerio(v);
      const titleInfo = animeInfo.find('a');
      const link = titleInfo.attr('href');
      const cover = titleInfo.find('img').attr('src');
      const title = animeInfo.find('h2 a').attr('title');
      const lastUpdateDate = cheerio(animeInfo.find('span').toArray()[0])
        .find('font')
        .text();
      return new SearchAnimeItem(
        title,
        cover,
        `http://www.yhdm.so${link}`,
        lastUpdateDate,
      );
    });
  return hotContent;
};

const getEpisodes = async (url: string) => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const hotContent = $('.movurl ul li a')
    .toArray()
    .map((v) => {
      const episodeInfo = cheerio(v);
      const link = episodeInfo.attr('href');
      const name = episodeInfo.text();
      return new Episode(name, `http://www.yhdm.so${link}`);
    });
  return hotContent;
};

export { getSearchInfoList, getEpisodes };
