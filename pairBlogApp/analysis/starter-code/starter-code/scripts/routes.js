page('/', //Runs if the url is at the base of the directory.
  articlesController.loadAll, //calls the loadAll function from the articlesController file (actually the articlesController object), which loads all articles into appropriate parts of the model. How will be covered elsewhere.
  articlesController.index); //finally it calls a controller function which in turn sets up the view state.

page('/about', aboutController.index); //on /about in the URL, calls a controller function which will in turn call a view function for the about page.

page('/article/:id', //implements a new route that allows viewing of individual articles. This route looks for /article/ and an article ID number after it which will be picked up by the loadById function.
  articlesController.loadById, //which is called here in order to load a subset of the Article collection
  articlesController.index); //but, which is about to reuse a lot of the view-state-setting features used above.

// Redirect home if the default filter option is selected:
page('/category', '/'); //Interestingly, these two lines actually just alias a given path back to the home state, causing line 1 to run.
page('/author', '/');

page('/author/:authorName', //A parallel case to the loadById version on line 7, except passing an author datum into the load function.
  articlesController.loadByAuthor,
  articlesController.index);

page('/category/:categoryName', //A parallel case to the loadById version on line 7, except passing a category datum into the load function.
  articlesController.loadByCategory,
  articlesController.index);

page(); //initializes the page.js system and sets event listening.
