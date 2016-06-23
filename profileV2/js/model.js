(function(module) {
//Flexible object contstructor
  // function Article (opts) {
  //   Object.keys(opts).forEach(function(e, index, keys) {
  //     this[e] = opts[e];
  //   },this);
  // }

  Project.all = [];

  // Project.prototype.render = function(project) {
  //   var template = Handlebars.compile($('#project-template').text()); //Examples use .html here, but I get errors when I do that.
  //
  //   // TODO: Implement DaysAgo here if we're doing that.
  //
  //   return template(project);
  // };

  Project.requestRepos = function(callback) {
    $.ajax({
      method: 'GET',
      url: '', //TODO: github API url
      success: function(data) {
        if (typeof data !== 'undefined') {
          // data.sort(function(a,b) {
          //   return ; // TODO: figure out how dates are formatting in github's JSON response
          // });
          Project.all = data;
        }
      }
    }).done(callback);
  };
  module.model = model;
})(window);
