export default class SearchComicItem {
  title: string;
  link: string;
  lastUpdate: string;
  cover: string;
  constructor(title: string, cover: string, link: string, lastUpdate: string) {
    this.title = title;
    this.link = link;
    this.cover = cover;
    this.lastUpdate = lastUpdate;
  }
}
