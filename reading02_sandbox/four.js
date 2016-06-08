//Use .getElementById() with $() to convert a plain JavaScript DOM element to a jQuery DOM object, then use a method of the jQuery object.

$(function() {
 var testObj = document.getElementById('testObj');
 $(testObj).fadeOut(2500);
});
