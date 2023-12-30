(async function () {
  const API_URL = "https://www.pgm.gent/data/gentsefeesten/events.json";
  const data = await fetchData(API_URL);
  const $spotlight = document.getElementById("spotlight");

  function getHTMLForRandomEvents(data) {
    let events = [];

    data.forEach((event) => {
      const randomNumber = getRandomNumber(data.length);
      const randomEvent = data[randomNumber];

      let inArray = false;

      if (events.length >= 8) {
        return;
      }
      for (let i = 0; i < events.length; i++) {
        if (events[i].id === event.id) {
          inArray = true;
        }
      }

      if (!inArray && randomEvent.image) {
        events.push(randomEvent);
      }
    });

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
              ${event.start}
            </p>
          </div>
        </a>
      </li>`;
    });
    return html;
  }

  function buildUI(data) {
    $spotlight.innerHTML = getHTMLForRandomEvents(data);
  }

  function initialize() {
    buildUI(data);
  }

  initialize();
})();
