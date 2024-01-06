(async function () {
  const API_URL = "https://www.pgm.gent/data/gentsefeesten/events.json";
  const $data = await fetchData(API_URL);
  const $searchForm = document.getElementById("searchForm");
  const $searchInfo = document.getElementById("searchInfo");
  const $events = document.getElementById("searchedEvents");
  const $searchQuery = getParam("search");

  function getHTMLForSearchInfo(data, searchQuery) {
    return `<p>
    <strong>${data.length} resultaten</strong> voor "${searchQuery}"
    </p>`;
  }

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

  function buildUI(events) {
    $searchInfo.innerHTML = getHTMLForSearchInfo(events, $searchQuery);
    $events.innerHTML = getHTMLForSearchedEvents(events);
  }

  function searchEvents(data, buildUI) {
    const query = $searchQuery.split(" ");

    const filteredEvents = data.filter((event) => {
      return query.every((word) => {
        if (event.title && event.description) {
          return (
            event.title.includes(word) ||
            event.description.includes(word) ||
            event.slug.includes(word)
          );
        }
      });
    });
    console.log(filteredEvents);
    const url = new URL(window.location.href);
    url.searchParams.set("search", $searchQuery);
    window.history.pushState({}, "", url);

    buildUI(filteredEvents);
  }

  // REGISTER LISTENERS

  function registerListeners() {
    $searchForm.addEventListener("submit", () => {
      searchEvents($data, buildUI);
    });
  }

  function initialize() {
    searchEvents($data, buildUI);
    registerListeners();
  }

  initialize();
})();
