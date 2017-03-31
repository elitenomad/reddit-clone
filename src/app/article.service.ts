import { Injectable } from '@angular/core';
import {Article} from "./article";

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles(): Promise<Article[]> {
    return Promise.resolve([
      new Article('pede. Cum sociis natoque penatibus et magnis dis parturient montes,', 'Fusce', 10),
      new Article('ut erat. Sed nunc est, mollis non, cursus non, egestas', 'Fusce aliquam, enim nec tempus sdales,'),
      new Article('in faucibus orci luctus et ultrices posuere cubilia Curae; Donec', 'eros non enim commodon'),
      new Article('morbi tristique senectus et netus et malesuada fames ac turpis', 'Proin'),
      new Article('ante dictum mi, ac mattis velit justo nec ante. Maecenas', 'lectue'),
      new Article('dictum mi, ac mattis velit justo nec ante. Maecenas mi', 'estrum urna,'),
      new Article('Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultibh sit amet', 'blah blah'),
      new Article('massa rutrum magna. Cras convallis convallis dolor. Quisque tincic sem', 'blah blah'),
      new Article('eu tempor erat neque non quam. Pellentesque habitant mt netus', 'blah blah'),
      new Article('Praesent eu nulla at sem molestie sodales. Mauris blandit enim', 'eurabitur'),
      new Article('dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit', 'massa. Mauris'),
      new Article('natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'blandit.'),
      new Article('ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et,', 'non mam et,'),
      new Article('eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris', 'Nam'),
    ]);
  }

}
