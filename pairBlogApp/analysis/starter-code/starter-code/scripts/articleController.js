(function(module) {
  var articlesController = {};

  Article.createTable();  // Ensure the database table is properly initialized

  articlesController.index = function(ctx, next) {
    articleView.index(ctx.articles);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // The important new feature here is that route.js provides, by default, any value in the URL string after a : as an argument for its callback functions. Specifically, it passes in an object which has properties named after the name in the string. In this case, that means that route.js passes in an object to loadById's ctx param with "id" as a key and a value determined by the URL. So loadById takes that (and no value for next), makes an articleData function, and passes that object as the callback to findWhere

  //findWhere, for its part, is mostly a SQL call. It specifices that we're going to select by Id, what Id we'll use, and what we'll do next. It's not totally clear to me what articleData() does as a callback. It appears to just edit the object sent by route.js.
  articlesController.loadById = function(ctx, next) {
    var articleData = function(article) {
      ctx.articles = article;
      next();
    };

    Article.findWhere('id', ctx.params.id, articleData);
  };

  // COMMENT: What does this method do?  What is it's execution path?

  //This is literally identical to the above, in terms of its structure. The only important changes is that .replace in the findWhere call, but that's just a measure of converting the white-space-less authorName in the route.js passed-object to one with whitespace matching the SQL table.
  articlesController.loadByAuthor = function(ctx, next) {
    var authorData = function(articlesByAuthor) {
      ctx.articles = articlesByAuthor;
      next();
    };

    Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // COMMENT: What does this method do?  What is it's execution path?

  //Is it gauche to say "see above?" This is structurally identical to the loadById version.
  articlesController.loadByCategory = function(ctx, next) {
    var categoryData = function(articlesInCategory) {
      ctx.articles = articlesInCategory;
      next();
    };

    Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // COMMENT: What does this method do?  What is it's execution path?

  //This one's different though. It does the same creation of a function out of the ctx object, but sets its articles key equal to the complete list of articles. Also, this version of the function has a param that it appears to make no use of? What's with that?

  // Following that, it checks whether there are actually articles in Article.all. If there are, performs the same action as articleData(). For some reason? I'm fairly confused. If there aren't articles in Article.all, it fetches them to to there.
  articlesController.loadAll = function(ctx, next) {
    var articleData = function(allArticles) {
      ctx.articles = Article.all;
      next();
    };

    if (Article.all.length) {
      ctx.articles = Article.all;
      next();
    } else {
      Article.fetchAll(articleData);
    }
  };

  module.articlesController = articlesController;
})(window);
