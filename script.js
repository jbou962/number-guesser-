// number guesser
  // variables
    // this is the user number guess input
var guessInput = document.getElementById("guessinput");

    //this os the users submit guess button
var submitButton = document.getElementById("submitbtn");

    //last guessed number display


    // guessed number
var displayGuess = document.getElementById("userguess");

var correctNumber

var clearButton = document.getElementById("clearbtn")

var min = document.querySelector(".min-box")

var max = document.querySelector(".max-box")

var setRangeButton =document.querySelector(".set-button")

// THESES IS THA FUNKSHONES
function randomNumber(){
  correctNumber = Math.floor(Math.random() * 100 + 1);
  console.log(correctNumber)
}

randomNumber()

function clearInputField(){
  guessInput.value = "";
}

function guessDisplay() {
  document.querySelector(".user-last-guess").innerText = parseInt(guessinput.value)
}

//  this is my if/else satement group//
function checkGuess() {
  var userGuess = parseInt(guessinput.value);
  var indicator = document.querySelector(".indicator")
  console.log(userGuess);
  if(userGuess < correctNumber){
    indicator.innerText = "that was too LOW try again";
    console.log("low");
    //this is the else part
  } else if(userGuess > correctNumber){
    indicator.innerText = "that was too HIGH try again";

  } else if(userGuess === correctNumber) {
    indicator.innerText = "RIGHT ON!!";
  }
}
//THIS IS THE MIN MAX
function minMax(){
  //this is where they turn into intergers//
  parseInt(min.value, max.value)

  event.preventDefault();
  //grabbing the min box and returns the lowest number//
  Math.min("min, max");
  //grabbing the max box and returns the highest number
  Math.max("max, min");
  console.log("i can see")
};

submitButton.addEventListener('click', function(event){
  event.preventDefault();
  checkGuess()
  guessDisplay()
});

//clear button event listener//
clearButton.addEventListener("click", function(event){
  event.preventDefault();
  clearInputField()
});


setRangeButton.addEventListener("click", function(event){
  event.preventDefault();
  minMax();

});
