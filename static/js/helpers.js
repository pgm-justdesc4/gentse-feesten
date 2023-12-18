// Get random number for logos
function getRandomNumber(number) {
  const randomNumber = Math.floor(Math.random() * number + 1);
  return randomNumber;
}

const number = getRandomNumber(6);
