(async function () {
  const $data = await fetchData(API_URL_EVENTS);

  const $searchInfo = document.getElementById("searchInfo");
  const $events = document.getElementById("searchedEvents");
  const $searchInput = document.querySelector("input");

  const $eventsFiltered = $data.filter(
    (event) => event.image && event.location && event.description
  );

  const $searchQuery = getParam("search");
  $searchInput.value = $searchQuery;

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

    buildUI(filteredEvents);
  }

  // INITIALIZE

  function initialize() {
    searchEvents($eventsFiltered, buildUI);
  }

  initialize();
})();
