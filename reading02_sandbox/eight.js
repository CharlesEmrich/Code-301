//Use .find() on jQuery objects, then comment on how .filter() and .find() differ

$(function() {
  $('p').filter('.special').css('background-color', 'red'); //filter trims existing selections
  $('p').find(':contains(unCh)').css('background-color', 'blue');//find trims existing selections, looking for descendants
});
