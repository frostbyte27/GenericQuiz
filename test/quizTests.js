
//So, this line assigns the module.exports worker to the name 'Quiz'
// which has 'Quiz' as a key in it, so the actual class would be accessed like: Quiz.Quiz()
// const Quiz = require('../quiz.js');

//Using curly braces actually assigns the class itself
// import { Quiz } from '../quiz.js';

// const assert = require('./assert.js');
// import Quiz from '../quiz'   //can't use outside of module

const {Quiz} = require('../quiz');

const TEST_NAME = 'Quiz Object';

console.log("Quiz Unit Tests\n-----------------");

const quiz = new Quiz();

console.log("Created new Quiz");
