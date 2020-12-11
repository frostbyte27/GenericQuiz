/**
 * Question
 * Generates a model of a question
 * Part of the Quiz Model
 */


class Question {

    // Text presented to user
    _questionText;
    get questionText(){ return this._questionText}
    set questionText(text){ this._questionText = text}

    // Category question belongs in
    _category;
    get category(){ return this._category}
    set category(cat){ this._category = cat}

    // Set of answers for the question
    answers = [];

    // Image file associated with question
    // may default to category image
    // Note: slight change from java version, path instead of Image object
    _image = undefined;
    get image(){ return this._image}
    set image(path){ this._image = path}

    //Title of the question
    _title;
    get title(){ return this._title}
    set title(string){ this.title = string}

    //Boolean indicating whether question has been answered
    answered = false;
    
    //Answer that was selected
    _selectedAnswer = undefined;
    get selectedAnswer(){ return this._selectedAnswer}


    //-------  Constructors --------

    //Base constructor, should never be used
    // constructor(){
    //     this.image = null;
    //     this.title("bullshit title");
    // }

    // /**
    //  * Question Text only constructor
    //  * @param {string} questionText 
    //  */
    // constructor(questionText){
    //     this.image = null;
    //     this.title = null;
    //     this.questionText(questionText);
    // }

    /**
     * Full Constructor
     * @param {string} imgPath 
     * @param {string} title 
     * @param {string} questionText 
     */
    constructor(imgPath, title, questionText){
        this.image(imgPath);
        this.title(title);
        this.questionText(questionText);
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
        const answer = new answer();
        //assign values in Answer constructor

        this.answers.push(answer);

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