var dog = {
  legs: 4,
  breed: 'retriever',
  bark: function() {
    console.log('woof!');
  }
};
console.log(dog);
var stringDog = JSON.stringify(dog);
console.log(stringDog);

//Looks like we've lost the object's methods here. Presumably this is a feature of JSON designed to prevent having to encode a bunch of methods in JSON strings and encouraging the use of prototyping?

stringDog = stringDog.replace('breed','kind'); // Why doesn't this line work unless I'm assigning the value to a var? I feel like I'm missing something here.
console.log(stringDog);
var secondDog = JSON.parse(stringDog);
console.log(secondDog);
$('#content').append(secondDog);
