var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Article } from '../article';
export var ArticleComponent = (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent.prototype.upvote = function () {
        this.article.voteUp();
    };
    ArticleComponent.prototype.downvote = function () {
        this.article.voteDown();
    };
    __decorate([
        Input('article'), 
        __metadata('design:type', Article)
    ], ArticleComponent.prototype, "article", void 0);
    ArticleComponent = __decorate([
        Component({
            selector: 'app-article',
            templateUrl: './article.component.html',
            styleUrls: ['./article.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleComponent);
    return ArticleComponent;
}());
//# sourceMappingURL=/Users/pranava.swaroop/projects/reddit-clone/src/app/article/article.component.js.map