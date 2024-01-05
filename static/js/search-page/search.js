(async function () {
  const API_URL = "https://www.pgm.gent/data/gentsefeesten/events.json";
  const $data = await fetchData(API_URL);
  const $searchForm = document.getElementById("searchForm");
  const $events = document.getElementById("searchedEvents");

  function getHTMLForSearchedEvents(events) {
    let html = "";

    events.forEach((event) => {
      if (event.image && event.image.full) {
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
      }
    });
    return html;
  }

  function buildUI(data) {
    $events.innerHTML = getHTMLForSearchedEvents(data);
  }

  function searchEvents(data, buildUI) {
    const searchQuery = $searchForm.querySelector("input").value;
    const query = searchQuery.split(" ");

    const filteredEvents = data.filter((event) => {
      return query.every((word) => {
        if (event.title && event.description) {
          return event.title.includes(word) || event.description.includes(word);
        }
      });
    });
    console.log(filteredEvents);
    const url = new URL(window.location.href);
    url.searchParams.set("search", searchQuery);
    window.history.pushState({}, "", url);

    buildUI(filteredEvents);
  }

  // REGISTER LISTENERS

  function registerListeners() {
    $searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      searchEvents($data, buildUI);
    });
  }

  function initialize() {
    registerListeners();
  }

  initialize();
})();
