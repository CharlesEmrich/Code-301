$(function() { //shorthand for document.ready(). This code will run once the DOM is built.  $('li').on('click', function() { //selecting all li's and setting up a click-based event listener    $(this).animate({ //when the listener fires, animate the element that got clicked on.      opacity: 0.0, //and by animate, we mean fade out the opacity      paddingLeft: '+=80' //and gradually increase the left-side padding on the text, moving it right    }, 500, function() { //over the course of the next 500ms. Then, when the animation is complete...      $(this).remove(); //remove the li that was clicked on.    });  });});