var wordBlank = document.querySelector(".word-blanks");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var timerEl = document.getElementById('countdown');

function countdown() {
}
    var timeLeft = 20;

function startGame() {
    timerCount = 20;
    startButton.disabled = true;
    startTimer()
  }

  function loseGame() {
    wordBlank.textContent = "QUIZ IS FINISHED";
    loseCounter++
    startButton.disabled = false;
    setLosses()
  }
  