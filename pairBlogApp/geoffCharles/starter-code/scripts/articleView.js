// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFilters = function() { //This adds a populateFilters method to the articleView object.
  $('article').each(function() { //The method selects all articles and runs an anon function...
    if (!$(this).hasClass('template')) { //As long as that article isn't a template, we...
      // DONE: We need to take every author name from the page, and make it an option in the Author filter.
      //       To do so, Build an `option` DOM element that we can append to the author select box.
      //       Start by grabbing the author's name from `this` article element, and then use that bit of
      //       text to create the option tag (in a variable named `optionTag`),
      //       that we can append to the #author-filter select element.
      //       YAY, DOM manipulation!
      var val = $(this).find('address a').text(); //... select the text of an anchor tag inside an address tag, then...
      var optionTag = '<option value="' + val + '">' + val + '</option>'; //it appends that text as an option in the author filter select menu
      $('#author-filter').append(optionTag); //this is where it actually appends that option.

      // DONE: Similar to the above, but...
      //       Avoid duplicates! We don't want to append the category name if the select
      //       already has this category as an option!
      val = $(this).attr('data-category'); //This is doing a similar task, but with article categories rather than author names. Here
      optionTag = '<option value="' + val + '">' + val + '</option>'; //Here we write the HTML for the option value
      if ($('#category-filter option[value="' + val + '"]').length === 0) { //Then search a jQ selection for the option value we just wrote. If it doesn't find any match (.length === 0), then...
        $('#category-filter').append(optionTag); //...we append.
      }
    }
  });
};

articleView.handleAuthorFilter = function() { //We add another method to the articleView object
  $('#author-filter').on('change', function() { //This one listens for changes to the author-filter IDed tag
    if ($(this).val()) { //jQ(this) here refers to the option selected. Probably? We'll SAND.
      // TODO: If the select box was changed to an option that has a value, we need to hide all the articles,
      //       and then show just the ones that match for the author that was selected.
      //       Use an "attribute selector" to find those articles, and fade them in for the reader.
      console.log($(this).val());
      var $allArticles = $('article');
      //Hide stuff
      $allArticles.hide();
      //Show Filtered Stuff
      $allArticles.filter('[data-author = \'' + $(this).val() + '\']').fadeIn();
    } else {
      // TODO: If the select box was changed to an option that is blank, we should
      //       show all the articles, except the one article we are using as a template.

    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  // TODO: Just like we do for #author-filter above, we should handle change events on the #category-filter element.
  //       When an option with a value is selected, hide all the articles, then reveal the matches.
  //       When the blank (default) option is selected, show all the articles, except for the template.
  //       Be sure to reset the #author-filter while you are at it!

};

articleView.handleMainNav = function() {
  // TODO: Add an event handler to .main-nav element that will power the Tabs feature.
  //       Clicking any .tab element should hide all the .tab-content sections, and then reveal the
  //       single .tab-content section that is associated with the clicked .tab element.
  //       So: You need to dynamically build a selector string with the correct ID, based on the
  //       data available to you on the .tab element that was clicked.
  $('.main-nav').on(/* CODE GOES HERE */);

  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.

  // TODO: Add an event handler to reveal all the hidden elements,
  //       when the .read-on link is clicked. You can go ahead and hide the
  //       "Read On" link once it has been clicked. Be sure to prevent the default link-click action!
  //       Ideally, we'd attach this as just 1 event handler on the #articles section, and let it
  //       process any .read-on clicks that happen within child nodes.

};

// TODO: Call all of the above functions, once we are sure the DOM is ready.
$(document).ready(function() {
  articleView.populateFilters();
  articleView.handleAuthorFilter();
});
