(async function () {
  const API_URL = "https://www.pgm.gent/data/gentsefeesten/events.json";
  const $data = await fetchData(API_URL);

  const $searchForm = document.getElementById("searchForm");
  const $searchInfo = document.getElementById("searchInfo");
  const $events = document.getElementById("searchedEvents");

  const $eventsFiltered = $data.filter(
    (event) => event.image && event.location && event.description
  );

  const $searchQuery = getParam("search");

  // RENDER HTML

  function getHTMLForSearchInfo(data, searchQuery) {
    return `<p>
    <strong>${data.length} resultaten</strong> voor "${searchQuery}"
    </p>`;
  }

  // BUILD UI

  function buildUI(events) {
    $searchInfo.innerHTML = getHTMLForSearchInfo(events, $searchQuery);
    $events.innerHTML = getHTMLForEvents(events);
  }

  // SEARCH

  function searchEvents(events, buildUI) {
    const query = $searchQuery.toLowerCase().split(" ");

    const filteredEvents = events.filter((event) => {
      return query.every((word) => {
        if (event.description) {
          return (
            event.title.toLowerCase().includes(word) ||
            event.description.toLowerCase().includes(word) ||
            event.slug.toLowerCase().includes(word)
          );
        }
      });
    });

    console.log(filteredEvents);
    buildUI(filteredEvents);
  }

  // REGISTER LISTENERS

  function registerListeners() {
    $searchForm.addEventListener("submit", () => {
      searchEvents($eventsFiltered, buildUI);
    });
  }

  // INITIALIZE

  function initialize() {
    searchEvents($eventsFiltered, buildUI);
    registerListeners();
  }

  initialize();
})();
