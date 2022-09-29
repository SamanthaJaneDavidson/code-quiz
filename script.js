console.log("Anthony's questions");
//Access HTML elements
var startBtn = document.querySelector("#start-btn");
var nextBtn = document.querySelector("#next-btn");
var quizContent = document.querySelector("#quiz-content");
var quizQuestionContainer = document.querySelector("#quiz-questions");
var quizAnswerContainer = document.querySelector("#quiz-answers");
var currentQuestion = 0;
var currentAnswer = 0;


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
  var question = quizQuestions[currentQuestion];
  quizQuestionContainer.textContent = question.question;
  question.answer.forEach(answer => {
    var answer = document.createElement("li");
    li.innerText = answer.text;
    quizAnswerContainer.appendChild(li)

  })

}

// function getAnswers() {
//   var answer = quizAnswers[currentAnswer]; //I need to do some sort of append child here? 
//   quizAnswerContainer.textContent = answer.answer;

// }

//Question elements
// var questionListEl = document.createElement("ol");

//Question list items
// var question1 = document.createElement("li");
// var question2 = document.createElement("li");
// var question3 = document.createElement("li");
// var question3 = document.createElement("li");

//Quiz questions
var quizQuestions = [
  {
      question: "Placeholder 1",
      answer: [
        {text: "a", correct: false},
        {text: "b", correct: false},
        {text: "c", correct: true},
        {text: "d", correct: false},
      ]
  }, {
      question: "Placeholder 2",
      answer: [
        {text: "a", correct: true},
        {text: "b", correct: false},
        {text: "c", correct: false},
        {text: "d", correct: false},
      ]
  }, {
      question: "Placeholder 3",
      answer: [
        {text: "a", correct: false},
        {text: "b", correct: false},
        {text: "c", correct: false},
        {text: "d", correct: true},
      ]
  }, {
      question: "Placeholder 4",
      answer: [
        {text: "a", correct: false},
        {text: "b", correct: false},
        {text: "c", correct: true},
        {text: "d", correct: false},
      ]
  }, {
      question: "Placeholder 5",
      answer: [
        {text: "a", correct: true},
        {text: "b", correct: false},
        {text: "c", correct: false},
        {text: "d", correct: false},
      ]
  }]

  //Game over timer
  function gameOver() {
    timer.textContent = "Time is up!";
    //present score somehow
  }