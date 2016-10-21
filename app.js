'use strict';

var quiz1 = prompt('Is Christina terrified of small breed horses?');
console.log('quiz1: ', quiz1);
console.log(quiz1.toLowerCase());
if (quiz1.toLowerCase() === 'yes') {
  alert('To a degree, note we didn\'t call them ponies. +1');
}
else if (quiz1.toLowerCase() === 'no') {
  alert('Sadly, she is. -1');
}
else {
  alert('"Yes" or "No"');
}

var quiz2 = prompt('Is Christina\'s favorite medium acrylics?');
console.log('quiz2:', quiz2);
console.log(quiz2.toLowerCase());
if (quiz2.toLowerCase() === 'no') {
  alert('Oils all day! +1');
}
else if (quiz2.toLowercase() === 'yes') {
  alert('Sorry, but you\'re incorrect. -1');
}
else {
  alert('"Yes" or "No"');
}

var quiz3 = prompt('Has Christina climbed Mount Huashan?');
console.log('quiz3:', quiz3);
console.log(quiz3.toLowerCase());
if (quiz3.toLowerCase() === 'yes') {
  alert('It was exhilarating. +1');
}
else if (quiz3.toLowerCase() === 'no') {
  alert('Wrong. -1');
}
else {
  alert('"Yes" or "No"');
}
var quiz4 = prompt('Can Christina play the guitar?');
console.log('quiz4', quiz3);
if (quiz4.toLowerCase() === 'no') {
  alert('Correct! +1');
}
else if (quiz4.toLowerCase() === 'yes') {
  alert('Incorrect, piano is her jam. -1');
}
else {
  alert('"Yes" or "No"');
}
var quiz5 = prompt('Does Christina occasionally dream of being a storm chaser?');
console.log('quiz5', quiz5);
if (quiz5.toLowerCase() === 'yes') {
  alert('Yes!+100');
}
else if (quiz5 === 'no') {
  alert('Doesn\'t everyone? -1');
}
else {
  alert('"Yes" or "No"');
}
var guessCounter = 0;
while(guessCounter < 4) {
  var quiz6 = parseInt(prompt('How many siblings do I have?'));
  guessCounter++;
  if(quiz6 === 6) {
    alert('Correct!');
    break;
  }else if(quiz6 < 6){
    alert('Guess again!');
  }else if(quiz6 > 6) {
    alert('Guess again!');
  }
}
var guessCounter = 0;
var state = ['Alabama', 'Georgia', 'Iowa'];
while(guessCounter < 6) {
  var quiz7 = prompt('What States have I lived in other than Washington?');
  guessCounter++;
  forEach(stateCounter = 0, stateCounter < state.length, stateCounter++);
  if(quiz7 != state[stateCounter]) {
    alert('Wrong');
    break;
  }
}
