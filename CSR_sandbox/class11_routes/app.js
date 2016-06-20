var p = $('p');
var artDiv = $('.articles');

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
  artDiv.show();
  p.text('viewing articles');
}
function index() { p.text('viewing index (home)'); artDiv.hide();}
function about() { p.text('viewing about'); artDiv.hide();}
function contact(ctx) {
  p.text('viewing contact ' + (ctx.params.contactName || ''));
  artDiv.hide();
}
function notfound() {
  p.html('<h3>OMG!</h3><p>The page at "'
              + location.hostname + location.pathname + location.search
              + '" can\'t be found (like a bridge over troubled water, ya\' know)!</p>'
              + '<img src="lost.jpg"></img>'
);
  artDiv.hide();
}
function articulate(a) {
  console.log('JSON Successssssss');
  var template = $('#article-template').html();
  var compTemplate = Handlebars.compile(template);
  a.map(function(ele) {
    // console.log(ele);
    ele.body = marked(ele.body);
    var newArt = compTemplate(ele);
    artDiv.append(newArt);
    artDiv.find('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
    // console.log(compTemplate(a));
  });
}

$.getJSON('ipsumArticles.json', articulate)
  .always(function() {
    console.log('getJSON Called.');
  });
setRouteMappings();
