(async function () {
  const $dayNav = document.getElementById("dayNav");
  const $detail = document.getElementById("detail");

  const $data = await fetchData(API_URL_EVENTS);
  const $days = ["Vr", "Za", "Zo", "Ma", "Di", "Wo", "Do"];
  const $day = getParam("day");
  const $slug = getParam("slug");

  const $event = $data.filter(
    (event) => event.day === $day && event.slug === $slug
  );
  console.log($event);

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

  function getHTMLForDetail(eventInArray) {
    const event = eventInArray[0];
    return `
    <div>
        <a href="day.html?day=${event.day}">
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
                    <ul>
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
                <img src="../static/img/gentse-feesten-icoontjes/twitter.svg" alt="Twitter icon">
            </a>
            <a href="#">
                <img src="../static/img/gentse-feesten-icoontjes/facebook.svg" alt="Facebook icon">
            </a>
            <a href="#">
                <img src="../static/img/gentse-feesten-icoontjes/pinterest.svg" alt="Pinterest icon">
            </a>
        </div>
    </div>
    `;
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
