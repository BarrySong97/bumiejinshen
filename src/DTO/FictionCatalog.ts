export default class FictionCatalog {
  name: string;
  link: string;

  constructor(title: string, link: string) {
    this.name = title;
    this.link = link;
  }
}
