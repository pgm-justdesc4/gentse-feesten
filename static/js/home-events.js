(async function () {
  const API_URL = "https://www.pgm.gent/data/gentsefeesten/events.json";
  const data = await fetchData(API_URL);
  const $spotlight = document.getElementById("spotlight");
  const events = getRandomArrayForEvents(8, data);

  function getRandomArrayForEvents(arrayLength, data) {
    let array = [];

    while (array.length < arrayLength) {
      const randomNumber = getRandomNumber(data.length - 1);
      const randomItem = data[randomNumber];
      const inArray = array.some((item) => item.id === randomItem.id);

      if (!inArray && randomItem.image) {
        array.push(randomItem);
      }
    }
    return array;
  }

  function getHTMLForEvents(events) {
    let html = "";

    events.forEach((event) => {
      html += `
      <li>
        <a href="events/detail.html?id=${event.id}">
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

  function buildUI() {
    $spotlight.innerHTML = getHTMLForEvents(events);
  }

  function initialize() {
    buildUI();
  }

  initialize();
})();
