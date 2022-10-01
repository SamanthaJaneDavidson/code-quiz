//Quiz questions
var quizQuestions = [
  {
      question: "Commonly used data types do not include? ",
      answer: ["Strings", "Booleans", "Alerts", "Numbers"],
      correct: "Alerts"
  }, {
      question: "Placeholder 2",
      answer: ["a", "b", "c", "d"],
      correct: "a"
  }, {
      question: "Placeholder 3",
      answer: ["a", "b", "c", "d"],
      correct: "b"
  }, {
      question: "Placeholder 4",
      answer: ["a", "b", "c", "d"],
      correct: "c"
  }, {
      question: "Placeholder 5",
      answer: ["a", "b", "c", "d"],
      correct: "d"
  }]

//Access HTML elements
var heading = document.querySelector("#heading");
var menu = document.querySelector("#menu")
var currentQuestion = 0;
var ans = 0;

//Starting screen 
function startScreen(){
 
  var item = document.createElement("li");
  var btn = document.createElement("button");

  btn.textContent = "start";
  btn.setAttribute("id", "start-button");

  menu.appendChild(item);
  item.appendChild(btn);

  heading.textContent = "blah blah"
}


//Get current question 
function getQuestions() {

  var question = quizQuestions[currentQuestion];

  heading.textContent = question.question; 

  question.innerHTML = '';

  // var quizAnswerList = document.createElement("ol");
  // quizAnswerList.setAttribute("style", "display: flex; justify-content: space-evenly;")
  // quizAnswerList.append(question);

  menu.innerHTML = '';

  for(i = 0; i < question.answer.length; i++){
  console.log(question.answer[i]);

    var item = document.createElement("li");
    var button = document.createElement("button");

    button.setAttribute("class", "answer-button");
    button.textContent = question.answer[i];
    button.dataset.index = currentQuestion;
    button.dataset.next = currentQuestion + 1;

    if(question.answer[i] === question.correct){
      button.datatset.value = "correct";
    }
    else{
      button.dataset.value = "incorrect";
    }

    menu.appendChild(item);
    item.appendChild(button);
    }
  }

    startScreen();

    menu.addEventListener("click", function(event){
      console.log(ans);
      
      var child = event.target;
      console.log(child);
    
      if(child.matches("#start-button")){
        getQuestions();
      }
      if(child.matches(".answer-button")){
        if(child.dataset.next < quizQuestions.length){
        currentQuestion =parseInt(child.dataset.next);
        if(child.dataset.value === "correct" ){
          ans++
        }
        getQuestions();
       }
       else{
        if(child.dataset.value === "correct" ){
          ans++
       }

          heading.textContent = "yay " + ans + "score";
           //save to local storage
          quizQuestionContainer.innerHTML = '';
          menu.innerHTML = '';
  
       
          }
        }
      }
    )

  

