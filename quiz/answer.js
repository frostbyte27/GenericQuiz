/** 
 * Answer Class
 * Used by the Quiz Model
 */

 class Answer{

    /** Text of Answer */
     _text;
     get text() {
         return this._text;
     }
     
     /** Weight used to calculate score when 
      *  this answer is selected
      */
     _weight;
     get weight() {
         return this._weight;
     }
     

     /**
      * Constructor for Answer object
      * @param {string} text    Text of answer 
      * @param {number} weight       Weight used in scoring
      */
     constructor(text, weight){
         this._text = text;
         this._weight = weight;
     }
 }

 module.exports = {Answer};