/**
 * Question
 * Generates a model of a question
 * Part of the Quiz Model
 */
const {Answer} = require("./answer.js");

class Question {

    
    get questionText(){ return this._questionText}
    set questionText(text){ this._questionText = text}

    // Category question belongs in
    get category(){ return this._category}
    set category(cat){ this._category = cat}

    // Image file associated with question
    // may default to category image
    // Note: slight change from java version, path instead of Image object
    get image(){ return this._image}
    set image(path){ this._image = path}

    //Title of the question
    get title(){ return this._title}
    set title(string){ this.title = string}

    //Return collection of answers
    get answers(){return this._answers}

    //Answer that was selected
    _selectedAnswer = undefined;
    get selectedAnswer(){ return this._selectedAnswer}


    /**
     * Full Constructor
     * @param {string} imgPath 
     * @param {string} title 
     * @param {string} questionText 
     */
    constructor(imgPath, title, questionText){

        // Text presented to user
        this._questionText = questionText;

        // Category question belongs in
        this._category = undefined;

        // Set of answers for the question
        this._answers = [];

        // Image file associated with question
        // may default to category image
        // Note: slight change from java version, path instead of Image object
        this._image = imgPath;

        //Title of the question
        this._title = title;

        //Boolean indicating whether question has been answered
        this._answered = false;

        //Answer that was selected
        this._selectedAnswer = undefined;

    }

    /**
     * Create an Answer object and add it to this
     * Question's set of Answers
     * @param {string} answerText 
     * @param {number} weight 
     */
    addAnswer(answerText, weight){
        //TODO: Verfication test of weight and whether answers array exists
        //Create new answer
        const answer = new Answer(answerText,weight);
        //assign values in Answer constructor

        this._answers.push(answer);

    }


    // ----------- Active Session Methods ---------

    /**
     * Select an answer for the question
     * @param {number} ansIndex  Index of selected answer
     */
    answerQuestion(ansIndex){
        //check that answer is in proper range
        if( ansIndex < 0 || ansIndex >= this.answers.length){
            console.log('Invalid Answer index: '+ansIndex+'. Valid Range: 0-'+this.answers.length);
            return false;
        }

        this.selectedAnswer(this.answers[ansIndex]);
        this.answered = true;
        return true;
    }

    /**
     * Resets the question to an unanswered state
     */
    reset(){
        this.selectedAnswer(null);
        this.answered = false;
    }

 }

 module.exports = {Question};