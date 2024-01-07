/*
===================================
Random Number
===================================
*/

function getRandomNumber(number) {
  const randomNumber = Math.floor(Math.random() * number + 1);
  return randomNumber;
}

// Get number for logos
const $number = getRandomNumber(6);

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
Get path for folder return
===================================
*/

function getPath(file) {
  const url = window.location.href;

  if (url.includes(file)) {
    return "../";
  } else {
    return "";
  }
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

/*
===================================
Set url search params
===================================
*/

function setSearchParams(searchInput, searchUrl) {
  let url = searchUrl;
  url += `search=${searchInput}`;
  return (window.location.href = url);
}

/*
===================================
Get HTML for events
===================================
*/

function getHTMLForEvents(events) {
  let html = "";

  events.forEach((event) => {
    html += `
    <li>
      <a href="events/detail.html?day=${event.day}&slug=${event.slug}">
        <img src="${event.image.full}" alt="Afbeelding event">
        <div class="spotlight-text-bl">
          <h2>${event.title}</h2>
          <h3>${event.location}</h3>
          <p>
            ${event.start} u.
          </p>
        </div>
      </a>
    </li>`;
  });
  return html;
}
