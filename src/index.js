import printList from './modules/printList.js';
import Scores from './modules/scoresClass.js';
import './style.css';

const addScoreBtn = document.querySelector(
  '.leaderboard__wrapper__add__form__btn',
);
const clearScoresBtn = document.querySelector(
  '.leaderboard__wrapper__scores__header__btn',
);
let getScores = localStorage.getItem('recentScores')
  ? JSON.parse(localStorage.getItem('recentScores'))
  : [];

printList(getScores);

addScoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector(
    '.leaderboard__wrapper__add__form__name-input',
  ).value;
  const score = document.querySelector(
    '.leaderboard__wrapper__add__form__score-input',
  ).value;

  const newScore = new Scores(name, score);
  newScore.addScore();
});

clearScoresBtn.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.clear();
  getScores = [];
  printList(getScores);
});
