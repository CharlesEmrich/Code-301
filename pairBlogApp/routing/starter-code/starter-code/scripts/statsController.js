(function(module) {
  var statsController = {};
  statsController.index = function() {
    // Article.createTable();
    Article.fetchAll(articleView.initAdminPage);
    $('.tab-content').hide();
    $('#blog-stats').show();
  };

  module.statsController = statsController;
})(window);
