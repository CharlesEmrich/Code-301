//Repeat #2, but instead of changing size, change three CSS properties at once (e.g., rotation angle, background color, or whatever you think looks cool - experiment with different combinations!)

$(function() {
  $('p').css('background-color','red').css('width', '100px').css('height', '50px');

  $('p').on('mouseover', function() {
    $(this).animate({
      'width': '175px',
      'height': '90px',
      'wordSpacing': '1',
      'marginLeft': '200px',
    }, 1000);
  });
  $('p').on('mouseout', function() {
    $(this).animate({
      'width': '100px',
      'height': '50px',
      'color': 'black',
      'wordSpacing': '.5',
      'marginLeft': '0px',
    }, 1000);
  });
});
