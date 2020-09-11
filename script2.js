const quizData = [{
    question: "The best Javascript Framework in 2020",
    a: "Angular",
    b: "React",
    c: "Svelte",
    d: "Malina",
    correct: "b",
  },
  {
    question: "Short name of Cascading Style Sheet",
    a: "CSS",
    b: "SCSS",
    c: "BEM",
    d: "Bootstrap/Tailwind",
    correct: "a",
  },
  {
    question: "Most popular programming language in 2020",
    a: "C#",
    b: "Java",
    c: "Javascript",
    d: "Python",
    correct: "d",
  },
];

let currentQuiz = 0;
let score = 0;

const questionText = document.getElementById('question');
const a_answer = document.getElementById('a_text');
const b_answer = document.getElementById('b_text');
const c_answer = document.getElementById('c_text');
const d_answer = document.getElementById('d_text');
const submit = document.getElementById('submit');
const quiz = document.getElementById('quiz')

const answers = document.querySelectorAll('.answer')

loadQuiz();

function loadQuiz(){
  clearAnswers();

  questionText.innerHTML = quizData[currentQuiz].question;
  a_answer.innerHTML = quizData[currentQuiz].a;
  b_answer.innerHTML = quizData[currentQuiz].b;
  c_answer.innerHTML = quizData[currentQuiz].c;
  d_answer.innerHTML = quizData[currentQuiz].d;
}

function getAnswer() {
  console.log('answers', answers);
  let userAnswer;

  answers.forEach( (answer) => {
    console.log('single answer', answer);
    console.log('single answer.id', answer.id);
    console.log('single answer.checked', answer.checked);
    if (answer.checked){
      userAnswer = answer.id
     }
  })

  console.log('Twoja odpowiedź to: ', userAnswer);
  return userAnswer;
}

function clearAnswers() {
  answers.forEach((answer) => {
    answer.checked = false
  });
}

submit.addEventListener('click', () => {
  const userAnswer = getAnswer();
  console.log('Jak jest dobra odp', quizData[currentQuiz].correct);

  if (userAnswer){
    if (userAnswer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `You have ${score}/${quizData.length}
      <button onclick=location.reload()> Try again </button>`;
    }
  }

})
