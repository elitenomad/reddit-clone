import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../article.service";

declare var jQuery: any;

@Component({
  selector: 'app-article-list-header',
  templateUrl: './article-list-header.component.html',
  styleUrls: ['./article-list-header.component.css']
})
export class ArticleListHeaderComponent implements OnInit {

  private currentFilter: string = 'Time';
  private sortDirection: number = 1;

  constructor(
    private articleServe: ArticleService
  ) { }

  ngOnInit() {
    jQuery('.ui.dropdown').dropdown();
  }

  changeDirection(){
    this.sortDirection = this.sortDirection * -1;
    this._updateSort();
  }

  changeSort(filter: string) {
    if(filter === this.currentFilter){
      this.changeDirection();
    }else{
      this.currentFilter = filter;
      this._updateSort();
    }

  }

  liveSearch(evnt) {
    const val = evnt.target.value;
    this.articleServe.filterBy(val);
  }

  private _updateSort(){
    this.articleServe
      .sortBy(this.currentFilter,this.sortDirection);

  }
}
