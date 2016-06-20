var p = document.querySelector('p');

function setRouteMappings() {
  page.base('/');

  page('', index);
  page('about', about);
  page('contact', contact);
  page('contact/:contactName', contact);
  page('*', notfound); // catch-all

  page();
}

function index() { p.textContent = 'viewing index (home)'; }
function about() { p.textContent = 'viewing about'; }
function contact(ctx) {
  p.textContent = 'viewing contact ' + (ctx.params.contactName || '');
}
function notfound() {
  p.innerHTML = '<h3>OMG!</h3><p>The page at "'
              + location.hostname + location.pathname + location.search
              + '" can\'t be found (like a bridge over troubled water, ya\' know)!</p>'
              + '<img src="lost.jpg"></img>';
}

setRouteMappings();
