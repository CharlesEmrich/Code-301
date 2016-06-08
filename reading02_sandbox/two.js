//Animate #1 such that each size change is "gradual" and takes 1 second to complete.

$(function() {
  $('p').css('background-color','red').css('width', '100px').css('height', '50px');

  $('p').on('mouseover', function() {
    $(this).animate({
      'width': '175px',
      'height': '90px'
    }, 1000);
  });
  $('p').on('mouseout', function() {
    $(this).animate({
      'width': '100px',
      'height': '50px'
    }, 1000);
  });
});
