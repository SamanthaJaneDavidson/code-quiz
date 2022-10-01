//Quiz questions
var quizQuestions = [
  {
      question: "Commonly used data types do not include? ",
      answer: ["Strings", "Booleans", "Alerts", "Numbers"],
      correct: "Alerts"
  }, {
      question: "Blah blah blah blah blah blah? ",
      answer: ["stuff", "different stuff", "more stuff", "this sucks"],
      correct: "this sucks"
  }, {
      question: "How well does Sam know JavaScript?",
      answer: ["not at all", "maybe a little", "getting there", "totally got this"],
      correct: "maybe a little"
  }, {
      question: "How much more time should I spend on this before I see my tutor?",
      answer: ["give up", "2 more hours", "4 more hours", "the rest of your life"],
      correct: "4 more hours"
  }, {
      question: "Is 1 week enough to actually be able to do this assignment?",
      answer: ["definitely not", "with some help maybe", "if there were more hours in the day", "definitely"],
      correct: "with some help maybe"
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

    //question cycle 
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

      //????
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

