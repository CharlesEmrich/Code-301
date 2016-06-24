(function(module) {
  var controller = {};

  //DONE: write a function that initializes the view on load or clicking "about"
  controller.index = function() {
    console.log('Setting view state to: Initial/About');
    view.initView();
  };
  //DONE: write an works function that calls requestRepos and takes a view function as a callback.
  controller.works = function() {
    console.log('Setting view state to: Portfolio');
    model.requestRepos(view.renderPortfolio);
  };

  module.controller = controller;
})(window);
