/**
 * Category Class
 * Defines the parameters of one of the categories used to organize questions
 */


 class Category{

    /** Name of the Category */
    _name;
     get name() {
         return this._name;
     }
     set name(value) {
         this._name = value;
     }
    
     /** Threshold to test score against */
     _threshold;
     get threshold() {
         return this._threshold;
     }
     set threshold(value) {
         this._threshold = value;
     }

     /** Key to use if score is below threshold */
     _belowKey;
     get belowKey() {
         return this._belowKey;
     }
     set belowKey(value) {
         this._belowKey = value;
     }

     /** Key to use if score is above threshold */
     _aboveKey;
     get aboveKey() {
         return this._aboveKey;
     }
     set aboveKey(value) {
         this._aboveKey = value;
     }

     /**
      * Constructs a new Category object
      * @param {string} name        Name of Category
      * @param {number} threshold   Threshold to test score against
      * @param {string} lowKey      Key if score below threshold
      * @param {string} highKey     Key if score above threshold
      */
     constructor(name, threshold, lowKey, highKey){
         this.name = name;
         this.threshold = threshold;
         this.belowKey = lowKey;
         this.aboveKey = highKey;
     }

     /**
      * Calculates the result of a particular score in this Category
      * Returns a key representing the result
      * @param {number} score 
      * @return {string} key
      */
     calculateKey(score){
         return (score < this.threshold) ? belowKey : this.aboveKey;
     }

 }

 module.export = Category;