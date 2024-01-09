(async function () {
  const $dayNav = document.getElementById("dayNav");
  const $detail = document.getElementById("detail");

  const API_URL = "https://www.pgm.gent/data/gentsefeesten/events_500.json";
  const $data = await fetchData(API_URL);
  const $days = ["Vr", "Za", "Zo", "Ma", "Di", "Wo", "Do"];
  const $day = getParam("day");
  const $slug = getParam("slug");

  const $event = $data.filter(
    (event) => event.day === $day && event.slug === $slug
  );
  console.log($event);

  // RENDER HTML

  function getHTMLForDetail(eventInArray) {
    const event = eventInArray[0];
    return `
    <h1>${event.title}</h1>`;
  }

  // BUILD UI

  function buildUI() {
    $dayNav.innerHTML = getHTMLForDayNavigation(
      JSON.parse($day),
      $days,
      14,
      23
    );
    $detail.innerHTML = getHTMLForDetail($event);
  }

  // INITIALIZE

  function initialize() {
    buildUI();
  }

  initialize();
})();
