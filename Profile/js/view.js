projects.forEach(function(a) {
  $('#portfolio').append(a.toHTML());
});

var initView = function() { //Initialize view state and set event listeners.
  var tabContent = $('.tab-content'); //cache jQ
  tabContent.hide(); //Hide all tabs
  $('.main-nav').on('click', '.tab', function(e) { //What function does .tab in the data param do here? I have no idea why it makes this work.
    tabContent.hide();
    console.log('#' + $(this).data('content'));
    $('#' + $(this).data('content')).fadeIn();
  });
};

//Initialize
$(function() {
  initView();
});
