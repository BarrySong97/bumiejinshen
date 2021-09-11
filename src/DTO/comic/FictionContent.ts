export default class FictionContetn {
  nextLink: string;
  prevLink: string;
  content: string;

  constructor(nextLink: string, prevLink: string, content: string) {
    this.nextLink = nextLink;
    this.prevLink = prevLink;
    this.content = content;
  }
}
