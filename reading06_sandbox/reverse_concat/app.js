$(function() {
  var x = ['this', 'is', 'an', 'unremarkable', 'sentence'];
  var y = ['and', 'this', 'isnt', 'much', 'better'];
  console.log(x);

  var revX = x.reverse();
  console.log('x in reverse is ' + revX);

  var concatX = x.concat(y); //for some obscure reason, this is concatenating the reverse() of x. It appears to be the case that upon testing running reverse has actually changed the order of the items in x? Why is that allowed?
  console.log('x after concatenation is ' + concatX);
});
