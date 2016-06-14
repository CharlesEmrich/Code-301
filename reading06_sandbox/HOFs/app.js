$(function() {

  function F(a) {
    console.log(a);
  }

  function HOF1(fx) {
    fx(5); //this function will provide 5 as the argument to any single-arg function.
  }

  HOF1(F);

  // =========================

  function HOF2(aleph) {
    return function G(a,b) {
      return aleph + b;
    };
  }

  console.log(HOF2(4)(1,2)); //No way to give G a val for "b."

// =========================

  // function HOF3(a) {
  //   return function closure(b) {
  //     return a - b * Math.random();
  //   };
  // }
  //
  // var newFunc = HOF3(5);
  // console.log(newFunc);
  //
  // var newTwo = closure(3); //closure is undefined here.
  // console.log(newTwo);
  function catName(firstName) {
    var greeting = 'Why, look, it\'s ';
    function breedName(breed) {
      return greeting + 'a ' + breed;
    }
    console.log(breed); //does this work?
  }

  var testCat = catName('Hubert');

//Below is example code. It is not mine. And I dunno how it works. What exactly is the difference between a proper closure and a function which merely runs or is called inside another one and therefore has access to its local variables>

// It looks like the code below should have the same error mine does. Although I could easily fix the error my code is returning, I'm going to leave it as is so that it has an example of something that's confusing me.

//   function celebrityName(firstName) {
//     var nameIntro = "This celebrity is ";
//       function lastName (theLastName) {
//         return nameIntro + firstName + " " + theLastName;
//     }
//     return lastName;
// }
// ​var mjName = celebrityName('Michael');
// ​mjName ("Jackson"); // This celebrity is Michael Jackson 

});

// [+1] A higher order function (HOF) that has a function F as a parameter, and calls F. Let F accept one parameter. Your app should call the HOF.
// [+1] A HOF that returns a function G. G accepts two parameters. Your app should call the HOF, then your app should use the returned function.
// [+1.5] A HOF that returns a closure. Your app should call the HOF, then your app should use the closure.
