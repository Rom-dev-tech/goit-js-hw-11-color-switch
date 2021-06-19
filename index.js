import colors from './js/colors.js';

// Refs
const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

// For setInterval ID
let id = 0;

// Vars
const MIN_VALUE = 0;
const MAX_VALUE = colors.length;

// Event
refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

// StartBtn
function onStartBtnClick() {
  refs.startBtn.style.backgroundColor = 'grey';
  refs.startBtn.setAttribute('disabled', false);

  id = setInterval(() => {
    const rendomNumber = randomIntegerFromInterval(MIN_VALUE, MAX_VALUE);
    refs.body.style.background = `${colors[rendomNumber]}`;
  }, 1000);
}

// StopBtn
function onStopBtnClick() {
  clearInterval(id);
  refs.startBtn.removeAttribute('disabled', true);
  refs.startBtn.style.backgroundColor = '';
}

// Rendom number
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
