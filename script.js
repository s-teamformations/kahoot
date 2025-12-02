// =============================
// 1. CONFIGURE ICI TES QUESTIONS
// =============================
const questions = [
  {
    question: "À quoi sert un support de communication dans une stratégie de communication ?",
    answers: [
      "À diffuser un message auprès d’une cible donnée",
      "À remplacer le travail de l’équipe de terrain",
      "À réduire automatiquement le budget de l’organisation",
      "À éviter d’avoir à définir une cible"
    ],
    correctIndex: 0,
    theme: "Supports de communication",
    difficulty: "Niveau facile",
    feedbackCorrect: "Oui : un support sert avant tout à diffuser ton message vers la bonne cible.",
    feedbackIncorrect: "Un support de communication sert à diffuser un message auprès d’une cible, pas à remplacer l’équipe ou le budget."
  },
  {
    question: "Lequel de ces exemples est un support écrit traditionnel ?",
    answers: [
      "Flyer distribué en main propre",
      "Story Instagram",
      "Vidéo TikTok",
      "Podcast Spotify"
    ],
    correctIndex: 0,
    theme: "Supports écrits",
    difficulty: "Niveau facile",
    feedbackCorrect: "Exact : le flyer est un support écrit traditionnel imprimé.",
    feedbackIncorrect: "Ici, le support écrit traditionnel, c’est le flyer imprimé."
  },
  {
    question: "Quel support est le plus adapté pour présenter de façon détaillée un programme sportif complet ?",
    answers: [
      "Une affiche grand format",
      "Une brochure / dépliant",
      "Une story Instagram unique",
      "Un simple QR code sans contexte"
    ],
    correctIndex: 1,
    theme: "Supports écrits",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Oui : la brochure ou le dépliant permet de développer davantage d’informations.",
    feedbackIncorrect: "C’est la brochure/dépliant qui permet de détailler une offre, plus qu’une affiche ou une seule story."
  },
  {
    question: "Parmi ces propositions, lequel est un support visuel ?",
    answers: [
      "Infographie",
      "Newsletter imprimée",
      "E-mail de relance",
      "Communiqué de presse"
    ],
    correctIndex: 0,
    theme: "Supports visuels",
    difficulty: "Niveau facile",
    feedbackCorrect: "Exact : l’infographie est un support visuel qui synthétise des infos.",
    feedbackIncorrect: "Le support visuel cité ici est l’infographie, les autres sont avant tout textuels."
  },
  {
    question: "À quoi sert un QR code dans une communication pour un club sportif ?",
    answers: [
      "À décorer le flyer sans utilité",
      "À renvoyer directement vers un site, une vidéo ou un formulaire",
      "À remplacer le logo de la structure",
      "À imprimer la plaquette automatiquement"
    ],
    correctIndex: 1,
    theme: "Supports digitaux",
    difficulty: "Niveau facile",
    feedbackCorrect: "Oui : le QR code fait le lien entre support papier et contenu digital (site, vidéo, formulaire…).",
    feedbackIncorrect: "Un QR code sert à renvoyer vers un contenu en ligne, pas seulement à décorer ou remplacer le logo."
  },
  {
    question: "Quel est le point fort principal d’Instagram pour un BPJEPS APT / MAP ?",
    answers: [
      "La diffusion de longs rapports écrits",
      "L’envoi de newsletters PDF",
      "La gestion des inscriptions administratives",
      "Le partage de visuels et de vidéos de qualité sur les séances"
    ],
    correctIndex: 3,
    theme: "Réseaux sociaux",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Exact : Instagram est centré sur les visuels, idéal pour montrer séances, ambiance et résultats.",
    feedbackIncorrect: "Instagram est surtout utile pour partager des photos/vidéos de qualité, pas pour les documents administratifs."
  },
  {
    question: "Sur quel réseau social va-t-on plutôt adopter un ton professionnel et valoriser son expertise ?",
    answers: [
      "TikTok",
      "Instagram",
      "LinkedIn",
      "Snapchat"
    ],
    correctIndex: 2,
    theme: "Réseaux sociaux",
    difficulty: "Niveau facile",
    feedbackCorrect: "Oui : LinkedIn est le réseau orienté professionnel et expertise.",
    feedbackIncorrect: "C’est sur LinkedIn qu’on adopte un ton plus professionnel pour valoriser compétences et offres."
  },
  {
    question: "Pourquoi la communication est-elle décrite comme un levier stratégique pour une structure sportive ?",
    answers: [
      "Parce qu’elle permet d’atteindre des objectifs précis (informer, recruter, fidéliser, etc.)",
      "Parce qu’elle remplace entièrement la qualité des séances",
      "Parce qu’elle garantit automatiquement le succès financier",
      "Parce qu’elle évite d’avoir à former les coachs"
    ],
    correctIndex: 0,
    theme: "Plan de communication",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Exact : la communication sert à atteindre des objectifs précis (informer, promouvoir, fidéliser…).",
    feedbackIncorrect: "On parle de levier stratégique car la communication aide à atteindre des objectifs concrets, pas à tout remplacer."
  },
  {
    question: "Dans la méthode SMART, que signifie la lettre « M » ?",
    answers: [
      "Motivant",
      "Mesurable",
      "Marketing",
      "Mensuel"
    ],
    correctIndex: 1,
    theme: "Objectifs SMART",
    difficulty: "Niveau facile",
    feedbackCorrect: "Oui : un objectif SMART doit être mesurable pour vérifier s’il est atteint.",
    feedbackIncorrect: "Le « M » correspond à Mesurable : on doit pouvoir quantifier l’objectif."
  },
  {
    question: "Quel énoncé correspond le mieux à un objectif SMART ?",
    answers: [
      "Améliorer la visibilité du club.",
      "Attirer plus de jeunes aux entraînements.",
      "Augmenter de 20 % le nombre d’adhérents 16–25 ans d’ici 6 mois.",
      "Communiquer davantage sur les réseaux sociaux."
    ],
    correctIndex: 2,
    theme: "Objectifs SMART",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Exact : il est spécifique, mesurable, atteignable, réaliste et limité dans le temps.",
    feedbackIncorrect: "L’objectif SMART est celui qui précise un chiffre, une cible et une échéance : ici, +20 % d’adhérents 16–25 ans en 6 mois."
  },
  {
    question: "Quels types de critères utilise-t-on pour bien décrire une cible de communication ?",
    answers: [
      "Uniquement le prénom et le nom",
      "Uniquement le code postal",
      "Leur couleur préférée et leur plat favori",
      "Démographiques, géographiques et psychographiques"
    ],
    correctIndex: 3,
    theme: "Cibles de communication",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Oui : on combine des critères démographiques, géographiques et psychographiques.",
    feedbackIncorrect: "On caractérise une cible avec des critères démographiques, géographiques et psychographiques, pas seulement un détail isolé."
  },
  {
    question: "Quel est le rôle du message clé dans un plan de communication ?",
    answers: [
      "Servir uniquement de slogan pour les coachs",
      "Remplacer la charte graphique",
      "Être l’idée principale à faire retenir par la cible",
      "Définir le budget de communication"
    ],
    correctIndex: 2,
    theme: "Message clé / Messaging",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Exact : le message clé est l’idée principale que la cible doit retenir.",
    feedbackIncorrect: "Le message clé sert à concentrer l’idée principale à transmettre, ce n’est ni le budget ni la charte graphique."
  },
  {
    question: "Quels sont les trois piliers d’un message écrit efficace présentés dans la formation ?",
    answers: [
      "Introduction, Développement, Conclusion",
      "Accroche, Corps du message, Call-to-action",
      "Titre, Photo, Logo",
      "Budget, Planning, Évaluation"
    ],
    correctIndex: 1,
    theme: "Communication écrite",
    difficulty: "Niveau facile",
    feedbackCorrect: "Oui : Accroche, Corps du message et Call-to-action structurent un message efficace.",
    feedbackIncorrect: "On parle bien de : Accroche, Corps du message, puis Call-to-action."
  },
  {
    question: "À quoi sert le Call-to-Action (CTA) dans un mail ou un flyer ?",
    answers: [
      "À remercier les partenaires",
      "À expliquer en détail l’historique du club",
      "À dire clairement ce que la personne doit faire après avoir lu",
      "À ajouter des informations juridiques"
    ],
    correctIndex: 2,
    theme: "Call-to-Action",
    difficulty: "Niveau facile",
    feedbackCorrect: "Exact : le CTA indique l’action attendue (s’inscrire, appeler, visiter le site…).",
    feedbackIncorrect: "Le Call-to-Action sert à guider la personne vers une action concrète, pas seulement à informer."
  },
  {
    question: "Pourquoi est-il important d’adapter le ton et le registre de langue à la cible ?",
    answers: [
      "Pour utiliser un maximum de mots compliqués",
      "Pour montrer qu’on connaît beaucoup de jargon",
      "Pour que le message soit compris, crédible et adapté au public visé",
      "Pour ne pas avoir à structurer le message"
    ],
    correctIndex: 2,
    theme: "Ton & registre",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Oui : un ton adapté rend le message plus clair, crédible et efficace pour la cible.",
    feedbackIncorrect: "On adapte ton et registre pour que la cible comprenne et se sente concernée, pas pour faire du jargon."
  },
  {
    question: "Quel élément NE fait PAS partie des ingrédients essentiels d’un flyer efficace ?",
    answers: [
      "Un titre accrocheur",
      "Un visuel pertinent",
      "Des informations claires et hiérarchisées",
      "Un texte très long et dense, sans espaces"
    ],
    correctIndex: 3,
    theme: "Flyer",
    difficulty: "Niveau facile",
    feedbackCorrect: "Exact : un texte trop long et sans respiration rend le flyer illisible.",
    feedbackIncorrect: "Le problème vient du texte très long et dense : un bon flyer doit rester clair, aéré et rapidement lisible."
  },
  {
    question: "À quoi sert un planning de communication dans un plan global ?",
    answers: [
      "À choisir les couleurs du logo",
      "À éviter de définir un budget",
      "À calculer le salaire des coachs",
      "À organiser dans le temps les actions, les dates et les responsables"
    ],
    correctIndex: 3,
    theme: "Planning de communication",
    difficulty: "Niveau moyen",
    feedbackCorrect: "Oui : le planning permet de savoir qui fait quoi, quand et avec quelles ressources.",
    feedbackIncorrect: "Le planning sert à organiser les actions dans le temps, pas à gérer le logo ou les salaires."
  },
  {
    question: "Quel canal est le plus adapté pour créer une communauté locale autour d’un club sportif (échanges, événements, infos pratiques) ?",
    answers: [
      "Presse nationale",
      "Radio nationale",
      "Facebook (page ou groupe)",
      "Affichage sur autoroute uniquement"
    ],
    correctIndex: 2,
    theme: "Canaux de communication",
    difficulty: "Niveau facile",
    feedbackCorrect: "Oui : Facebook est très adapté pour animer une communauté locale autour d’un club.",
    feedbackIncorrect: "Pour animer une communauté locale et échanger facilement, Facebook (page ou groupe) est souvent le plus pertinent."
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
  // On marque que le quiz a été démarré sur cet appareil
  localStorage.setItem("quiz_comm_started", "true");
  localStorage.setItem("quiz_comm_finished", "false");

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

  const started  = localStorage.getItem("quiz_comm_started") === "true";
  const finished = localStorage.getItem("quiz_comm_finished") === "true";

  // a déjà commencé mais pas fini → il essaie de recommencer de zéro
  if (started && !finished) {
    pseudoError.textContent = "Tu as déjà commencé ce quiz sur cet appareil. Va voir le formateur 🙂";
    return;
  }

  // a déjà fini → il essaie de le refaire pour améliorer son score
  if (finished) {
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
