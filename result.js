/**
 * Result Class
 * Used to represent Results in a quiz model
 */

 class Result{

    /** Title of this Result*/
     _title;
     get title() {
         return this._title;
     }
     set title(value) {
         this._title = value;
     }

     /** String Key used to access this Result */
     _key;
     get key() {
         return this._key;
     }
     set key(value) {
         this._key = value;
     }

    
     _description;
     get description() {
         return this._description;
     }
     set description(value) {
         this._description = value;
     }

     /**
      * 
      * @param {string} title       Title of the Result
      * @param {string} key         Key used to identify result
      * @param {string} description Paragraph description of result
      */
     constructor(title, key, description){
        this.title = title;
        this.key = key;
        this.description = description;
     }
 }

 module.export = Result;