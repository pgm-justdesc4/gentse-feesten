/*
===================================
Random Number
===================================
*/

function getRandomNumber(number) {
  const randomNumber = Math.floor(Math.random() * number + 1);
  return randomNumber;
}

// Get random number for logos
const number = getRandomNumber(6);

/*
===================================
Fetch Data
===================================
*/

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error("Error with the API.");
    }
  } catch (error) {
    console.error(error.message);
  }
}

/*
===================================
Get Params (from url)
===================================
*/

function getParams() {
  const currentUrl = new URL(window.location.href);
  return currentUrl.searchParams;
}

function getParam(name) {
  const params = getParams();
  return params.get(name);
}
