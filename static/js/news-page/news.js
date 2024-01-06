(async function () {
  const API_URL = "https://www.pgm.gent/data/gentsefeesten/news.json";
  const $data = await fetchData(API_URL);
  const $news = document.getElementById("news");

  // RENDER HTML

  function getHTMLForNews(news) {
    let html = "";

    news.forEach((newsPost) => {
      html += `
        <li>
          <a href="events/detail.html?id=${newsPost.id}">
              <h2>${newsPost.title}</h2>
              <div class="arrow-right">
                  <div class="arrow-helper"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path fill="currentColor"
                      d="M12.5 7c.384 0 .768.146 1.06.439l8.26 8.261-8.26 8.261a1.5 1.5 0 0 1-2.121-2.122l6.14-6.14-6.14-6.139a1.502 1.502 0 0 1 1.06-2.561z" /></svg>
              </div>
              <figure>
                <img src="${newsPost.picture.large}" alt="News image">
              </figure>
          </a>
        </li>`;
    });
    return html;
  }

  // BUILD UI

  function buildUI() {
    $news.innerHTML = getHTMLForNews($data);
  }

  // INITIALIZE

  function initialize() {
    buildUI();
  }

  initialize();
})();
