var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var startButton;

function showQuiz() {
  var output = [];

  myQuestions.forEach((element) => {});
}

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

function showResults() {}

//display quiz questions
showQuiz();

//on submit, show the results
submitButton.addEventlistener("click", showResults);

//on start, show quiz questions
startButton.addEventlistener("click", showQuiz);
