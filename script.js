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
var endScore = document.querySelector("#end-score");
var result = document.querySelector("#result")


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
  quizAnswerList.setAttribute("style", "display: flex; justify-content: space-evenly;")
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

//Display score
function displayScore(){
var endScore = JSON.parse(localStorage.getItem(scores));

endScore.setAttribute("style", "font-size: 25px; color: purple;")
endScore.appendChild("end-score")
}


