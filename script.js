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
var scores = [];
var endScore = document.querySelector("#end-score");
var result = document.querySelector("#result");
var highScorePage = document.querySelector("#high-score-page");
var highScoreList= document.querySelector("#high-score-list");


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
            result.innerHTML = "Incorrect!"; //Where do I need to put this so it displays on the current question instead of the next? 
            quizQuestionContainer.innerHTML = '';
            quizAnswerContainer.innerHTML = '';
            getQuestions();
          }
          else{
            if(child.value === "correct"){
              // alert("Correct!")
            }
            quizQuestionContainer.innerHTML = '';
            quizAnswerContainer.innerHTML = '';
            getQuestions()
          }
        }
        else{
          if(child.value == "incorrect"){
            // alert("Incorrect!");
            secondsLeft-=10;
          }
            if(child.value === "correct"){
              // alert("Correct!")
            }
            var quizSection = document.getElementById("quiz-section")
            quizSection.classList.add("hidden")
            var scoreForm = document.getElementById("score-form")
            scoreForm.classList.remove("hidden")
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

endScore.textContent = "Congratulation! Your score is..." + scores[0] + "."; //how do I get the curernt score here?


var highScores = [];

//High score page
function renderHighScores (){

highScoreList.innerHTML = "";

  // var quizSection = document.getElementById("quiz-section")
  // quizSection.classList.add("hidden")
  // var scoreForm = document.getElementById("score-form")
  // scoreForm.classList.add("hidden")
  // var highScorePage = document.getElementById("#high-score-page")
  // highScorePage.classList.remove("hidden")

  document.getElementById("high-score-list").innerHTML = JSON.parse(localStorage.getItem("scores"));

  // JSON.parse(localStorage.getItem("scores"));

  // for(var i = 0; i < scores.length; i++){
  //   var scores = scores[i];

  //   var li = document.createElement("li");
  //   li.textContent = scores;
  //   li.setAttribute("data-index", i);
  //   highScoreList.appendChild(li);
  // }
}
