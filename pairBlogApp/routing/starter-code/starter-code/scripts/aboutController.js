(function(module) {
  var aboutController = {};

  // DONE: Write this function to hide all main section elements,
  //       then show only the #about section.
  aboutController.index = function() {
    $('.tab-content').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
