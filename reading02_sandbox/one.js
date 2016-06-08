//Use HTML to define five DOM elements, and use .on() such that when the user moves the mouse pointer over an element, its size increases by 75%, and when the mouse pointer leaves an element, the element returns to its normal size.

$(function() {
  $('p').css('background-color','red').css('width', '100px').css('height', '50px');

  $('p').on('mouseover', function() {
    $(this).animate({
      'width': '175px',
      'height': '90px'
    });
  });
  $('p').on('mouseout', function() {
    $(this).animate({
      'width': '100px',
      'height': '50px'
    });
  });
});
