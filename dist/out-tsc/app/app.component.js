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
import { Article } from './article';
export var AppComponent = (function () {
    function AppComponent() {
        this.articles = [
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
        ];
    }
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/pranava.swaroop/projects/reddit-clone/src/app/app.component.js.map