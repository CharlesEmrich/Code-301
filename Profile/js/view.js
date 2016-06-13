//rendering project section
var projects = [];

function Project (keys) {
  this.name = keys.name;
  this.date = new Date(keys.date);
  this.img  = keys.img;
  this.desc = keys.desc;
}

Project.prototype.toHTML = function() {
  var $newProject = $('article.template').clone();

  $newProject.find('.folioName').text(this.name);
  $newProject.find('.folioPic').attr('src',this.img);
  $newProject.find('.folioDesc').text(this.desc);
  $newProject.find('.date').text(this.date);
  //Implement projectUrl here.

    // // Include the publication date as a 'title' attribute to show on hover:
    // $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
    //
    // // Display the date as a relative number of "days ago":
    // $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')
  $('.article').removeClass('template');
  return $newProject;
};

rawProjects.sort(function(a,b) {
  return a.date - b.date; //double-check this
});

rawProjects.forEach(function(idx) {
  projects.push(new Project(idx));
});

//Should everything above this point be in control? Or even model? Inquire.

projects.forEach(function(a) {
  $('#portfolio').append(a.toHTML());
});

var initView = function() { //Initialize view state and set event listeners.
  var tabContent = $('.tab-content'); //cache jQ
  tabContent.hide(); //Hide all tabs
  $('.main-nav').on('click', '.tab', function(e) { //What function does .tab in the data param do here? I have no idea why it makes this work.
    // tabContent.hide();
    console.log('#' + $(this).data('content'));
    $('#' + $(this).data('content')).fadeIn();
  });
};

//Initialize
$(function() {
  initView();
});
