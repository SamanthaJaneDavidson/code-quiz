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

//Get current question 
function getQuestions() {
  var question = quizQuestions[currentQuestion];
  quizQuestionContainer.textContent = question.question;
  var quizAnswerList = document.createElement("ol");
   for(i = 0; i < 4; i++) {
    var answer = document.createElement("li");
    answer.textContent = quizQuestions[0].answer[i].text;
    quizAnswerList.appendChild(answer);
   }
 
  quizAnswerContainer.appendChild(quizAnswerList);
  // quizAnswerContainer.setAttribute("style", "font-size: 25px;" "background-color: white" );
    answer.setAttribute("class", "btn");
  
  }

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

  //local storage 
