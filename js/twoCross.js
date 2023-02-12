
class CrosswordRow {
    constructor(answer, typedAnswer) {
        this.answer = answer;
        this.typedAnswer = typedAnswer;
    }
}

//creating answers for crossword rows
var row0 = new CrosswordRow("MOOSE", "");
var row1 = new CrosswordRow("HATTRICK", "");
var row2 = new CrosswordRow("SQUIRREL", "");
var row3 = new CrosswordRow("JAKARTA", "");
var row4 = new CrosswordRow("TSUNAMI", "");
var row5 = new CrosswordRow("GENERAL", "");
var row6 = new CrosswordRow("RONALDO", "");
var row7 = new CrosswordRow("BRAHMOS", "");
var row8 = new CrosswordRow("KUCHIPUDI", "");
var row9 = new CrosswordRow("RUGBY", "");

var Crossword = [row0, row1, row2, row3, row4, row5, row6,row7,row8,row9];

//number of correctly filled out rows
var numberChecker = 0;

//skipping to next row if current row has a letter entered
function skipToNext(elem) {
    var nextElemIndex = parseFloat(elem.getAttribute('tabindex')) + 1;
    document.querySelector('[tabindex="' + nextElemIndex + '"]').focus();
}


document.getElementById("submit_crossword").addEventListener("click", function (e) {
    e.preventDefault();
  
  //we start with number of correct questions set to 0 each time Submit button is clicked
    numberChecker = 0;
    for (var j = 0; j < Crossword.length; j++) {
        Crossword[j].typedAnswer = "";

        for (var i = 0; i < Crossword[j].answer.length; i++) {
//getting all letters typed in a row 
            Crossword[j].typedAnswer += document.getElementById("cross-row" + j.toString()).querySelectorAll("input")[i].value.toUpperCase();
        }
      
      //if typed letters match the correct answer
        if (Crossword[j].typedAnswer === Crossword[j].answer) {
          
          //remove class css 'bad' which marks input with dark pink
            document.getElementById("cross-row" + j.toString()).classList.remove("bad");
          
          //and adds css class 'good' which marks row in lilac color
            document.getElementById("cross-row" + j.toString()).classList.add("good");
          //if good answer, increase number of correct answers
            numberChecker++;
        } else {

            document.getElementById("cross-row" + j.toString()).classList.remove("good");
            document.getElementById("cross-row" + j.toString()).classList.add("bad");
        }
    }
  
  //if number of correct answers equals number of rows in the crossword
    if (numberChecker == Crossword.length) {
        var highlightedWord = document.querySelectorAll('input[data-type="hightlight"]')
        for (var k = 0; k < highlightedWord.length; k++) {
          //add to all the inputs with data-type highlight special css class :)
            highlightedWord[k].classList.add("main-highlighted");
        }

    }
});
