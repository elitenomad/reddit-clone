interface ArticleJSON{
  title: string
  description: string
  urlToImage: string
  votes: number
  author: string
  publishedAt: string
}

export class Article {


  public publishedAt: Date;

  // Article.fromJSON()
  static fromJSON(json: ArticleJSON): Article {
    let article = Object.create(Article.prototype);
    return Object.assign(article, json, {
      votes: json.votes ? json.votes : 0,
      publishedAt: json.publishedAt ? new Date(json.publishedAt) : new Date()
    });
  }


  constructor(
    public title: string,
    public description: string,
    public urlToImage?: string,
    public votes?: number) {
      this.votes = votes || 1000;
      this.publishedAt = new Date();
  }


  public voteUp(): void {
    this.votes = this.votes + 1;
  }

  public voteDown(): void {
    this.votes = this.votes - 1;
  }
}
