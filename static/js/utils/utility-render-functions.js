/*
===================================
HTML FOR LOGOS
===================================
*/

const $url = window.location.href;
const $number = getRandomNumber(6);

function getHTMLForLogos(url, $number) {
  if (url.includes("day.html")) {
    return `<img src="../static/img/Gentse Feesten Logos/GF-logo-2023-${$number}.svg" alt="Gentse Feesten logo">`;
  } else {
    return `<img src="static/img/Gentse Feesten Logos/GF-logo-2023-${$number}.svg" alt="Gentse Feesten logo">`;
  }
}

function getHTMLForLetters(url, $number) {
  if (url.includes("day.html")) {
    return `<img src="../static/img/Gentse Feesten Logos/campagne-${$number}.png" alt="Gentse Feesten letter">`;
  } else {
    return `<img src="static/img/Gentse Feesten Logos/campagne-${$number}.png" alt="Gentse Feesten letter">`;
  }
}
