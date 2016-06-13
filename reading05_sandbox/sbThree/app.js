var x = [
  ['American Shorthair', 'Eliot'],
  ['British Shorthair', 'Grizelda'],
  ['Nebelung', 'Horace'],
  ['Sphynx','Theodora']
];
var y = [];
// var Fn = function () {
//   Pr(arr);
// };
// var Pr = function (arr) {
//   console.log('Pr returns ' + JSON.parse(arr));
//   return JSON.parse(arr);
// };

var Cat = function(name,breed) {
  this.name = name;
  this.breed = breed;
  this.noise = function () {
    console.log('meow.');
  };
};

for (var i = 0; i < x.length; i++) {
  y.push(new Cat(x[i][1] , x[i][0]));
}

console.log(y);

var newArray = JSON.stringify(y);

console.log('newArray is ' + newArray);

$.getJSON('myData.json').done(function(data) {
  console.log('JSON call successful.');
  console.log(data);
  // Fn();
}); //I'm still gettin inconsistent behavior from this.
