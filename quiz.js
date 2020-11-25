/***
Quiz Script V 0.1
**/

//Required libraries/nodes
//Parsing XML

//Dictionary - handled by basic object

//Imports from this package
//myTestVariable =  require('question.js');
Question = require("./question.js");
// import Question from './question';

Answer = require("./answer.js");
Category = require("./category.js");
Result = require("./category.js");


//Quiz Object
//TODO: implement Session object as well as Quiz
class Quiz {

    // Passive Properties ---------------------
    //Set of all available question objects
    //  should be loaded from XML file
    questionPool = [];

    // List of categories, also from XML
    categories = [];

    // Result Keys, defined in XML file
    resultKeys = [];

    // Set of all available result objects
    results = [];

    // Number of questions to present
    _quizSize = undefined;
    get quizSize(){ return this._quizSize};

    // Quiz Session Properties ---------------
    // Actual set of questions to present
    questions = [];

    // Set of unanswered questions
    unanswered = [];

    // Current question number
    _currentQuestion = 0;
    get currentQuestion(){ return this._currentQuestion};


    // --------  Set Up Methods -------

    /**Blank Constructor
     * Loads a template quiz with blank answers
     * Should only be used in testing
     */
    constructor(){
        console.log("Constructing Template Quiz");

        let categories = ['Category A', 'Category B', 'Category C', 'Category D'];
        //Generate twenty test questions
        for(let i=1; i<=20; i++){
            let question = new Question(null,`Question ${i}`,`What is the answer to question ${i}?`);
            
            //Set category
            question.category = categories[ i % categories.length];

            //Set Answers
            for(let j=1; j<=4; j++){
                question.addAnswer(`Answer ${i}_${j}`, (i-3));
            }

            //Add to the question pool
            this.questionPool.push(question);
        }

    }

    //Constructor
    // constructor(file){
    //     //Attempt to load quiz data from the supplied file

    //     //TODO: Loading from XML or JSON file
    //     this._setup(file);
    // }

    // Perform actual loading from file
    _setup(file){

        //load questions

        //load categories

        //load results

    }

    /**
     * Select a new set of questions from the question pool
     */
    _selectNewQuestions(qCount){

    }



    // ------ Active Session Methods -------- 
    
    /**
     * Reset the Quiz Session, selecting a fresh set of questions
     */
    startQuiz(){

    }


    /**
     * Attempt to calculate result of quiz
     * Return: Boolean indicating successful calculation
     */
    finishQuiz(){

    }


    /**
     *  Answer the question at the specified index, with answer number
     *  Removes question from the unanswered list
     *  @param: qIndex   Index of question being answered
     *  @param: answer   Answer number within the context of the question
     */
    answerQuestion( qIndex, answer){

    }


    /**
     * Attempts to calculate the result of the Quiz based
     * on the questions that have been answered.
     * Fails when unanswered questions remain
     * 
     * Generates a score for each category, constructing
     * a key to reference correct Result Model
     * 
     * @return  Result object. Undefined if failed to calculate score
     */
    calculateResult(){

    }


    /**
     * Attempts to get the Result object associated with the specified key
     * @param resultKey     Key
     * @return              Result object associated with the Key
     */
    _resultFromKey( resultKey){

    }
}

module.export = {Quiz};