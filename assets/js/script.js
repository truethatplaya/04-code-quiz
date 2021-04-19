var quizContainer = document.getElementById("quiz");
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
// localStorage.setItem("userInitials");
var correctAnswer;
var user = {
  name: "",
  score: 0,
};
localStorage.setItem("user", "");

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

// start playing the game
function play() {
  startGame(); // start timer
  var answer = showQuiz(quizIndex);
}

// TIMER
var timeLeft = 60;

function startTimer() {
  if (timeLeft < 60) {
    timeLeft = 60;
  }
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
  if (quizIndex === quizQuestions.length - 1) {
    checkAnswer(answer);
    clearInterval(timerInterval);
    timeLeft = 0;
    sendGameOverMessage();
    quizIndex = 0;
  } else {
    checkAnswer(answer);
  }
}

function checkAnswer(answer) {
  var currentQuiz = quizQuestions[quizIndex];

  if (answer === currentQuiz.correctAnswer) {
    scoreAnswer();
    // only move to next question if there is one available
    if (quizIndex < quizQuestions.length - 1) {
      quizIndex += 1;
      showQuiz(quizIndex);
    }
    //
  } else {
    timeLeft -= 10;
    quizIndex += 1;
    showQuiz(quizIndex);
    if (timeLeft <= 0) {
      sendGameOverMessage();
      clearInterval(timerInterval);
    }
  }
}

function scoreAnswer() {
  localStorage.getItem("user");

  user.score = Number(user.score);
  user.score += 20;
  Number(user.score);
  localStorage.setItem("user", JSON.stringify(user));
}

//game over message function and restart game
function sendGameOverMessage() {
  quizPage.classList.add("hide");
  timerEl.classList.add("hide");
  var restart = document.getElementById("restartGameBtn");
  restart.classList.remove("hide");
  var userNameInput = document.getElementById("userNameInput");
  userNameInput.classList.remove("hide");
}

//save user initials
function saveUserInitials() {
  // get user from localStorage
  localStorage.getItem("user", JSON.stringify(user));
  // get value from input
  var userName = document.getElementById("userName").value;
  // use user object (set user.name)
  user.name = userName;
  // save to localStorage (JSON.Stringify(user))
  localStorage.setItem("user", JSON.stringify(user));
  showHighScorePage();
}

// captures user input in local storage
function displayHighScores() {
  var userData = JSON.parse(localStorage.getItem("user"));

  var userNameInput = document.getElementById("userNameSpan");
  userNameInput.textContent = user.name;

  var userScoreInput = document.getElementById("userScoreSpan");
  userScoreInput.textContent = user.score;
}

//show HIGH SCORE PAGE
function showHighScorePage() {
  displayHighScores();
  var userNameInput = document.getElementById("userNameInput");
  userNameInput.classList.add("hide");
  var showHighScore = document.getElementById("highScorePage");
  showHighScore.classList.remove("hide");
}

// restart function
function restartGame() {
  var showHighScore = document.getElementById("highScorePage");
  showHighScore.classList.add("hide");
  landingPage.classList.remove("hide");
  quizPage.classList.add("hide");

  clearInterval(timerInterval);
  user.score = 0;
}

// show quiz function, this will grab the question and answer text from the array above
function showQuiz(quizIndex) {
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

//on start, show quiz questions, start timer, hide landing page
function startGame() {
  startTimer();
  landingPage.classList.add("hide");
  quizPage.classList.remove("hide");
  timerEl.classList.remove("hide");
}

//-------EVERYTHING BELOW THIS LINE IS A WORK IN PROGRESS------

// function renderLastHighScore() {
//   // Use JSON.parse() to convert text to JavaScript object
//   var lastHighScore = JSON.parse(localStorage.getItem("user"));
//   // Check if data is returned, if not exit out of the function
//   if (lastHighScore !== null) {
//     document.getElementById("userNameSpan").innerHTML = user.name;
//     document.getElementById("userScoreSpan").innerHTML = user.score;
//   } else {
//     return;
//   }
// }
// var highScoresBtn = document.getElementById("highScores");

// highScoresBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   displayHighScores();
//   renderLastHighScore();
// });
