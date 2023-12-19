(function () {
  const number = getRandomNumber(6);
  const $logo = document.getElementById("logo");
  const $letter = document.getElementById("logo-letter");
  const $logoFooter = document.getElementById("logo-footer");
  const $letterFooter = document.getElementById("logo-letter-footer");

  function getHTMLForLogos() {
    return `<img src="static/img/Gentse Feesten Logos/GF-logo-2023-${number}.svg" alt="Gentse Feesten logo">`;
  }

  function getHTMLForLetters() {
    return `<img src="static/img/Gentse Feesten Logos/campagne-${number}.png" alt="Gentse Feesten letter">`;
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
})();
