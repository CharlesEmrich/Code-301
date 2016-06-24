function setRouteMappings() {
  console.log('Setting route mappings.');
  page.base('');
  page('/', controller.index);
  page('/works', controller.works);
  page('/about', '/');

  page();
};

setRouteMappings();
