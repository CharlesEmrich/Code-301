(function(module) {
  var repoView = {}; //Makes a RepoView object

  var ui = function() { //function that sets correct view state when about is clicked
    var $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty(); //empties out the div which will hold the repo list.
    $about.show().siblings().hide(); //shows appropriate div, then locates sibling divs and hides them
  };

  var render = function(repo) { //this function is in charge of appending repos to the DOM.
    return $('<li>')
      .html('<a href="' + repo.html_url + '">' + repo.full_name + '</a>');
  }; //Here, we locate an li and append an anchor tag that names and links to a repo

  repoView.index = function() { //Calls the two above functions together in sequence
    ui(); //Sets view state

    $('#about ul').append( //Appends...
      repos.with('forks_count').map(render) //A selection of repos that have been forked, by mapping the render function across the array of them.
    );
  };

  module.repoView = repoView;
})(window);
