// =============================
// 1. CONFIGURE ICI TES QUESTIONS
// =============================
const questions = [
  {
    question: "Quel est l’objectif principal de ce cours ?",
    answers: [
      "Découvrir un nouveau sport",
      "Valider les prérequis administratifs",
      "Acquérir des compétences pratiques et transférables",
      "Préparer un examen théorique uniquement"
    ],
    correctIndex: 2,
    theme: "Objectifs du cours",
    difficulty: "Niveau facile",
    feedbackCorrect: "Exact ! Le but est de te donner des compétences concrètes et utilisables.",
    feedbackIncorrect: "L’objectif principal n’est pas juste administratif ou théorique, mais bien pratique."
  },
  {
    question: "Quand est-il pertinent de poser des questions pendant la séance ?",
    answers: [
      "Seulement à la fin du cours",
      "Seulement si le formateur demande",
      "Dès qu’un point n’est pas clair",
      "Jamais, pour ne pas interrompre"
    ],
    correctIndex: 2,
    theme: "Pédagogie",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Oui ! Mieux vaut clarifier les choses tout de suite.",
    feedbackIncorrect: "Tu peux poser des questions dès qu’il y a un doute, c’est même recommandé."
  },
  {
    question: "Laquelle de ces attitudes favorise le plus l’apprentissage ?",
    answers: [
      "Rester passif et écouter sans participer",
      "Participer, essayer, poser des questions",
      "Attendre que les autres répondent toujours",
      "Regarder son téléphone discrètement"
    ],
    correctIndex: 1,
    theme: "Attitude en formation",
    difficulty: "Niveau facile",
    feedbackCorrect: "Exact ! L’implication active est la clé pour progresser.",
    feedbackIncorrect: "La participation active reste le meilleur moyen de retenir et de progresser."
  }
];

// =============================
// 2. LOGIQUE DU QUIZ
// =============================

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const infoQuestionCount = document.getElementById("info-question-count");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const questionTheme = document.getElementById("question-theme");
const questionDifficulty = document.getElementById("question-difficulty");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const scoreText = document.getElementById("score-text");
const nextBtnText = document.getElementById("next-btn-text");

const endScore = document.getElementById("end-score");
const endMessage = document.getElementById("end-message");
const endCorrect = document.getElementById("end-correct");
const endTotal = document.getElementById("end-total");
const pseudoInput = document.getElementById("pseudo");
const pseudoError = document.getElementById("pseudo-error");

let playerName = "";
let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

// Pré-affiche le nombre de questions sur l’écran de départ
infoQuestionCount.textContent = `${questions.length} question(s)`;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  hasAnswered = false;
  scoreText.textContent = score;

  startScreen.classList.add("hidden");
  endScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  loadQuestion();
  updateProgress();
}

function loadQuestion() {
  hasAnswered = false;
  nextBtn.disabled = true;
  feedback.textContent = "";
  feedback.className = "feedback";

  const q = questions[currentQuestionIndex];

  questionNumber.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;
  questionText.textContent = q.question;
  questionTheme.textContent = q.theme || "";
  questionDifficulty.textContent = q.difficulty || "";

  // Réinitialise les réponses
  answersContainer.innerHTML = "";

  const prefixes = ["A", "B", "C", "D", "E", "F"];

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.setAttribute("data-prefix", prefixes[index] || "");
    btn.textContent = answer;

    btn.addEventListener("click", () => handleAnswerClick(btn, index));

    answersContainer.appendChild(btn);
  });

  // Texte du bouton suivant
  if (currentQuestionIndex === questions.length - 1) {
    nextBtnText.textContent = "Voir les résultats";
  } else {
    nextBtnText.textContent = "Question suivante";
  }

  updateProgress();
}

function handleAnswerClick(button, index) {
  if (hasAnswered) return;
  hasAnswered = true;

  const q = questions[currentQuestionIndex];

  // Désactive tous les boutons
  const buttons = answersContainer.querySelectorAll(".answer-btn");
  buttons.forEach((btn, i) => {
    btn.classList.add("disabled");
    if (i === q.correctIndex) {
      btn.classList.add("correct");
    }
  });

  if (index === q.correctIndex) {
    score++;
    scoreText.textContent = score;
    button.classList.add("correct");
    feedback.textContent = q.feedbackCorrect || "Bonne réponse !";
    feedback.classList.add("correct");
  } else {
    button.classList.add("incorrect");
    feedback.textContent = q.feedbackIncorrect || "Ce n’est pas la bonne réponse.";
    feedback.classList.add("incorrect");
  }

  nextBtn.disabled = false;
}

function updateProgress() {
  const current = currentQuestionIndex + 1;
  const total = questions.length;
  const percent = (current / total) * 100;
  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${current}/${total}`;
}

function goToNext() {
  if (!hasAnswered) return;

  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    showEndScreen();
  } else {
    loadQuestion();
  }
}

function showEndScreen() {
  quizScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");

  const total = questions.length;
  const percent = Math.round((score / total) * 100);

  if (playerName) {
  endScore.textContent = `${playerName}, tu as obtenu ${score} / ${total} (${percent}%).`;
} else {
  endScore.textContent = `Tu as obtenu ${score} / ${total} (${percent}%).`;
}


  let msg = "";
  if (percent === 100) {
    msg = "Excellent, tu maîtrises parfaitement le contenu !";
  } else if (percent >= 70) {
    msg = "Très bon résultat, tu as bien compris l’essentiel 👍";
  } else if (percent >= 50) {
    msg = "C’est un bon début, mais tu peux encore progresser.";
  } else {
    msg = "Pas grave, ce quiz est là pour t’aider à repérer ce qu’il faut revoir.";
  }
  endMessage.textContent = msg;

  endCorrect.textContent = `Bonnes réponses : ${score}`;
  endTotal.textContent = `Nombre total de questions : ${total}`;
}

// Événements

// On vérifie le pseudo avant de lancer le quiz
startBtn.addEventListener("click", () => {
  const value = pseudoInput.value.trim();

  if (!value) {
    pseudoError.textContent = "Merci de saisir un pseudo 🙂";
    pseudoInput.focus();
    return;
  }

  playerName = value;
  pseudoError.textContent = "";
  startQuiz();
});

nextBtn.addEventListener("click", goToNext);

// Quand on rejoue, on garde le même pseudo
restartBtn.addEventListener("click", startQuiz);

