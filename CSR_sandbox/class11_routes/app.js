var p = $('p');

function setRouteMappings() {
  page.base('/');

  page('', index);
  page('about', about);
  page('contact', contact);
  page('contact/:contactName', contact);
  page('articles', articles);
  page('*', notfound); // catch-all

  page();
}

function articles() { //Show articles
}
function index() { p.text('viewing index (home)'); }
function about() { p.text('viewing about'); }
function contact(ctx) {
  p.textContent = 'viewing contact ' + (ctx.params.contactName || '');
}
function notfound() {
  p.innerHTML = '<h3>OMG!</h3><p>The page at "'
              + location.hostname + location.pathname + location.search
              + '" can\'t be found (like a bridge over troubled water, ya\' know)!</p>'
              + '<img src="lost.jpg"></img>';
}
function articulate(a) {
  var template = $('#article-template').html();
  var compTemplate = Handlebars.compile(template);
  a.map(function(ele) {
    // console.log(ele);
    var newArt = compTemplate(ele);
    $('.articles').append(newArt);
    // console.log(compTemplate(a));
  });
}

$.getJSON('ipsumArticles.json', articulate)
  .always(function() {
    console.log('getJSON Called.');
  });
setRouteMappings();
