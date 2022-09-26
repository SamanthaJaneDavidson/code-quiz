//Countdown timer 
var timer = document.getElementById("timer");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      gameOver();
    }

  }, 1000);
}

function gameOver() {
  timer.textContent = "Time is up!";
}

setTime();


//Start quiz 
document.getElementById("start-btn").addEventListener("click", generateQuestions());

//Questions 
function generateQuestions() {
var quizQuestions = [
{
    question: "Placeholder 1",
    choices: ["a", "b", "c", "d"],
    answer: "a"
}, {
    question2: "Placeholder 2",
    choices: ["a", "b", "c", "d"],
    answer: "a"
}, {
    question3: "Placeholder 3",
    choices: ["a", "b", "c", "d"],
    answer: "a"
}, {
    question4: "Placeholder 4",
    choices: ["a", "b", "c", "d"],
    answer: "a"
}, {
    question5: "Placeholder 5",
    choices: ["a", "b", "c", "d"],
    answer: "a"



//Question answers 
function questionAnswers(){}

submitButton.addEventListner('click', questionAnswers); //want to show on wrong answer