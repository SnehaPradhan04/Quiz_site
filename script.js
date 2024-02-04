const quizData = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "What is the capital of Meghalaya?",
      choices: ["Aizawl", "Shillong", "Agartala", "Cherapunji"],
      correctAnswer: "Shillong"
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Jupiter", "Mars", "Venus", "Saturn"],
      correctAnswer: "Mars"
    },
    {
        question: "Which planet is known as Evening star?",
        choices: ["Venus", "Uranus", "Mars", "Neptune"],
        correctAnswer: "Venus"
    }
  ];
  
  const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");
const startButton = document.getElementById("start");
const timerElement = document.getElementById("timer");
const timeDisplay = document.getElementById("time");

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

function startQuiz() 
{
  startButton.style.display = "none";
  displayQuestion();
}

function startTimer() {
  timerInterval = setInterval(() => 
  {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showResult();
    }
  }, 1000);
}

function displayQuestion() {
  startTimer();
  
  const question = quizData[currentQuestion];
  questionElement.textContent = question.question;
  
  choicesElement.innerHTML = "";
  question.choices.forEach(choice => 
    {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.onclick = () => checkAnswer(choice);
    choicesElement.appendChild(choiceButton);
  });
}

function checkAnswer(choice) 
{
  const question = quizData[currentQuestion];
  if (choice === question.correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() 
{
  questionElement.style.display = "none";
  choicesElement.style.display = "none";
  submitButton.style.display = "none";
  timerElement.style.display = "none";
  resultElement.textContent = `Your score: ${score} out of ${quizData.length}`;
}

startButton.addEventListener("click", startQuiz);