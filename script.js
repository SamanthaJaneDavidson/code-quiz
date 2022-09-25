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


function gameOver() {
  timer.textContent = "Time is up!";
//   var gameOverText = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

}

setTime();