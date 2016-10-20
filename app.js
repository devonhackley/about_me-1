'use strict';

//Variables
var answerListing = ['yes','no','yes','no','yes'];
var questionListing = ['Is Christina terrified of small breed horses?','Is Christina\'s favorite medium acrylics?','Has Christina climbed Mount Huashan?','Can Christina play the guitar?','Does Christina occasionally dream of being a storm chaser?'];

//functions
function quiz() {
  for (var i = 0; i < questionListing.length; i++){
    var answer = prompt(questionListing[i]);
    if(answer === answerListing[i]){
      alert('Correct');
      console.log('If the user is correct they will be alerted');
    } else {
      alert('Incorrect');
      // console.log('If the user is incorrect they will be alerted');
    }
  }
}

function quizTwo() {
  var guessCounter = 0;
  var numSiblings = 6;
  while (guessCounter < 4) {
    var answerSix = parseInt(prompt('How many siblings do I have? '));
    guessCounter++;
    if (answerSix === numSiblings) {
      alert('Correct');
      break;
    } else if (answerSix < numSiblings) {
      alert('Guess higher');
    }else if (answerSix > numSiblings){
      alert('Guess lower');
    }else {
      alert('Incorrect input, type a number!');
    }
  }
}

//Do stuff
quiz();
quizTwo();

// console.log('quiz1: ', quiz1);
// console.log(quiz1.toLowerCase());
//
// var quiz2 = prompt('Is Christina\'s favorite medium acrylics?');
// console.log('quiz2:', quiz2);
// console.log(quiz2.toLowerCase());
// if (quiz2.toLowerCase() === 'no') {
//   alert('Oils all day! +1');
// }
// else if (quiz2.toLowercase() === 'yes') {
//   alert('Sorry, but you\'re incorrect. -1');
// }
// else {
//   alert('"Yes" or "No"');
// }
//
//
// console.log('quiz3:', quiz3);
// console.log(quiz3.toLowerCase());
// if (quiz3.toLowerCase === 'yes') {
//   alert('It was exhilarating. +1');
// }
// else if (quiz3.toLowerCase() === 'no') {
//   alert('Wrong. -1');
// }
// else {
//   alert('"Yes" or "No"');
// }
//
// console.log('quiz4', quiz3);
// if (quiz4.toLowerCase() === 'no') {
//   alert('Correct! +1');
// }
// else if (quiz4.toLowerCase() === 'yes') {
//   alert('Incorrect, piano is her jam. -1');
// }
// else {
//   alert('"Yes" or "No"');
// }
// var quiz5 = prompt('Does Christina occasionally dream of being a storm chaser?');
// console.log('quiz5', quiz5);
// if (quiz5.toLowerCase() === 'yes') {
//   alert('Yes!+100');
// }
// else if (quiz5 === 'no') {
//   alert('Doesn\'t everyone? -1');
// }
// else {
//   alert('"Yes" or "No"');
// }
//
//
//
// //Do stuff
// var quiz1 = prompt('Is Christina terrified of small breed horses?');
// var quiz2 = prompt('Is Christina\'s favorite medium acrylics?');
// var quiz3 = prompt('Has Christina climbed Mount Huashan?');
// var quiz4 = prompt('Can Christina play the guitar?');
// var quiz5 = prompt('Does Christina occasionally dream of being a storm chaser?');
