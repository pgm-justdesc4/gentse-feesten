const $logo = document.getElementById("logo");
const $letter = document.getElementById("logo-letter");
const $logoFooter = document.getElementById("logo-footer");
const $letterFooter = document.getElementById("logo-letter-footer");

function getRandomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

const number = getRandomNumber();

function getHTMLForLogos() {
  return `<img src="static/img/Gentse Feesten Logos/GF-logo-2023-${number}.svg" alt="Gente Feesten logo">`;
}

function getHTMLForLetters() {
  return `<img src="static/img/Gentse Feesten Logos/campagne-${number}.png" alt="Gente Feesten logo">`;
}

function buildUI() {
  $logo.innerHTML = getHTMLForLogos();
  $letter.innerHTML = getHTMLForLetters();
  $logoFooter.innerHTML = getHTMLForLogos();
  $letterFooter.innerHTML = getHTMLForLetters();
}

function initialize() {
  buildUI();
}

initialize();
