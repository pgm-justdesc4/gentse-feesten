(function () {
  const $logo = document.getElementById("logo");
  const $letter = document.getElementById("logo-letter");
  const $logoFooter = document.getElementById("logo-footer");
  const $letterFooter = document.getElementById("logo-letter-footer");

  // BUILD UI

  function buildUI() {
    $logo.innerHTML = getHTMLForLogos($url, $number);
    if ($letter) {
      $letter.innerHTML = getHTMLForLetters($url, $number);
    }
    $logoFooter.innerHTML = getHTMLForLogos($url, $number);
    $letterFooter.innerHTML = getHTMLForLetters($url, $number);
  }

  // INITIALIZE

  function initialize() {
    buildUI();
  }

  initialize();
})();
