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
stringDog = stringDog.replace('retriever','terrier'); // Why doesn't this line work unless I'm assigning the value to a var? I feel like I'm missing something here.
console.log(stringDog);
var secondDog = JSON.parse(stringDog);
console.log(secondDog);
$('#content').append(secondDog);
