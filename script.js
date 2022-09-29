console.log("Anthony's questions");
//Access HTML elements
var startBtn = document.querySelector("#start-btn");
var quizContent = document.querySelector("#quiz-content");
var quizQuestionContainer = document.querySelector("#quiz-questions");
var quizAnswerContainer = document.querySelector("#quiz-answers");
var currentQuestion = 0;


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

//Pull in current question 
function getQuestions() {
  var question = quizQuestions[currentQuestion];
  quizQuestionContainer.textContent = question.question;

  }

  // function selectAnswer(){
    
  // }

// //Answer elements 

var quizAnswerList = doucment.createElement("ol");

var answerA = document.createElement("li");
var answerB = document.createElement("li");
var answerC = document.createElement("li");
var answerD = document.createElement("li");

//var answerText = [answerA, answerB, answerC, answerD];

quizAnswerContainer.appendChild(quizAnswerList);
quizAnswerList.appendChild([answerA, answerB, answerC, answerD])


quizAnswerContainer.setAttribute("style", "font-size: 20px");


// //Append answers 
// quizAnswerContainer.appendChild(answerA);
// quizAnswerContainer.appendChild(answerB);
// quizAnswerContainer.appendChild(answerC);
// quizAnswerContainer.appendChild(answerD);

// body.appendChild(quizAnswerContainer);

// quizAnswerContainer.appendchild(answerText);

// //Pull in current answers 
// function getAnswers(){
//   quizAnswerContainer.textContent = question.answer.text;
// }

// var quizAnswersEl = document.createElement("ol");
// for(var i = 0; i < quizAnswersEl.length; i++) {
//   quizAnswersEl[i].setAttribute ("style", "font-size: 20px;");
// }


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

  //high score page 