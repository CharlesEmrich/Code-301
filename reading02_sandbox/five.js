//Use HTML to define a button and a div that says "Ancestor. Generation 0", and jQuery to add a 'click' handler to the button. The handler should create a new div inside the existing div, the new div should say "generation 1". Each click should add a child div to the previously created div, but the child div should contain the generation number, which increments by one for each generation.

var generations = 0;

$(function() {
  $('button').on('click', function() {
    $('#' + generations).prepend('<div id="' + (generations + 1) + '"> generation ' + (generations + 1) + '</div>');
    // $('#' + generations).attr('id', generations);
    generations ++;
    console.log(generations);
  });
});
