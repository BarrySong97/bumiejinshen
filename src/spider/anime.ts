import axios from 'axios';
import cheerio from 'cheerio';
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
      
    });
  return hotContent;
};

export { getSearchInfoList };
