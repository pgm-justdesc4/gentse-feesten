(async function () {
  const API_URL = "https://www.pgm.gent/data/gentsefeesten/events.json";
  const $data = await fetchData(API_URL);
  const $spotlight = document.getElementById("spotlight");
  const $eventsFiltered = $data.filter(
    (events) => events.image && events.location
  );
  const $events = getRandomArray(8, $eventsFiltered);

  // BUILD UI

  function buildUI() {
    $spotlight.innerHTML = getHTMLForEvents($events);
  }

  // INITIALIZE

  function initialize() {
    buildUI();
  }

  initialize();
})();
