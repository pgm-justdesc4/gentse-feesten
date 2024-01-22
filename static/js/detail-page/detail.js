(async function () {
  const $dayNav = document.getElementById("dayNav");
  const $detail = document.getElementById("detail");
  const $map = document.getElementById("locationMap");

  const $data = await fetchData(API_URL_EVENTS);
  const $days = ["Vr", "Za", "Zo", "Ma", "Di", "Wo", "Do"];
  const $day = getParam("day");
  const $slug = getParam("slug");

  const eventInArray = $data.filter(
    (event) => event.day === $day && event.slug === $slug
  );
  const $event = eventInArray[0];

  // RENDER HTML

  function getHTMLForWeelchair(wheelchair) {
    let html = "";

    if (wheelchair === true) {
      html += `
        <figure class="wheelchair">
            <img src="../static/img/gentse-feesten-icoontjes/wheelchair.svg" alt="Wheelchair icon">
        </figure>`;
    }
    return html;
  }

  function getHTMLForCategories(categories, day) {
    let html = "";

    categories.forEach((category) => {
      html += `
      <li>
        <a href="day.html?day=${day}#filter">
          ${category}
        </a>
      </li>`;
    });
    return html;
  }

  function getHTMLForDetail(event) {
    return `
    <div>
        <a class="detail__goday" href="day.html?day=${event.day}">
            <div class="arrow-left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path fill="currentColor"
                        d="M20.321 24.4c-.384 0-.768-.146-1.06-.439L11 15.701l8.26-8.262a1.5 1.5 0 0 1 2.121 2.122l-6.14 6.14 6.14 6.14a1.503 1.503 0 0 1-1.06 2.56" />
                </svg>
                <div class="arrow-helper"></div>
                <p>
                    Overzicht ${event.day} juli
                </p>
            </div>
        </a>
        <h1>${event.title}</h1>
        <div class="detail__loc-time">
            <div class="detail__location">
                <figure>
                    <img src="../static/img/filter icoontjes/location.svg" alt="Location icon">
                </figure>
                <p>
                    ${event.location}
                </p>
            </div>
            <p>
                ${event.start} u. - ${event.end} u.
            </p>
        </div>
        <p>
            ${event.description ? event.description : ""}
        </p>
        <div class="detail__event-info">
            <ul>
                <li>
                    <p>
                        Organisator:
                    </p>
                    <a href="${event.url ? event.url : "#"}">
                        ${event.organizer}
                    </a>
                </li>
                <li>
                    <p>
                        Website:
                    </p>
                    <a href="${event.url ? event.url : ""}">
                        ${event.url ? event.url : ""}
                    </a>
                </li>
                <li>
                    <p>
                        Categorieën:
                    </p>
                    <ul class="detail__event-info-categories">
                        ${getHTMLForCategories(event.category, $day)}
                    </ul>
                </li>
                ${getHTMLForWeelchair(event.wheelchair_accessible)}
            </ul>
        </div>
    </div>
    <div>
        <figure>
            <img src="${
              event.image.full ? event.image.full : event.image.thumb
            }" alt="Event image">
        </figure>
        <div class="detail__socials">
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M12.973 24c7.17 0 11.093-5.77 11.093-10.773 0-.164-.003-.328-.013-.49a7.865 7.865 0 0 0 1.93-1.935l.017-.025a7.759 7.759 0 0 1-2.202.591l-.038.004a3.842 3.842 0 0 0 1.706-2.068l.008-.027a7.785 7.785 0 0 1-2.427.912l-.05.008c-1.473-1.526-3.942-1.603-5.512-.172a3.733 3.733 0 0 0-1.232 2.761v.001c0 .29.035.58.103.863-3.134-.153-6.055-1.59-8.036-3.956-1.032 1.73-.504 3.942 1.208 5.054a3.947 3.947 0 0 1-1.787-.483l.021.01v.048c0 1.802 1.307 3.355 3.125 3.712a3.915 3.915 0 0 1-1.027.133 4.11 4.11 0 0 1-.758-.071l.025.004c.512 1.541 1.975 2.598 3.642 2.63a7.907 7.907 0 0 1-4.814 1.62h-.027.001c-.31 0-.62-.017-.929-.053A11.147 11.147 0 0 0 12.953 24h.022-.001"/></svg>
            </a>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M17.49 25v-8.21h2.95l.44-3.2h-3.39v-2.043c0-.927.276-1.558 1.697-1.558L21 9.988V7.126A25.196 25.196 0 0 0 18.445 7h-.091.005c-2.614 0-4.403 1.491-4.403 4.23v2.36H11v3.2h2.956V25h3.535z"/></svg>
            </a>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M8.625 13.486c0 1.396.614 3.464 2.234 3.911.057 0 .112.057.224.057.392 0 .615-1.006.615-1.286 0-.335-.895-1.062-.895-2.402 0-2.906 2.347-4.917 5.42-4.917 2.627 0 4.582 1.397 4.582 3.911 0 1.9-.838 5.475-3.464 5.475-.95 0-1.788-.67-1.788-1.563 0-1.341 1.006-2.682 1.006-4.079 0-.838-.503-1.564-1.509-1.564-1.341 0-2.124 1.396-2.124 2.458 0 .614.057 1.285.392 1.844-.559 2.124-1.62 5.308-1.62 7.487 0 .671.111 1.341.167 2.012v.112l.168-.056c1.956-2.459 1.844-2.962 2.738-6.203.447.838 1.676 1.285 2.682 1.285 4.079 0 5.923-3.688 5.923-7.04 0-3.52-3.297-5.867-6.929-5.867-3.911-.001-7.822 2.458-7.822 6.425z"/></svg>
            </a>
        </div>
    </div>`;
  }

  function getHTMLForDetailLocation(event) {
    return `
    <div>
        <div class="detail__location">
            <figure>
                <img src="../static/img/filter icoontjes/location.svg" alt="Location icon">
            </figure>
            <p>
                ${event.location}
            </p>
        </div>
    </div>`;
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
    $map.innerHTML = getHTMLForDetailLocation($event);
  }

  // INITIALIZE

  function initialize() {
    buildUI();
  }

  initialize();
})();
