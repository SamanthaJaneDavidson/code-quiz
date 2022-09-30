//Quiz questions
var quizQuestions = [
  {
      question: "Some question here about something that's probably important that I don't know the answer to? ",
      answer: [
        {text: "Something something something", correct: false},
        {text: "Something something something", correct: false},
        {text: "Important answer that I don't understand", correct: true},
        {text: "Something something something", correct: false},
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

//Access HTML elements
// var startBtn = document.querySelector("#start-btn");
var quizQuestionContainer = document.querySelector("#quiz-questions");
var quizAnswerContainer = document.querySelector("#quiz-answers");
var currentQuestion = 0;
var ans = 0;


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
  quizQuestionContainer.innerHTML = '';
  quizAnswerContainer.innerHTML = '';
  var question = quizQuestions[currentQuestion];
  quizQuestionContainer.textContent = question.question;

  var quizAnswerList = document.createElement("ol");
  quizAnswerList.setAttribute("style", "display: flex; justify-content: space-evenly;")

   for(i = 0; i < 4; i++) {
    var answer = document.createElement("button");
    answer.setAttribute("style", "font-size: 20px; margin: 10px; background-color: purple; color: white; cursor: pointer;")
    answer.textContent = quizQuestions[0].answer[i].text;
    quizAnswerList.appendChild(answer);
   }
    quizAnswerContainer.appendChild(quizAnswerList);
    quizAnswerList.setAttribute("class", "li")

  }

    quizAnswerContainer.addEventListener("click", function(event){
      
      var child = event.target;
    
      if(child.matches("#start-brn")){
        getQuestions()
      }
      if(child.matches("button")){
        if(child.dataset.next < quizQuestions.length){
          currentQuestion = parseInt(child.dataset.next);
          if(child.dataset.value === true){
            ans++
          }
          getQuestions();
        }
        else{
          if(child.dataset.value === true){
            ans++
          }

          quizQuestionContainer.innerHTML = '';
          quizAnswerContainer.innerHTML = '';
        }
      }
    })
   
  //Game over timer
  function gameOver() {
    timer.textContent = "Time is up!";
    //present score somehow
  }


  //high score page 

  //local storage
