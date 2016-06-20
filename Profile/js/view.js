(function(){
  function initView() { //Initialize view state and set event listeners.
    var tabContent = $('.tab-content'); //cache jQ
    tabContent.hide(); //Hide all tabs
    $('#portfolio').show(); //Show portfolio by default
    $('.main-nav').on('click', '.tab', function(e) { //What function does .tab in the data param do here? I have no idea why it makes this work.
      tabContent.hide();
      console.log('#' + $(this).data('content'));
      $('#' + $(this).data('content')).fadeIn();
    });
  };

  function render(projects) {
    // console.log('running render()');
    projects.forEach(function(a) {
      console.log('appending ' + a);
      $('#portfolio').append(a.toHTML());
    });
  }

  $(function() {
    initView();
  });
}());
