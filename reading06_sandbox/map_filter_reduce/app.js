$(function() {
  var x = [1,2,3,4,5,6,7,8,9,10];

  function odd(a) {
    return a % 2 === 1;
  }
  var filterX = x.filter(odd);
  console.log('x\'s odd members are ' + filterX);

  function square(a) {
    return a * a;
  }
  var mapX = x.map(square);
  console.log('the squares of the elements of x are ' + mapX);

  function chew(a,b) {
    return a * b;
  }
  var reduceX = x.reduce(chew);
  console.log('the product of the whole of x is ' + reduceX);
});
