(async function () {
  const $dayNav = document.getElementById("dayNav");
  const $spotlight = document.getElementById("spotlight");
  const $filter = document.getElementById("filter");
  const $events = document.getElementById("events");

  const API_URL = "https://www.pgm.gent/data/gentsefeesten/events_500.json";
  const $data = await fetchData(API_URL);
  const $day = getParam("day");

  const $dayEvents = $data.filter((event) => event.day === $day);
  const $dayEventsFiltered = $dayEvents.filter(
    (events) => events.image && events.location
  );
  const $randomEvents = getRandomArray(3, $dayEventsFiltered);

  const $allDayCategories = $dayEvents.map((event) => event.category).flat();
  const $categories = $allDayCategories.filter(
    (category, index, array) => array.indexOf(category) === index
  );

  // RENDER HTML

  function getHTMLForDayNavigation($day) {
    let startDay = 14;
    let endDay = 23;
    let html = "";

    for (let i = startDay; i <= endDay; i++) {
      if (i === $day) {
        html += `
        <li>
            <a class="day-pointer" href="day.html?day=${i}">
                <p>
                    <strong>Di</strong>
                    <br>
                    ${i} juli
                    </p>
            </a>
        </li>`;
      } else {
        html += `
        <li>
            <a href="day.html?day=${i}">
                <p>
                    <strong>Di</strong>
                    <br>
                    ${i} juli
                    </p>
            </a>
        </li>`;
      }
    }
    return html;
  }

  function getHTMLForFilter(categories) {
    let html = "";

    categories.forEach((category) => {
      const id = categories.indexOf(category);

      html += `
        <li>
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
        <div>
            <h2 id="${id++}">${category}</h2>
            <a href="#filter">
                <img src="../static/img/gentse-feesten-icoontjes/arrow-up.svg" alt="Arrow up">
            </a>
        </div>
        <ul>
        ${getHTMLForEvents(
          dayEvents.filter((event) => {
            return event.category.includes(category);
          })
        )}
        </ul>`;
    });
    return html;
  }

  // BUILD UI

  function buildUI() {
    $dayNav.innerHTML = getHTMLForDayNavigation(JSON.parse($day));
    $spotlight.innerHTML = getHTMLForEvents($randomEvents);
    $filter.innerHTML = getHTMLForFilter($categories);
    $events.innerHTML = getHTMLForDayEvents($categories, $dayEventsFiltered);
  }

  // INITIALIZE

  function initialize() {
    buildUI();
  }

  initialize();
})();
