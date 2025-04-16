// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const startQuizBtn = document.getElementById('start-quiz-btn');
const questionCounter = document.getElementById('question-counter');
const timeLeft = document.getElementById('time-left');
const questionProgress = document.getElementById('question-progress');
const timeProgress = document.getElementById('time-progress');

const questionText = document.getElementById('question-text');
const codeContainer = document.getElementById('code-container');
const questionCode = document.getElementById('question-code');
const optionsContainer = document.getElementById('options-container');

const explanationContainer = document.getElementById('explanation-container');
const explanationText = document.getElementById('explanation-text');
const showExplanationBtn = document.getElementById('show-explanation-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');

const scoreDisplay = document.getElementById('score-display');
const scoreBar = document.getElementById('score-bar');
const scoreFeedback = document.getElementById('score-feedback');
const answersContainer = document.getElementById('answers-container');
const restartQuizBtn = document.getElementById('restart-quiz-btn');

// Quiz State
let currentQuestion = 0;
let selectedAnswers = {};
let score = 0;
let timer;
let timeRemaining = 30;
let timerActive = false;

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM fully loaded");

  // Create actual elements for progress bars
  const questionProgressBar = document.createElement('div');
  questionProgressBar.className = 'progress-fill';
  questionProgress.appendChild(questionProgressBar);

  const timeProgressBar = document.createElement('div');
  timeProgressBar.className = 'progress-fill';
  timeProgress.appendChild(timeProgressBar);

  // Add CSS for these elements
  const style = document.createElement('style');
  style.textContent = `
    .progress-fill {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: white;
      border-radius: 9999px;
      transition: width 0.3s ease;
    }

    .time-bar .progress-fill {
      transition: width 1s linear;
    }

    .score-progress .progress-fill {
      background: var(--primary);
    }
  `;
  document.head.appendChild(style);

  // Add event listeners
  startQuizBtn.addEventListener('click', function() {
    console.log("Start button clicked");
    startQuiz();
  });

  showExplanationBtn.addEventListener('click', showExplanation);
  nextQuestionBtn.addEventListener('click', nextQuestion);
  restartQuizBtn.addEventListener('click', restartQuiz);

  // Functions that use the progress bars
  function updateTimerDisplay() {
    timeLeft.textContent = timeRemaining;
    timeProgressBar.style.width = `${(timeRemaining / 30) * 100}%`;
  };

  function updateQuestionProgress(index) {
    questionProgressBar.style.width = `${((index + 1) / questions.length) * 100}%`;
  };

  window.updateTimerDisplay = updateTimerDisplay;
  window.updateQuestionProgress = updateQuestionProgress;
});

// Functions
function startQuiz() {
  console.log("Starting quiz...");
  welcomeScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  loadQuestion(0);
  startTimer();
}

// Dummy questions data (replace with your actual questions)
const questions = [
    {
        text: "What is SQL?",
        options: [
            { text: "Structured Query Language", value: "a" },
            { text: "Standard Question Language", value: "b" },
            { text: "Simple Query Language", value: "c" },
            { text: "Structured Question Logic", value: "d" }
        ],
        correctAnswer: "a",
        explanation: "SQL stands for Structured Query Language.",
        code: "SELECT * FROM users;"
    },
    {
        text: "Which SQL statement is used to extract data from a database?",
        options: [
            { text: "GET", value: "a" },
            { text: "EXTRACT", value: "b" },
            { text: "OPEN", value: "c" },
            { text: "SELECT", value: "d" }
        ],
        correctAnswer: "d",
        explanation: "The SELECT statement is used to extract data from a database.",
        code: "SELECT column1, column2 FROM table_name;"
    }
];

// Dummy confetti function
function createConfetti() {
    console.log("Confetti!");
    // In a real implementation, this would create confetti elements in the DOM.
}

function loadQuestion(index) {
  console.log(`Loading question ${index}`);
  const question = questions[index];

  // Update question counter
  questionCounter.textContent = `Pertanyaan ${index + 1} dari ${questions.length}`;

  // Update progress bar
  updateQuestionProgress(index);

  // Set question text
  questionText.textContent = question.text;

  // Show or hide code block
  if (question.code) {
    codeContainer.classList.remove('hidden');
    questionCode.textContent = question.code;
  } else {
    codeContainer.classList.add('hidden');
  }

  // Clear previous options
  optionsContainer.innerHTML = '';

  // Add options
  question.options.forEach(option => {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    optionElement.dataset.value = option.value;

    if (selectedAnswers[index] === option.value) {
      optionElement.classList.add('selected');
    }

    optionElement.innerHTML = `
      <input type="radio" name="question${index}" class="option-radio" id="option${index}${option.value}" ${selectedAnswers[index] === option.value ? 'checked' : ''}>
      <label for="option${index}${option.value}" class="option-text">${option.text}</label>
    `;

    optionElement.addEventListener('click', () => selectAnswer(index, option.value));
    optionsContainer.appendChild(optionElement);
  });

  // Reset explanation
  explanationContainer.classList.add('hidden');

  // Show/hide explanation button
  if (selectedAnswers[index]) {
    showExplanationBtn.classList.remove('hidden');
  } else {
    showExplanationBtn.classList.add('hidden');
  }

  // Enable/disable next button
  nextQuestionBtn.disabled = !selectedAnswers[index];

  // Update next button text
  if (index < questions.length - 1) {
    nextQuestionBtn.textContent = 'Pertanyaan Berikutnya';
  } else {
    nextQuestionBtn.textContent = 'Lihat Hasil';
  }
}

function selectAnswer(questionIndex, answerValue) {
  selectedAnswers[questionIndex] = answerValue;

  // Update UI
  const options = optionsContainer.querySelectorAll('.option');
  options.forEach(option => {
    if (option.dataset.value === answerValue) {
      option.classList.add('selected');
    } else {
      option.classList.remove('selected');
    }
  });

  // Show explanation button
  showExplanationBtn.classList.remove('hidden');

  // Enable next button
  nextQuestionBtn.disabled = false;
}

function showExplanation() {
  const question = questions[currentQuestion];
  explanationText.textContent = question.explanation;
  explanationContainer.classList.remove('hidden');

  // Mark correct and incorrect options
  const options = optionsContainer.querySelectorAll('.option');
  options.forEach(option => {
    if (option.dataset.value === question.correctAnswer) {
      option.classList.add('correct');
    } else if (option.dataset.value === selectedAnswers[currentQuestion]) {
      option.classList.add('incorrect');
    }
  });

  // Hide explanation button
  showExplanationBtn.classList.add('hidden');

  // Stop timer
  timerActive = false;
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion(currentQuestion);
    resetTimer();
  } else {
    showResults();
  }
}

function startTimer() {
  timeRemaining = 30;
  timerActive = true;
  updateTimerDisplay();

  timer = setInterval(() => {
    if (timerActive) {
      timeRemaining--;
      updateTimerDisplay();

      if (timeRemaining <= 0) {
        clearInterval(timer);
        nextQuestion();
      }
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  startTimer();
}

function showResults() {
  // Calculate score
  score = 0;
  questions.forEach((question, index) => {
    if (selectedAnswers[index] === question.correctAnswer) {
      score++;
    }
  });

  // Update UI
  scoreDisplay.textContent = `${score} / ${questions.length}`;
  const percentage = (score / questions.length) * 100;

  // Create score bar fill if it doesn't exist
  let scoreBarFill = scoreBar.querySelector('.progress-fill');
  if (!scoreBarFill) {
    scoreBarFill = document.createElement('div');
    scoreBarFill.className = 'progress-fill';
    scoreBar.appendChild(scoreBarFill);
  }

  scoreBarFill.style.width = `${percentage}%`;

  // Set feedback
  if (percentage >= 90) {
    scoreFeedback.textContent = "Luar Biasa! Anda menguasai sintaks MySQL dengan sangat baik!";
  } else if (percentage >= 70) {
    scoreFeedback.textContent = "Bagus! Anda memiliki pemahaman yang kuat tentang MySQL.";
  } else if (percentage >= 50) {
    scoreFeedback.textContent = "Cukup baik. Teruslah berlatih untuk meningkatkan pemahaman Anda.";
  } else {
    scoreFeedback.textContent = "Terus belajar! Anda akan menguasai MySQL dengan lebih banyak latihan.";
  }

  // Show confetti for good scores
  if (percentage >= 70) {
    createConfetti();
  }

  // Generate answers summary
  answersContainer.innerHTML = '';
  questions.forEach((question, index) => {
    const isCorrect = selectedAnswers[index] === question.correctAnswer;

    const answerItem = document.createElement('div');
    answerItem.className = 'answer-item';

    const iconClass = isCorrect ? 'correct' : 'incorrect';
    const iconSvg = isCorrect
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';

    answerItem.innerHTML = `
      <div class="answer-icon ${iconClass}">${iconSvg}</div>
      <div class="answer-details">
        <p><strong>${index + 1}. ${question.text}</strong></p>
        ${!isCorrect ? `
          <p class="answer-wrong">
            Jawaban Anda: ${question.options.find(o => o.value === selectedAnswers[index])?.text || 'Tidak dijawab'}<br>
            Jawaban Benar: ${question.options.find(o => o.value === question.correctAnswer)?.text}
          </p>
        ` : ''}
      </div>
    `;

    answersContainer.appendChild(answerItem);
  });

  // Show results screen
  quizScreen.classList.add('hidden');
  resultsScreen.classList.remove('hidden');

  // Stop timer
  clearInterval(timer);
}

function restartQuiz() {
  // Reset state
  currentQuestion = 0;
  selectedAnswers = {};
  score = 0;

  // Show quiz screen
  resultsScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');

  // Load first question
  loadQuestion(0);
  resetTimer();
}
