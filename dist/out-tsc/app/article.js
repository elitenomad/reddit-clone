export var Article = (function () {
    function Article(aTitle, aDescription, aVotes) {
        this.title = aTitle;
        this.description = aDescription;
        this.votes = aVotes || 0;
        this.publishedAt = new Date();
    }
    Article.prototype.voteUp = function () {
        this.votes = this.votes + 1;
    };
    Article.prototype.voteDown = function () {
        this.votes = this.votes - 1;
    };
    return Article;
}());
//# sourceMappingURL=/Users/pranava.swaroop/projects/reddit-clone/src/app/article.js.map