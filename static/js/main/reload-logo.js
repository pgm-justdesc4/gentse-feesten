(function () {
  const $logo = document.getElementById("logo");
  const $letter = document.getElementById("logo-letter");
  const $logoFooter = document.getElementById("logo-footer");
  const $letterFooter = document.getElementById("logo-letter-footer");

  // RENDER HTML

  function getHTMLForLogos() {
    return `<img src="static/img/Gentse Feesten Logos/GF-logo-2023-${number}.svg" alt="Gentse Feesten logo">`;
  }

  function getHTMLForLetters() {
    return `<img src="static/img/Gentse Feesten Logos/campagne-${number}.png" alt="Gentse Feesten letter">`;
  }

  // BUILD UI

  function buildUI() {
    $logo.innerHTML = getHTMLForLogos();
    if ($letter) {
      $letter.innerHTML = getHTMLForLetters();
    }
    $logoFooter.innerHTML = getHTMLForLogos();
    $letterFooter.innerHTML = getHTMLForLetters();
  }

  // INITIALIZE

  function initialize() {
    buildUI();
  }

  initialize();
})();
