var x = 5;
console.log(x);
var y = 7; //these run before load, right?

$(function() {
  $('h1').delay(500).fadeOut(1000);
});

$(document).ready(function() {
  x=6
});
console.log(x);
