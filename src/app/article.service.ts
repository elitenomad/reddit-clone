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
  private _sources: BehaviorSubject<any> = new BehaviorSubject<any>([]);


  private _sortByDirectionSubject:
    BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private _sortByFilterSubject:
    BehaviorSubject<ArticleSortOrderFn> = new BehaviorSubject<ArticleSortOrderFn>(sortByTime);

  private _filterBySubject:
    BehaviorSubject<string> = new BehaviorSubject<string>('');

  public articles: Observable<Article[]> = this._articles.asObservable();
  public orderedArticles: Observable<Article[]>;
  public sources: Observable<any> = this._sources.asObservable();

  constructor(private http: Http) {
    this.orderedArticles = Observable.combineLatest(
      this._articles,
      this._sortByFilterSubject,
      this._sortByDirectionSubject,
      this._filterBySubject
    ).map(([
      articles, sorter, direction, filterStr
    ]) => {
      const re = new RegExp(filterStr, 'gi');
      return articles
        .filter(a => re.exec(a.title))
        .sort(sorter(direction));
    })
  }


  private _makeHttpRequest(
    path: string,
    sourceKey?: string
  ): Observable<any> {
    let params = new URLSearchParams();
    params.set('apiKey', environment.newsApiKey);
    if(sourceKey && sourceKey !== ''){
      params.set('source', sourceKey);
    }

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

  public updateArticles(sourceKey = 'reddit-r-all'): void {
    this._makeHttpRequest('v1/articles', sourceKey)
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

  public filterBy(filter: string){
      this._filterBySubject.next(filter);
  }

  public getSources(): void {
      this._makeHttpRequest('/v1/sources')
        .map(json => json.sources)
        .filter(list => list.length > 0)
        .subscribe(this._sources);
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
