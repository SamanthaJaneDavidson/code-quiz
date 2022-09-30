//Quiz questions
var quizQuestions = [
  {
      question: "Commonly used data types do not include? ",
      answer: ["Strings", "Booleans", "Alerts", "Numbers"],
      correct: "Alerts"
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
  // quizQuestionContainer.innerHTML = '';
  // quizAnswerContainer.innerHTML = '';
  var question = quizQuestions[currentQuestion];
  quizQuestionContainer.textContent = question.question;

  var quizAnswerList = document.createElement("ol");
  quizAnswerList.setAttribute("style", "display: flex; justify-content: space-evenly;")

   for(i = 0; i < 4; i++) {
    var answer = document.createElement("button");
    answer.setAttribute("style", "font-size: 20px; margin: 10px; background-color: purple; color: white; cursor: pointer;")
    answer.textContent = quizQuestions[0].answer[i];
    quizAnswerList.appendChild(answer);
   }
   
    quizAnswerContainer.appendChild(quizAnswerList);
    quizAnswerList.setAttribute("class", "li")


  }

    //Answer values? 
    quizAnswerContainer.addEventListener("click", function(event){
      
      var child = event.target;
    
      if(child.matches("button")){
        if(child.dataset.next < quizQuestions.length){
          currentQuestion = parseInt(child.dataset.next);
          if(child.dataset.value === false){
            //need to subtract from timer - how? 
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

    function getNextQuestion(){
      for(i = 0; i < currentQuestion.length; i++)
      getQuestions()
    }

    //local storage
    // var count = localStorage.getItem("count");

    // counter.textContent = count;

    // quizAnswerContainer.addEventListener("click", function() {
    //   if(correct = false) {
    //   count--;
    //   localStorage.setItem("count",count);
    //   }
    // })



   
  //Game over timer
  function gameOver() {
    timer.textContent = "Time is up!";
    //present score somehow
  }


  //high score page 

