// DONE: Configure our two routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:

function setRouteMappings() {
  page.base('/');

  page('', articlesController.index);
  page('about', aboutController.index);
  page('*', notfound);

  page();
  console.log('\n* routes.js loaded *\n\n'); // Debug -- verify this in the console when the page (re)loads.
}

function notfound() {
  console.log('not found');
  $('.tab-content').hide();
}

// DONE: What function do we call to activate page.js? Call it to run that code right here.

setRouteMappings();

// If you did the prework for today, you should be able to refer to your sandbox app for these TODOs.
// page(...
