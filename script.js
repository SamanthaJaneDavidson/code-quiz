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
var endScore = document.querySelector("#end-score");
var result = document.querySelector("#result");
var highScorePage = document.querySelector("#high-score-page");
var highScoreList = document.querySelector("#high-score-list");
var quizSection = document.querySelector("#quiz-section");
var scoreForm = document.querySelector("#score-form"); 


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

var secondsLeft = 60;
var timerInterval;

function setTime() {
  timerInterval = setInterval(function() {
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
  quizAnswerList.setAttribute("style", "display: flex; flex-direction: column;")
  quizAnswerContainer.appendChild(quizAnswerList);
  quizAnswerList.setAttribute("class", "li")

   for(i = 0; i < question.answer.length; i++) {
    var answer = document.createElement("button");
    if(question.answer[i] == quizQuestions[currentQuestion].correct){
      answer.value = "correct"
    }
    else{
      answer.value = "incorrect"
    }
    answer.setAttribute("style", "font-size: 20px; margin: 10px; background-color: purple; color: white; cursor: pointer;")
    answer.textContent = quizQuestions[currentQuestion].answer[i];
    quizAnswerList.appendChild(answer);
   }
  }

  //Question cycle and answer scoring 
    quizAnswerContainer.addEventListener("click", function(event){
      
      currentQuestion++

      var child = event.target;
    
      if(child.matches("button")){
        console.log(child.value)
        if(currentQuestion < quizQuestions.length){
          if(child.value == "incorrect"){
            secondsLeft-=10;
            result.innerHTML = "Incorrect!"; 
            quizQuestionContainer.innerHTML = '';
            quizAnswerContainer.innerHTML = '';
            setTimeout(() => {
              getQuestions()
            }, 500);
          }
          else{
            if(child.value === "correct"){
              result.innerHTML = "Correct!";
            }
            quizQuestionContainer.innerHTML = '';
            quizAnswerContainer.innerHTML = '';
            setTimeout(() => {
            getQuestions()
            }, 500);
          }
        }
        else{
          if(child.value == "incorrect"){
            secondsLeft-=10;
            result.innerHTML = "Incorrect!"
            setTimeout(() => {
            }, 500);
          }
            if(child.value === "correct"){
              result.innerHTML = "Correct!"
              setTimeout(() => {
              }, 500);
            }
            var quizSection = document.getElementById("quiz-section")
            quizSection.classList.add("hidden")
            var scoreForm = document.getElementById("score-form")
            scoreForm.classList.remove("hidden")
    
            endScore.textContent = "Congratulations! Your score is " + secondsLeft + "."; //how do I get the curernt score here?
            clearInterval(timerInterval);

          }}})


  //Game over timer
  function gameOver() {
    timer.textContent = "Time is up!";
    var quizSection = document.getElementById("quiz-section")
    quizSection.classList.add("hidden")
    var scoreForm = document.getElementById("score-form")
    scoreForm.classList.remove("hidden")
  }

  //Score calculation
  var scores = JSON.parse(localStorage.getItem("scores")) || [];

  function saveScore(){
    var initials = document.getElementById("initials");
    var data = {
      initials: initials.value,
      score: secondsLeft,
    }
    scores.push(data)
    localStorage.setItem("scores", JSON.stringify(scores))
  }

  var pool = document.getElementById("save-button")
  pool.addEventListener("click", saveScore)

  // High score page 
  function renderHighScores (){

  //Display appropriate section 
  quizSection.classList.add("hidden")
  scoreForm.classList.add("hidden")
  highScorePage.classList.remove("hidden")


  var storedHighScore = JSON.parse(localStorage.getItem("scores"));
    console.log(storedHighScore)

    highScoreList.innerHTML = '';

    for(var i = 0; i < storedHighScore.length; i++){
      console.log(storedHighScore[i])
      var item = document.createElement("li");
      var initials = (storedHighScore[i].initials);
      var score = (storedHighScore[i].score);
      item.textContent = initials + ":" + "  " + score; 
      highScoreList.appendChild(item);
    }

}
  document.querySelector("#high-scores a").addEventListener("click", function(event){
    renderHighScores()
}
);