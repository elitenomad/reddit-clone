var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var ArticleListComponent = (function () {
    function ArticleListComponent() {
    }
    ArticleListComponent.prototype.ngOnInit = function () {
    };
    ArticleListComponent = __decorate([
        Component({
            selector: 'app-article-list',
            templateUrl: './article-list.component.html',
            styleUrls: ['./article-list.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleListComponent);
    return ArticleListComponent;
}());
//# sourceMappingURL=/Users/pranava.swaroop/projects/reddit-clone/src/app/article-list/article-list.component.js.map