/**
 * Created by hanifa on 4/8/17.
 */

//var BasicCard = require("BasicCard");

function ClozeCard( text, cloze){
    this.text = text;
    this.cloze = cloze;
    this.BasicCards = [];

    this.clozed_Text = function(){
        if(!this.clozeValidator()){
            return console.log("cloze argument can't be null");
        }
        else{
            console.log("THE CLOZE TEXT:  "+this.cloze);
            return this.cloze;
        }
    };

    this.getPartialText = function(){
        if(!this.clozeValidator()){
            return console.log("cloze argument can't be null");
        }
        else{
            var temp = this.text;
            var new_string = temp.replace(this.cloze, '...........');
            console.log("THE NEWLY FORMED PARTIAL TEXT:  "+new_string);
            return new_string;

        }

    }

    this.getFullText = function(){
        if(!this.inputTextValidator()){
            return console.log("Text argument can't be null");
        }
        else{
            console.log("THE TEXT:  "+this.text);
            if(this.text.includes(this.cloze)){
                return this.text;
            }else{
                return console.log(this.cloze+" doesn't appear in "+this.text);
            }

        }
    }

    this.clozeValidator = function(){
        if(this.cloze.length <=0){
            return false;
        }else{
            return true;
        }
    }

    this.inputTextValidator = function(){
        if(this.text.length <=0){
            return false;
        }else{
            return true;
        }
    }
}

//module.exports = ClozeCard;

var testingOUT = new ClozeCard("My name is not know by all, Hanifa Booba is my name","Hanifa Booba");
//var firstPresidentOfUSA = new BasicCard("who was the first president of the united states","George Washington");
testingOUT.getPartialText();
testingOUT.getFullText();
testingOUT.clozed_Text();


//console.log("THIS IS THE FRONT OF 'firstPresidentOfUSA':  "+firstPresidentOfUSA.front);
//console.log("THIS IS THE BACK OF 'firstPresidentOfUSA':  "+firstPresidentOfUSA.back);