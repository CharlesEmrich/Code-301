function setRouteMappings() {
  console.log('Setting route mappings.');
  page.base('');
  page('/', middleware.report, controller.index);
  page('/works', middleware.report, controller.works);
  page('/about', '/');

  page();
};

setRouteMappings();
