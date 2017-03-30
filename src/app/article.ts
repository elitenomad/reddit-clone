export class Article {
  public title: string;
  public description: string;
  public votes?: number;

  public publishedAt: Date;

  constructor(aTitle: string, aDescription: string, aVotes?: number) {
    this.title = aTitle;
    this.description = aDescription;
    this.votes = aVotes || 0;
    this.publishedAt = new Date();
  }

  public voteUp(): void {
    this.votes = this.votes + 1;
  }

  public voteDown(): void {
    this.votes = this.votes - 1;
  }
}
