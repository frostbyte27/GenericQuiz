/***
Spirit Animal Script V 0.1
**/

//Quiz Object
//Use the quiz module
// const {Quiz} = require("./quiz");
import Quiz from "./quiz";

// const Question = require('./quiz/question');
import Question from "./quiz";

function loadQuestion(){
    //Get the page elements
    let questionText = document.getElementById('questionText');
    if(!questionText){
        alert('No question text element found');
    }
    let answerLabels = document.getElementsByClassName('answer');

    //generate new quiz
    alert('Creating Quiz');
    let quiz = new Quiz();

    
    //Populate page with first question content
    let question = quiz.questionPool[0];
    questionText.innerHTML = question.questionText;
    alert('First Q: '+question.questionText);

    //Populate answers - this is super dumb way to do this
    for(let i=0; i<question.answers.length; i++){
        let answer = question.answers[i];
        if(i < answerLabels.length){
            answerLabels[i].getElementById('text').innerText = answer.text;
        }
        else{
            console.log('Not enough answer labels');
        }
    }
}

function display() {
    alert("Hello World!");
 }

