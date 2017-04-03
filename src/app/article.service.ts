import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import {Article} from "./article";
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';

/*
  [[.sort(compare(a,b))
  return value
     if 0 , two elements are equal
     1, a comes before b
    -1, b comes before a
 */
interface ArticleSortFn {
  (a: Article, b: Article): number;
}

interface ArticleSortOrderFn {
  (direction: number): ArticleSortFn;
}

const sortByTime: ArticleSortOrderFn =
  (direction: number) => (a: Article, b: Article) => {
   return direction *
     (b.publishedAt.getTime() -
     a.publishedAt.getTime());
  };

const sortByVotes: ArticleSortOrderFn =
  (direction: number) => (a: Article, b: Article) => {
    return direction *
      (b.votes -
      a.votes);
  };


const sortFns = {
  'Time': sortByTime,
  'Votes': sortByVotes
};


@Injectable()
export class ArticleService {
  private _articles: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  private _sortByDirectionSubject:
    BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private _sortByFilterSubject:
    BehaviorSubject<ArticleSortOrderFn> = new BehaviorSubject<ArticleSortOrderFn>(sortByTime);


  public articles: Observable<Article[]> = this._articles.asObservable();
  public orderedArticles: Observable<Article[]>;

  constructor(private http: Http) {
    this.orderedArticles = Observable.combineLatest(
      this._articles,
      this._sortByFilterSubject,
      this._sortByDirectionSubject
    ).map(([
      articles, sorter, direction
    ]) => {
      return articles
        .sort(sorter(direction));
    })
  }


  private _makeHttpRequest(
    path: string,
    sourceKey: string
  ): Observable<any> {
    let params = new URLSearchParams();
    params.set('apiKey', environment.newsApiKey);
    params.set('source', sourceKey);

    return this.http
               .get(`${environment.baseUrl}${path}`,{search: params})
               .map(resp => resp.json());
  }

  // make the http request -> Observable
  // convert each json object to Article class
  // Update our subject
  public getArticles(): void {
    this._makeHttpRequest('v1/articles', 'reddit-r-all')
      .map(json => json.articles)
      .subscribe(articlesJSON => {
        const articles = articlesJSON
          .map(artcilejson => Article.fromJSON(artcilejson));
        this._articles.next(articles);
      })

  }

  public sortBy(filter: string, direction: number): void {
    this._sortByDirectionSubject.next(direction);
    this._sortByFilterSubject.next(sortFns[filter]);
  }

}


// let params = new URLSearchParams();
// params.set('apiKey', environment.newsApiKey);
// params.set('source', 'reddit-r-all');
//
// return this.http
//            .get(`${environment.baseUrl}v1/articles`,{search: params})
//            .toPromise()
//            .then(resp => resp.json())
//            .then(json => json.articles)
//            .then(articles => {
//              return articles.map(article => {
//                return Article.fromJSON(article);
//              });
//            })
//            .catch(err => {
//              console.log("whats the stack trace ", err);
//            });
