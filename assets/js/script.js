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
var nextQuestionBtn = document.getElementById("nextQuestionBtn");
var restartGameBtn = document.getElementById("restartGameBtn");
var timerInterval;
var quizIndex = 0;
var correctAnswer;
var user = {
  name: "",
  score: 0,
};
localStorage.setItem("user", "");
// localStorage.setItem("userInitials");

// made this into and object to be able to use it in a function
var gameOverPrompt = {
  name: "gameOverPrompt",
  prompt: "You ran out of time. Would you like to start over?",
};

//quiz questions
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

function play() {
  debugger;
  startGame(); // start timer
  var answer = showQuiz(quizIndex);

  // play game (X)
  // start timer (X)

  // for each question (X)
  // show answers (X)

  // if correct answer (X)
  //  - show correct answer message
  //  - score +
  //  - move to next
  //  - update score local storage
  // if wrong answer (X)
  //   - minus time
  //   - incorrect answer message
  // move to next

  // if time is out - stop game (X)

  // end game stuff
  //  - game over mesg if fail?
  //  - display user score
  //  - save user initials + score to display
  // restart game
}

// TIMER
var timeLeft = 60;

function startTimer() {
  timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent =
      "You have " + timeLeft + " seconds left to complete quiz.";
    if (timeLeft === 0) {
      //stop the intervals from running
      clearInterval(timerInterval);
      //timeLeft = 0;
      sendGameOverMessage();
    }
  }, 1000);
}

function selectAnswer(answer) {
  debugger;
  var currentQuiz = quizQuestions[quizIndex];

  // check if correct
  if (answer === currentQuiz.correctAnswer) {
    // only move to next question if there is one available
    if (quizIndex < quizQuestions.length - 1) {
      quizIndex += 1;
      showQuiz(quizIndex);
    } else if (quizIndex === quizQuestions.length - 1) {
      sendGameOverMessage();
      clearInterval(timerInterval);
    }

    localStorage.getItem("user");

    user.score = Number(user.score);
    user.score += 20;
    Number(user.score);
    localStorage.setItem("user", JSON.stringify(user));
    //
  } else {
    timeLeft -= 10;
    quizIndex += 1;
    showQuiz(quizIndex);
    if (timeLeft <= 0) {
      sendGameOverMessage();
      clearInterval(timerInterval);
    }
    // wrong stuff
  }
}

//game over message function and restart game
//NOT sure what I am doing here. I want a game over prompt to show up and tell the user the game is over
//then I want to hide the quiz and the game to start over
function sendGameOverMessage() {
  quizPage.classList.add("hide");
  timerEl.textContent = "Game Over";
  var restart = document.getElementById("restartGameBtn");
  restart.classList.remove("hide");
  var userNameInput = document.getElementById("userNameInput");
  userNameInput.classList.remove("hide");
}

function saveUserInitials() {
  debugger;
  // get user from localStorage
  localStorage.getItem("user", JSON.stringify(user));
  // get value from input
  var userName = document.getElementById("userName").value;
  // use user object (set user.name)
  user.name = userName;
  // save to localStorage (JSON.Stringify(user))
  localStorage.setItem("user", JSON.stringify(user));
}

// restart function
function restartGame() {
  landingPage.classList.remove("hide");
  quizPage.classList.add("hide");
  clearInterval(timerInterval);
  timeLeft = 60;
}

// show quiz function, this will grab the question and answer text from the array above
function showQuiz(quizIndex) {
  debugger;
  var quiz = quizQuestions[quizIndex];

  var questionArea = document.getElementById("question");
  questionArea.textContent = quiz.question;
  var answerBox1 = document.getElementById("answerBtn1");
  answerBox1.textContent = quiz.answers.a;
  var answerBox2 = document.getElementById("answerBtn2");
  answerBox2.textContent = quiz.answers.b;
  var answerBox3 = document.getElementById("answerBtn3");
  answerBox3.textContent = quiz.answers.c;
  var answerBox4 = document.getElementById("answerBtn4");
  answerBox4.textContent = quiz.answers.d;
}

// need logic for correct and wrong answers

// show results of the quiz
// function showResults() {}

//on submit, show the results
// submitButton.addEventlistener("click", showResults);

//on start, show quiz questions, start timer, hide landing page
function startGame() {
  startTimer();
  landingPage.classList.add("hide");
  quizPage.classList.remove("hide");
}

// startButton.addEventListener("click", function () {
//   showQuiz();
//   startTimer();
//   landingPage.classList.add("hide");
//   quizPage.classList.remove("hide");
// });

// restartGameBtn.addEventListener("click", function () {
//   restartGame();
//   clearInterval(timerInterval);
// });

//NOTES
// showQuiz(); - when this is in global scope this will start on load of page
//TODO:make a note tab. look up in Google
