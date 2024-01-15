(function () {
  const $logo = document.getElementById("logo");
  const $letter = document.getElementById("logo-letter");
  const $logoFooter = document.getElementById("logo-footer");
  const $letterFooter = document.getElementById("logo-letter-footer");
  const $filePath = getPath("day");

  // RENDER HTML

  function getHTMLForLogos($number) {
    return `<img src="${$filePath}static/img/Gentse Feesten Logos/GF-logo-2023-${$number}.svg" alt="Gentse Feesten logo">`;
  }

  function getHTMLForLetters($number) {
    return `<img src="${$filePath}static/img/Gentse Feesten Logos/campagne-${$number}.png" alt="Gentse Feesten letter">`;
  }

  // BUILD UI

  function buildUI() {
    $logo.innerHTML = getHTMLForLogos($number);
    if ($letter) {
      $letter.innerHTML = getHTMLForLetters($number);
    }
    $logoFooter.innerHTML = getHTMLForLogos($number);
    $letterFooter.innerHTML = getHTMLForLetters($number);
  }

  // INITIALIZE

  function initialize() {
    buildUI();
  }

  initialize();
})();
