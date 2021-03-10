angular.module('spiritAnimalApp', [])
    .controller('SpiritAnimalController', function() {
        const spiritAnimalController = this;
        //globals
        this.appTitle = 'Spirit Animal Quiz';

        //Maintain pointer to current question
        

        //mock question set
        this.questions = [
            {text:'hwhy are u gay?', 
                answers:["who says I am gay?", "die, cis scum", "Naw. I love the pussy"
                ]
            },
            {text:'Favorite color?', 
                answers:["merlot", "fuschia", "Blood."
                ]
            }
        ];

        this.startQuiz = function(){

        }

        this.answerQuestion = function(){
            //answer question
            console.log("Answered question with value: ")
        }

        this.nextQuestion = function(){

        }




    })