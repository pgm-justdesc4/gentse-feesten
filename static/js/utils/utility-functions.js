/*
===================================
Random Number
===================================
*/

function getRandomNumber(number) {
  const randomNumber = Math.floor(Math.random() * number + 1);
  return randomNumber;
}

/*
===================================
Random Array
===================================
*/

function getRandomArray(arrayLength, data) {
  let array = [];

  while (array.length < arrayLength) {
    const randomNumber = getRandomNumber(data.length - 1);
    const randomItem = data[randomNumber];
    const inArray = array.some((item) => item.id === randomItem.id);

    if (!inArray) {
      array.push(randomItem);
    }
  }
  return array;
}

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
      return data;
    } else {
      throw new Error("Error with the API.", error.message);
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
