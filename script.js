console.log("Anthony's questions");
//Access HTML elements
var startBtn = document.querySelector("#start-btn");
var quizContent = document.querySelector("#quiz-content");
var quizQuestionContainer = document.querySelector("#quiz-questions");
var choices =  document.querySelector("#choices");
var currentQuestion = 0;

// var startBtn = document.getElementById("start-btn");
// var quizContent = document.getElementById("quiz-content");
// var quizContent = document.getElementById("quiz-questions");
// var choices =  document.getElementById("choices");


//Start quiz
var startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startQuiz);

function startQuiz(){
  setTime();
  startBtn.setAttribute("style", "display: none;");
  getQuestions()

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

function getQuestions() {
  // question1: "Placeholder 1",
  // choices: [
  //   {text: "a", correct: false},
  //   {text: "b", correct: false},
  //   {text: "c", correct: true},
  //   {text: "d", correct: false},
  // ]
  var question = quizQuestions[currentQuestion];
  quizQuestionContainer.textContent = question.question;

}

//Question elements
var questionListEl = document.createElement("ol");

//Question list items
var question1 = document.createElement("li");
var question2 = document.createElement("li");
var question3 = document.createElement("li");
var question3 = document.createElement("li");

//Quiz questions
var quizQuestions = [
  {
      question: "Placeholder 1",
      choices: [
        {text: "a", correct: false},
        {text: "b", correct: false},
        {text: "c", correct: true},
        {text: "d", correct: false},
      ]
  }, {
      question: "Placeholder 2",
      choices: [
        {text: "a", correct: true},
        {text: "b", correct: false},
        {text: "c", correct: true},
        {text: "d", correct: false},
      ]
  }, {
      question: "Placeholder 3",
      choices: [
        {text: "a", correct: true},
        {text: "b", correct: false},
        {text: "c", correct: true},
        {text: "d", correct: false},
      ]
  }, {
      question: "Placeholder 4",
      choices: [
        {text: "a", correct: true},
        {text: "b", correct: false},
        {text: "c", correct: true},
        {text: "d", correct: false},
      ]
  }, {
      question: "Placeholder 5",
      choices: [
        {text: "a", correct: true},
        {text: "b", correct: false},
        {text: "c", correct: true},
        {text: "d", correct: false},
      ]
  }]

  //Game over timer
  function gameOver() {
    timer.textContent = "Time is up!";
    //present score somehow
  }