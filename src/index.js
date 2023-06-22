import './style.css';
import getData from './modules/getData.js';
import setData from './modules/setData.js';

const addScoreForm = document.querySelector('form');
const updateScoresBtn = document.querySelector(
  '.leaderboard__wrapper__scores__header__btn',
);
const nameInput = document.querySelector(
  '.leaderboard__wrapper__add__form__name-input',
);
const scoreInput = document.querySelector(
  '.leaderboard__wrapper__add__form__score-input',
);

getData();

addScoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  getData();
  setData(nameInput.value, scoreInput.value);
  addScoreForm.reset();
});

updateScoresBtn.addEventListener('click', () => {
  getData();
});
