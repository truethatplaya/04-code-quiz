var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var startButton = document.getElementById("startButton");
var quizPage = document.getElementById("quizPage");
var landingPage = document.getElementById("landingPage");
var question = document.getElementById("question");
var answerBtn1 = document.getElementById("answerBtn1");
var answerBtn2 = document.getElementById("answerBtn2");
var answerBtn3 = document.getElementById("answerBtn3");
var answerBtn4 = document.getElementById("answerBtn4");
var scorePage = document.getElementById("scorePage");
var timerEl = document.getElementById("countdown");
var timerInterval;

// made this into and object to be able to use it in a function
var gameOverPrompt = {
  name: "gameOverPrompt",
  prompt: "You ran out of time. Would you like to start over?",
};

//quiz quetions
var quizQuestions = [
  {
    question: "Who was not a member of the Backstreet Boys?",
    answers: {
      a: "Brian Littrell",
      b: "Aaron Carter",
      c: "AJ McLean",
      d: "Kevin Richardson",
    },
    correctAnswer: "b",
  },
  {
    question: "Which artist released the song “Hips Don’t Lie” in 2005?",
    answers: {
      a: "Mariah Carey",
      b: "Kelly Clarkson",
      c: "Shakira",
      d: "Jennifer Lopez",
    },
    correctAnswer: "c",
  },
  {
    question: "What year did Katy Perry release “I Kissed a Girl”?",
    answers: {
      a: "2008",
      b: "2005",
      c: "2007",
      d: "2009",
    },
    correctAnswer: "a",
  },
  {
    question: "What instrument does Lizzo play?",
    answers: {
      a: "flute",
      b: "guitar",
      c: "drums",
      d: "piano",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Who sings these lyrics, “Yeah I know that I let you down, is it too late to say I'm sorry now?”",
    answers: {
      a: "NF",
      b: "Justin Bieber",
      c: "Shawn Mendes",
      d: "Bruno Mars",
    },
    correctAnswer: "b",
  },
];

// TIMER
var timeLeft = 60;

function startTimer() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent =
      "You have " + timeLeft + " seconds left to complete quiz.";
    if (timeLeft === 0) {
      //stop the intervals from running
      clearInterval(timerInterval);
      sendGameOverMessage();
    }
  }, 1000);
}

//game over message function and restart game
//NOT sure what I am doing here. I want a game over prompt to show up and tell the user the game is over
//then I want to hide the quiz and the game to start over
function sendGameOverMessage (gameOverPrompt)() {
  gameOverPrompt;
  quizPage.classList.add("hide");
  timerEl.textContent = "Game Over";
}

// restart function
function restartGame() {
  landingPage.classList.remove("hide");
  quizPage.classList.add("hide");
}

// show quiz function
function showQuiz() {
  var output = [];
}

// need logic for correct and wrong answers

// show results of the quiz
function showResults() {}

//on submit, show the results
// submitButton.addEventlistener("click", showResults);

//on start, show quiz questions, start timer, hide landing page
startButton.addEventListener("click", function () {
  showQuiz();
  startTimer();
  landingPage.classList.add("hide");
  quizPage.classList.remove("hide");
});

//on start up, a message is presented with how to take the quiz and button is avaiable to click to show quiz

//NOTES
// showQuiz(); - when this is in global scope this will start on load of page
//TODO:make a note tab. look up in Google
