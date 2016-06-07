$(function() { // This is the shorthand for $(document).ready(), though I'm not entirely sure /why/ this is a valid shortcut
  $('ul').before('<p class="notice">Just updated</p>'); //We're selecting all ul tags and inserting paragraphs ahead of them
  $('li.hot').prepend('+ '); // This selects all paragraphs with the hot class and adds a + at the start of their text content
  var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>'); // Here, we're defining a new list item. Pretty sure the $ in the varname isn't functional? Notably, the stuff after the assignation could function as a selector, only its presence in an insertion method will make it render as a list item.
  $('li:last').after($newListItem); //Whoa, check it: now we're using it to make a list item.
});
