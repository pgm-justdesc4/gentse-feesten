(async () => {
  const $dayNav = document.getElementById("dayNav");
  const $spotlight = document.getElementById("spotlight");
  const $filter = document.getElementById("filter");
  const $events = document.getElementById("events");

  const $data = await fetchData(API_URL_EVENTS);
  const $filePath = getPath("day=");
  const $day = getParam("day");
  const $days = ["Vr", "Za", "Zo", "Ma", "Di", "Wo", "Do"];

  const $dayEvents = $data.filter((event) => event.day === $day);
  const $dayEventsFiltered = $dayEvents.filter(
    (events) => events.image && events.location
  );
  const $randomEvents = getRandomArray(3, $dayEventsFiltered);

  const $allDayCategories = $dayEvents.map((event) => event.category).flat();
  const $categories = getUniqArray($allDayCategories);

  // RENDER HTML

  function getHTMLForFilter(categories) {
    let html = "";
    categories.sort();

    categories.forEach((category) => {
      const id = categories.indexOf(category);

      html += `
        <li>
          <figure>
            <img src="../static/img/filter icoontjes/tag.svg" alt="Tag icon">
          </figure>
            <a href="#${id}">
                ${category}
            </a>
        </li>`;
    });
    return html;
  }

  function getHTMLForDayEvents(categories, dayEvents) {
    let id = 0;
    let html = "";

    categories.forEach((category) => {
      html += `
        <div class="category">
            <h2 id="${id++}">${category}</h2>
            <a href="#filter">
              <figure class="arrow-up">
                <img src="../static/img/gentse-feesten-icoontjes/arrow-up.svg" alt="Arrow up">
              </figure>
            </a>
        </div>
        <ul>
        ${getHTMLForEvents(
          dayEvents.filter((event) => {
            return event.category.includes(category);
          }),
          $filePath
        )}
        </ul>`;
    });
    return html;
  }

  // BUILD UI

  function buildUI() {
    $dayNav.innerHTML = getHTMLForDayNavigation(
      JSON.parse($day),
      $days,
      14,
      23
    );
    $spotlight.innerHTML = getHTMLForEvents($randomEvents, $filePath);
    $filter.innerHTML = getHTMLForFilter($categories);
    $events.innerHTML = getHTMLForDayEvents($categories, $dayEventsFiltered);
  }

  // INITIALIZE

  function initialize() {
    buildUI();
  }

  initialize();
})();
