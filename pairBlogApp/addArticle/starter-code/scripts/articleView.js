// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#author-filter').append(optionTag);

      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-author="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.

  $('#articles').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

articleView.initNewArticlePage = function() {
  // TODO: DONE Ensure the main .tab-content area is made visible. We may add more tabs later.
  $('.tab-content').hide();
  $('#write').show();
  // TODO: Create an empty article object. As the author fills in the form (on each
  //       keystroke), update the object and an area in the browser that shows the JSON
  //       version of that object.
  // TODO: Keep the JSON string hidden when the form is empty, but show the JSON string otherwise.

//Won't the string just always be empty when nothing is entered?

  // var newArticle = {};
  var field, JSONarticle;
  $('export-field').hide();
  $('#new-form').on('input', function(e) {
    articleView.create(e);
});

var articleTemplate = $('#article-template').html();
  articleView.compiledTemplate = Handlebars.compile(articleTemplate);
  // TODO: Add a 'focus' event to help the user select the entire JSON string,
  //       i.e., when a user clicks on the JSON string, make the browser select
  //       the entire string so that the user can do the usual ctrl-C to copy
  //       the string. (This saves the user from needing to click-and-drag
  //       across a potentially very long string.)
  //
  // TODO: Add an event handler to update the preview and the export field if any inputs change.
  $('#article-json').focus(function() {
    // console.log('ping!');
      $(this).select(); } );
};

articleView.create = function(e) {
  // TODO: Set up a var to hold the new article we are creating.
  // Clear out the #articles element, so we can put in the updated preview
  field = e.target;
  articleView[field.name] = field.value;
articleView['authorSlug'] = $('#article-author').val();
articleView['categorySlug'] = $('#article-category').val();

// articleView.body = marked(articleView.body);

console.log(marked(articleView.body));

  JSONarticle = JSON.stringify(articleView);
  $('#article-json').val(String(JSONarticle));
  // console.log($('#article-author').val());

  // TODO: Instantiate an article based on what's in the form fields:
  //above^^^^
  // TODO: Use our interface to the Handblebars template to put this new article into the DOM:

var handleTemplate = articleView.compiledTemplate(articleView);

  // TODO: Activate the highlighting of any code blocks:

  $('.article-body').find('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  // TODO: Export the new article as JSON, so it's ready to copy/paste into blogArticles.js:

  //Above ^^^^
};


articleView.initIndexPage = function() {
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
};
