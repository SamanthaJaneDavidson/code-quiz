  //Quiz questions
var quizQuestions = [
    {
        question: "Placeholder 1",
        answer: ["a", "b", "c", "d"],
        correct: "a",
    }, {
        question: "Placeholder 2",
        answer: ["a", "b", "c", "d"],
        correct: "c",
    
    }, {
        question: "Placeholder 3",
        answer: ["a", "b", "c", "d"],
        correct: "b",
    
    }, {
        question: "Placeholder 4",
        answer: ["a", "b", "c", "d"],
        correct: "a",
    
    }, {
        question: "Placeholder 5",
        answer: ["a", "b", "c", "d"],
        correct: "c",
    
    }];

//Access HTML elements
var quizQuestionContainer = document.querySelector("#quiz-questions");
var quizAnswerContainer = document.querySelector("#quiz-answers");
var currentQuestion = 0;
var currentAnswer = 0;

// //Start quiz
// var startBtn = document.getElementById("start-btn");
// startBtn.addEventListener("click", startQuiz);

function startQuiz(){
    // startBtn.setAttribute("style", "display: none;");
    var item = document.createElement("li");
    var btn = document.createElement("button");
    btn.textContent = "Start";
    btn.setAttribute("id", "start-button");
    quizAnswerContainer.appendChild(item);
    item.appendChild(btn);
    setTime();
 
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
    quizAnswerContainer.textContent = question.question; 
    
    quizAnswerContainer.innerHTML = '';

    for(var i = 0; i < question.answer.length; i++){
        console.log(question.answer[i]);

        var answerList = document.createElement("li");
        var answerBtns = document.createElement("button");

        button.setAttribute("class", "answer-button");
        button.textContent = question.answer[i];
        button.dataset.index = currentQuestion;
        button.dataset.next = currentQuestion + 1;

        if(question.answer[i] === answer.correct)
            button.dataset.value = "correct";
            else {
                button.dataset.value = "incorrect";
            }

        quizAnswerContainer.appendChild(answerList);
        answerList.appendChild(answerBtns)
    
    }
}

startQuiz();

quizAnswerContainer.addEventListener("click", function(event) {

    var child = event.target;

    if(child.matches("#start-btn"))
        getQuestions()

    if(child.matches("#answer-btn")){
        if(child.dataset.next < quesiton.length){
            currentQuestion = parseInt(child.dataset.next);
            if(child.dataset.value === "correct:"){
                currentAnswer++;
            }
            getQuestions();
        }  
        else{
            if(child.dataset.value === "correct"){
                currentAnswer++;
            }

            quizQuestionContainer.textContent = "You got " + currentAnswer + "on this quiz";
            //need to add save to local storage here
            quizQuestionContainer.innerHTML = '';
            quizAnswerContainer.innerHTML = '';
        } 
    }
})

  //Game over timer
  function gameOver() {
    timer.textContent = "Time is up!";
  }