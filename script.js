// =============================
// 1. CONFIGURE ICI TES QUESTIONS
// =============================
const questions = [
  {
    question: "Quelles sont les trois questions à se poser avant de créer un support de communication ?",
    answers: [
      "Pour qui ? Pourquoi ? Comment ?",
      "Quand ? Où ? Avec qui ?",
      "Combien ça rapporte ? Avec quel matériel ?",
      "Qui ? Quoi ? Où ?"
    ],
    correctIndex: 0,
    theme: "Cible / Message / Support",
    difficulty: "Niveau facile",
    feedbackCorrect: "Oui : Cible (pour qui), Message (pourquoi), Support (comment).",
    feedbackIncorrect: "On commence toujours par : Pour qui ? Pourquoi ? Comment ?"
  },
  {
    question: "À quoi correspond la CIBLE dans une communication visuelle ?",
    answers: [
      "Au format du support utilisé",
      "Au public visé (âge, niveau sportif, motivations...)",
      "Au budget de la campagne",
      "Aux couleurs choisies"
    ],
    correctIndex: 1,
    theme: "Cible",
    difficulty: "Niveau facile",
    feedbackCorrect: "Exact : la cible, c’est le public précis que tu veux toucher.",
    feedbackIncorrect: "La cible n’est pas le format ou le budget, mais bien le public que tu vises."
  },
  {
    question: "Quel est le rôle du MESSAGE dans le trio Cible / Message / Support ?",
    answers: [
      "Choisir la police d’écriture",
      "Définir l’objectif principal : informer, motiver, vendre, fidéliser…",
      "Décider du lieu de diffusion",
      "Créer le logo de la structure"
    ],
    correctIndex: 1,
    theme: "Message",
    difficulty: "Niveau facile",
    feedbackCorrect: "Oui, le message sert à clarifier l’objectif principal de ta communication.",
    feedbackIncorrect: "Le message ne concerne pas la mise en forme, mais l’objectif de ta communication."
  },
  {
    question: "Que désigne le SUPPORT dans la préparation d’un visuel ?",
    answers: [
      "Le style de langage utilisé",
      "Le format choisi : affiche, flyer, post, présentation…",
      "Le type de public ciblé",
      "Le budget communication"
    ],
    correctIndex: 1,
    theme: "Support",
    difficulty: "Niveau facile",
    feedbackCorrect: "Oui : le support, c’est le format concret de ton message (affiche, post, story…).",
    feedbackIncorrect: "Le support ne désigne pas le public ni le budget, mais le type de format utilisé."
  },
  {
    question: "Dans la lecture en Z, où se situe le point d’entrée naturel du regard ?",
    answers: [
      "En bas à gauche, sur l’appel à l’action",
      "En bas à droite, sur le logo",
      "En haut à gauche, souvent pour le logo ou l’identité visuelle",
      "Au centre exact du visuel"
    ],
    correctIndex: 2,
    theme: "Lecture en Z",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Oui, l’œil commence en haut à gauche, idéal pour votre logo.",
    feedbackIncorrect: "Le regard démarre en haut à gauche : c’est là qu’on place généralement le logo."
  },
  {
    question: "Selon le principe de lecture en Z, où placer l’appel à l’action principal ?",
    answers: [
      "En haut à gauche",
      "Au centre du visuel",
      "En bas à droite",
      "En haut au centre"
    ],
    correctIndex: 2,
    theme: "Lecture en Z",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Exact : la destination du parcours visuel est le bas à droite, parfait pour le call-to-action.",
    feedbackIncorrect: "L’appel à l’action doit se trouver en bas à droite, destination naturelle de la lecture en Z."
  },
  {
    question: "Laquelle de ces erreurs fait partie de ce qu’il ne faut PAS faire sur un visuel ?",
    answers: [
      "Limiter le nombre de couleurs à 2 ou 3",
      "Utiliser beaucoup de texte et plusieurs typographies différentes",
      "Créer une hiérarchie visuelle claire",
      "Laisser de l’espace blanc autour des éléments"
    ],
    correctIndex: 1,
    theme: "Erreurs de design",
    difficulty: "Niveau facile",
    feedbackCorrect: "Oui : surcharge de texte et trop de polices donnent un rendu amateur et illisible.",
    feedbackIncorrect: "L’erreur est de surcharger en texte et en typographies, pas de simplifier le design."
  },
  {
    question: "Pourquoi l’espace blanc (ou vide) est-il important dans un visuel ?",
    answers: [
      "Parce qu’il permet d’ajouter plus de logos cachés",
      "Parce qu’il fait économiser de l’encre à l’impression",
      "Parce qu’il permet au contenu de respirer et rend le message plus clair",
      "Parce qu’il remplit les zones vides sans intérêt"
    ],
    correctIndex: 2,
    theme: "Lisibilité",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Exact : l’espace blanc aide l’œil à se reposer et clarifie le message.",
    feedbackIncorrect: "L’espace blanc n’est pas du vide inutile, il rend la lecture plus fluide et le message plus lisible."
  },
  {
    question: "Selon la règle du 10 / 20 / 30, combien de diapositives maximum une présentation devrait-elle contenir ?",
    answers: [
      "5 diapositives maximum",
      "10 diapositives maximum",
      "20 diapositives maximum",
      "30 diapositives maximum"
    ],
    correctIndex: 1,
    theme: "Règle 10 / 20 / 30",
    difficulty: "Niveau facile",
    feedbackCorrect: "Oui : la règle conseille 10 slides maximum pour garder l’attention.",
    feedbackIncorrect: "La règle recommande de se limiter à 10 diapositives pour rester percutant."
  },
  {
    question: "Dans la règle 10 / 20 / 30, que signifie le « 30 » ?",
    answers: [
      "30 minutes de présentation maximum",
      "30 slides maximum par présentation",
      "30 secondes par slide",
      "30 points de taille de police minimum pour le texte"
    ],
    correctIndex: 3,
    theme: "Règle 10 / 20 / 30",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Exact, le texte doit rester lisible : minimum 30 points.",
    feedbackIncorrect: "Le 30 correspond à la taille minimale de police (30 points), pas au temps ou au nombre de slides."
  },
  {
    question: "Qu’est-ce qu’un « slide-ument » selon le cours ?",
    answers: [
      "Une slide très visuelle avec peu de texte",
      "Une diapositive transformée en document Word projeté avec trop de texte",
      "Une diapo animée avec beaucoup de transitions",
      "Une slide destinée uniquement aux réseaux sociaux"
    ],
    correctIndex: 1,
    theme: "Mauvaises pratiques de présentation",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Oui, c’est une slide utilisée comme un document Word bourré de texte.",
    feedbackIncorrect: "Le slide-ument est une diapo surchargée de texte, utilisée comme un document à lire, pas comme un support visuel."
  },
  {
    question: "Dans l’atelier pratique sur Canva, par quel support est-il conseillé de commencer ?",
    answers: [
      "Par la story Instagram",
      "Par le post Instagram",
      "Par l’affiche A4 puis adapter aux autres formats",
      "Par une vidéo TikTok"
    ],
    correctIndex: 2,
    theme: "Canva – Atelier",
    difficulty: "Niveau facile",
    feedbackCorrect: "Exact : on commence par l’affiche A4, puis on adapte aux supports digitaux.",
    feedbackIncorrect: "La méthode recommandée est de commencer par l’affiche A4, puis d’adapter en post et story."
  },
  {
    question: "Quel est le format recommandé pour un post Instagram créé dans Canva selon le cours ?",
    answers: [
      "1080 x 1920 px (vertical)",
      "1920 x 1080 px (horizontal)",
      "1080 x 1080 px (carré)",
      "800 x 600 px (paysage classique)"
    ],
    correctIndex: 2,
    theme: "Canva – Réseaux sociaux",
    difficulty: "Niveau facile",
    feedbackCorrect: "Oui, un post Instagram classique est au format carré 1080 x 1080 px.",
    feedbackIncorrect: "Pour un post classique, on utilise un format carré : 1080 x 1080 px."
  },
  {
    question: "Pour une story Instagram réalisée sur Canva, pourquoi faut-il respecter une « zone de sécurité » en haut et en bas de l’écran ?",
    answers: [
      "Pour laisser de la place aux sous-titres automatiques",
      "Pour que le texte et les éléments importants ne soient pas cachés par l’interface d’Instagram",
      "Pour pouvoir ajouter plus de logos",
      "Pour respecter les règles de publicité payante"
    ],
    correctIndex: 1,
    theme: "Canva – Story Instagram",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Exact : l’interface Instagram masque le haut et le bas, il faut donc éviter ces zones.",
    feedbackIncorrect: "On respecte la zone de sécurité pour que le texte et les éléments importants restent visibles malgré l’interface Instagram."
  },
  {
    question: "Quel usage avancé de Canva Pro est cité dans le cours ?",
    answers: [
      "Créer uniquement des tableaux Excel intégrés",
      "Programmer des macros pour automatiser PowerPoint",
      "Personnaliser des templates dynamiques et intégrer des éléments graphiques complexes",
      "Remplacer automatiquement toutes les polices d’un document Word"
    ],
    correctIndex: 2,
    theme: "Canva Pro – Niveau avancé",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Oui, Canva Pro permet de travailler avec des modèles dynamiques et un graphisme plus avancé.",
    feedbackIncorrect: "Canva Pro est surtout utilisé pour personnaliser des templates dynamiques et enrichir le graphisme, pas pour gérer Excel ou Word."
  },
  {
    question: "Quelle est la bonne chronologie du storytelling proposée dans le cours ?",
    answers: [
      "Problème → Situation → Solution → Résultat",
      "Situation → Problème → Solution → Résultat",
      "Solution → Résultat → Situation → Problème",
      "Résultat → Problème → Solution → Situation"
    ],
    correctIndex: 1,
    theme: "Storytelling",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Exact : on part de la situation, on présente le problème, puis la solution et enfin le résultat.",
    feedbackIncorrect: "La structure est : Situation, puis Problème, ensuite Solution, et enfin Résultat."
  },
  {
    question: "À quoi sert une charte graphique pour un coach sportif ou un centre de formation ?",
    answers: [
      "À définir uniquement le prix des prestations",
      "À lister les exercices physiques du programme",
      "À garantir une identité visuelle cohérente sur tous les supports",
      "À choisir le matériel sportif à acheter"
    ],
    correctIndex: 2,
    theme: "Identité visuelle",
    difficulty: "Niveau facile",
    feedbackCorrect: "Oui, la charte graphique sert à garder une identité visuelle cohérente et professionnelle.",
    feedbackIncorrect: "La charte graphique concerne ta communication visuelle, pas les prix ni le matériel."
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
const validateBtn = document.getElementById("validate-btn");

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
let hasValidated = false;
let selectedAnswerIndex = null;
let userAnswers = []; // on stocke l'index choisi pour chaque question

// Pré-affiche le nombre de questions sur l’écran de départ
infoQuestionCount.textContent = `${questions.length} question(s)`;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  hasValidated = false;
  selectedAnswerIndex = null;
  userAnswers = [];

  scoreText.textContent = "-";

  startScreen.classList.add("hidden");
  endScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  loadQuestion();
  updateProgress();
}

function loadQuestion() {
  hasValidated = false;
  selectedAnswerIndex = null;
  nextBtn.disabled = true;
  validateBtn.disabled = false;

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

    btn.addEventListener("click", () => selectAnswer(btn, index));

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

function selectAnswer(button, index) {
  if (hasValidated) return; // une fois validé, on ne change plus

  selectedAnswerIndex = index;

  // enlève la sélection des autres
  const buttons = answersContainer.querySelectorAll(".answer-btn");
  buttons.forEach((btn) => btn.classList.remove("selected"));

  // met en avant celle qu'on vient de cliquer
  button.classList.add("selected");

  feedback.textContent = ""; // on nettoie éventuellement un ancien message "choisis une réponse"
}

// Bouton "Valider la réponse"
function validateCurrentAnswer() {
  if (selectedAnswerIndex === null) {
    feedback.textContent = "Choisis une réponse avant de valider 🙂";
    feedback.className = "feedback";
    return;
  }

  hasValidated = true;
  userAnswers[currentQuestionIndex] = selectedAnswerIndex;

  // On désactive les boutons de réponse
  const buttons = answersContainer.querySelectorAll(".answer-btn");
  buttons.forEach((btn) => {
    btn.classList.add("disabled");
  });

  validateBtn.disabled = true;
  nextBtn.disabled = false;

  // Message neutre : on ne dit pas si c'est bon ou pas
  feedback.textContent = "Réponse enregistrée, tu peux passer à la question suivante.";
  feedback.className = "feedback";
}

function updateProgress() {
  const current = currentQuestionIndex + 1;
  const total = questions.length;
  const percent = (current / total) * 100;
  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${current}/${total}`;
}

function goToNext() {
  if (!hasValidated) return;

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

  // Calcul du score à partir des réponses enregistrées
  score = 0;
  for (let i = 0; i < total; i++) {
    if (userAnswers[i] === questions[i].correctIndex) {
      score++;
    }
  }

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

  // ⚠️ On ne valide officiellement que la PREMIÈRE tentative sur cet appareil
  const alreadySent = localStorage.getItem("quiz_comm_sent") === "true";

  if (!alreadySent) {
    // ✅ Envoi des résultats vers Google Sheets (1ère tentative uniquement)
    sendResultsToSheet({
      pseudo: playerName || "Anonyme",
      score: score,
      totalQuestions: total,
      pourcentage: percent
    });

    localStorage.setItem("quiz_comm_sent", "true");
  }

  // On marque ce navigateur comme "quiz terminé"
  localStorage.setItem("quiz_comm_finished", "true");
}

// =============================
// ENVOI DES RÉSULTATS VERS GOOGLE SHEETS
// =============================

const SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbxeOF-ZcFFERkyAuNQ-L3YbJqfmcXMOakiD6HXkIaqKiemDFAOeBsIMuhl4E44O9laJ/exec";

function sendResultsToSheet({ pseudo, score, totalQuestions, pourcentage }) {
  const payload = { pseudo, score, totalQuestions, pourcentage };

  fetch(SHEET_ENDPOINT, {
    method: "POST",
    mode: "no-cors", // évite les soucis CORS
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(payload)
  }).catch((err) => {
    console.error("Erreur envoi résultats Sheets :", err);
  });
}

// =============================
// ÉVÉNEMENTS
// =============================

// On vérifie le pseudo avant de lancer le quiz
startBtn.addEventListener("click", () => {
  const value = pseudoInput.value.trim();

  // 🔒 Empêche de refaire le quiz sur le même appareil
  const alreadyDone = localStorage.getItem("quiz_comm_finished") === "true";
  if (alreadyDone) {
    pseudoError.textContent = "Tu as déjà complété ce quiz sur cet appareil.";
    return;
  }

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
validateBtn.addEventListener("click", validateCurrentAnswer);

// Quand on rejoue, on garde le même pseudo
restartBtn.addEventListener("click", startQuiz);
