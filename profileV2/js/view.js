(function(module) {
  var view = {};
  $tabContent = $('tab-content');

  view.initView = function() { //DONE:This function sets initial View State
    $tabContent.hide();
    $('#about').show();
  };

  //DONE: This function sets the view state to one appropriate to portfolio view.
  view.portView = function() {
    $tabContent.hide();
    $('#works').show();
  };

  render = Handlebars.compile($('#project-template').text());

  //DONE: This function calls portfolio view function above and appends projects to the DOM using render+append.
  view.renderPortfolio = function() {
    view.portView();

    $('#portfolio').append(
      //TODO: It's not clear whether render can process objects as provided by Project.all. Check their structure and the structure of the template.
      Project.all.map(render)
    );
  };

  module.view = view;
})(window);
