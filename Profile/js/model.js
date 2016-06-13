//Build Project Sections
var projects = [];
// var template = $('#project-template').text();
// var compiledTemplate = Handlebars.compile(template);
// var template = Handlebars.compile($('#project-template').html()); //Can I compress the first two steps of Handlebars like this?

function Project (keys) {
  this.name = keys.name;
  this.date = new Date(keys.date);
  this.img  = keys.img;
  this.desc = keys.desc;
  this.repo = keys.repo;
}

Project.prototype.toHTML = function() {
  var template = Handlebars.compile($('#project-template').text());
  console.log(this);
  return template(this);
};

if (typeof rawProjects !== 'undefined') {
  rawProjects.sort(function(a,b) {
    return (new Date(b.date)) - (new Date(a.date));
  });

  rawProjects.forEach(function(ele) {
    projects.push(new Project(ele));
  });
}

// projects.forEach(function(a) {
//   $('#portfolio').append(a.toHTML());
// });
// Should this be in here or in view?
