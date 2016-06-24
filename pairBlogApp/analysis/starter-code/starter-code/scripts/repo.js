(function(module) {
  var repos = {}; //Making a repos object.

  repos.all = []; //defining a key of that object as an empty array.

  repos.requestRepos = function(callback) { //we're adding a requestRepos function to that object.
    $.get('/github/user/repos' + '?per_page=100' + '&sort=updated') //that function performs a get to the github api
    // How does $.get() differ from $.getJSON() and $.ajax()? .get() issues an HTTP get request. .getJSON() issues a get request but presumes and parse JSON as the response. .ajax() is the most general form of the function and can be used either to GET or POST.
    .done(function(data, message, xhr) { repos.all = data; }) //once that get completes, we add the data to the repos.all key.
    .done(callback); //finally, we run the callback function specified on line 6.
//     What happens due to the two chained $.done() functions? They both run sequentially.
// How many .done() callbacks run? See above.
// If no callbacks run, why not? These callbacks won't run if the get doesn't complete, which prevents asynch errors.
// If one runs, which one runs, and what determines that? Both of them depend on the same condition, so presumably it's all or nothing. There's a chance I'm wrong and each one depends on the completion of the function chained before it, but I suspect that's not the way of things: we've seen .done() and .always() chained in ways that wouldn't work if that were true? I think?
// If both callbacks run, what order do they run in? Does that order ever change - if so, under what conditions? As with most code, the one highest in the code (or most directly after the .get() runs first.)
  };

  repos.with = function(attr) { //This function has been here for awhile. It narrows down the list of repos to only those which have a certain attribute.
//     Describe how repos.with() works:
// What is repos.all? An array of all repos returned by the ajax call.
// What is the anonymous function's param repo? Filter needs to run on each member of an array, so it takes a function with a param.
// What is repo[attr]? A check for the presence of a given attribute.
// What does repos.all.filter return? An array of repo objects.
    return repos.all.filter(function(repo) { return repo[attr]; });
  };

  module.repos = repos;
})(window);
