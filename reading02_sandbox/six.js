//Extend #5 by defining a "Clear" button and .on() such that, when clicked, removes all divs except the "generation 0" div.

var generations = 0;

$(function() {
  $('#iterate').on('click', function() {
    $('#' + generations).prepend('<div id="' + (generations + 1) + '"> generation ' + (generations + 1) + '</div>');
    // $('#' + generations).attr('id', generations);
    generations ++;
    console.log(generations);
  });

  $('#clear').on('click', function() {
    $('div:not(#0)').remove();
  });
});
