

var questions = [
  {
    question: "Placeholder1",
    answer: ["a", "b", "c", "d"],
    correct: "a",
  },
  {
    question: "Placeholder1",
    answer: ["a", "b", "c", "d"],
    correct: "b",
  },
  {
    question: "Placeholder1",
    answer: ["a", "b", "c", "d"],
    correct: "c"
  },
  {
    question: "Placeholder1",
    answer: ["a", "b", "c", "d"],
    correct: "d",
  }
];

var currentQuestion = 0;
var ans = 0;
var quizQuestions = document.querySelector("#quiz-questions");
var quizAnswers = document.querySelector("#quiz-answers");

/**
 * Renders start screen
 */
function startScreen(){

  // add the start button
  // create
  var item = document.createElement("li");
  var btn = document.createElement("button");
  // modify/add attributes/values
  btn.textContent = "start";
  btn.setAttribute("id", "start-button");

  // append to a visible element on the page
  quizAnswers.appendChild(item);
  item.appendChild(btn);

  // add the heading
  // modify/add attributes/values
//   heading.textContent = "Start Adding Kittens to your collection!"
}

function getQuestions(){
  // {
  //   q: "How do you rate this kitten?",
  //   id: 1,  
  //   image: "assets/images/kitten1.jfif"
  // },
  var question = questions[currentQuestion];

  quizQuestions.textContent = question.question;

//   kittenFigure.innerHTML = '';

//   var kittenImage = document.createElement("img"); //create

//   kittenImage.setAttribute("src", kitten.image) //modify
//   kittenImage.setAttribute("alt", "Kitten"); // modify

//   kittenFigure.append(kittenImage); // append

  // clear menu
  quizAnswers.innerHTML = '';

  for(var i = 0; i < question.answer.length; i++){
    console.log(question.answer[i]);

    // <li>
    //       <button class="option-button" data-index="2" data-value="5" data-next="-1">Rate 5</button>
    //     </li>
    var item = document.createElement('li'); // create
    var button = document.createElement('button');
    // modify
    button.setAttribute("class", "option-button");
    button.textContent = question.answer[i];
    button.dataset.index = currentQuestion;
    button.dataset.next = currentQuestion + 1;
    // if(kitten.rating[i] !== kitten.incorrect){
    //   button.dataset.value = "correct";
    // }
    // else{
    //   button.dataset.value = "incorrect";
    // }
    if(question.answer[i] === question.incorrect){
      button.dataset.value = "incorrect";
    }
    else{
      button.dataset.value = "correct";
    }
    
    quizAnswers.appendChild(item);
    item.appendChild(button);// append
  }
}

// call startscreen to show the first screen
startScreen();

quizAnswers.addEventListener("click", function(event){
//   console.log(ans);

  var child = event.target;
//   console.log(child);

  if(child.matches("#start-button")){
    getQuestions();
  }
  if(child.matches(".option-button")){
    if(child.dataset.next < questions.length){
      currentKitten = parseInt(child.dataset.next);
      if(child.dataset.value === "correct"){
        ans++;
      }
      getQuestions();
    }
    else{
      if(child.dataset.value === "correct"){
        ans++;
      }

    //   heading.textContent = "Yay you got ... " + ans + " kittens!";
      // save the ans to localstorage
    //   kittenFigure.innerHTML = "";
      quizAnswers.innerHTML = "";
    }
  }
})
