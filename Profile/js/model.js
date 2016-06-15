$(function() {
  function Project (keys) {
    this.name = keys.name;
    this.date = new Date(keys.date);
    this.img  = keys.img; //linter hates this, but I'm keeping it.
    this.desc = keys.desc;
    this.repo = keys.repo;
  }

  Project.prototype.toHTML = function() {
    var template = Handlebars.compile($('#project-template').text()); //Examples use .html here, but I get errors when I do that.
    return template(this);
  };

  var jqXHR = $.ajax({
    method: 'GET',
    url: 'data/portfolioData.json',
    success: function(data) { //TODO: Check this against syntax in Duckett. Amend and fix. Particularly line 24.
      console.log('loading JSON');
      var projects = [];
      // var rawProjects = JSON.parse(data);
      if (typeof data !== 'undefined') {
        data.sort(function(a,b) {
          return (new Date(b.date)) - (new Date(a.date));
        });

        data.forEach(function(ele) {
          projects.push(new Project(ele));
        });
      };
      render(projects);
    }});
}
);
