console.log("Anthony's questions");

//Quiz questions 
var quizQuestions = [
  {
      question1: "Placeholder 1",
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
  }]

//Access HTML elements
var startBtn = document.querySelector("#start-btn");
var quizContent = document.querySelector("#quiz-questions");
var choices =  document.querySelector("choices");

//Start quiz 
function startQuiz(){
  startBtn.addEventListener("click", setTime());
}

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