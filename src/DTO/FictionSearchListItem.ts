export default class FictionSearchListItem {
  title: string;
  link: string;
  author: string;
  lastUpdateDate: string;
  lastUpdateChapterUrl: string;
  lastUpdateChapterTitle: string;
  constructor(
    title: string,
    author: string,
    link: string,
    lastUpdateDate: string,
    lastUpdateChapterUrl: string,
    lastUpdateChapterTitle: string,
  ) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.lastUpdateChapterTitle = lastUpdateChapterTitle;
    this.lastUpdateChapterUrl = lastUpdateChapterUrl;
    this.lastUpdateDate = lastUpdateDate;
  }
}
