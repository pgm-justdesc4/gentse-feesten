(function () {
  const $menu = document.getElementById("menu");
  const $menuBtn = document.getElementById("menu-btn");
  const $filePath = getPath("day.html");

  // RENDER HTML

  function getHTMLForMenu() {
    return `
        <div class="menu">
        <div class="menu__search">
            <ul>
                <li class="header__languages">
                    <a href="#">NL
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path fill="currentColor"
                                d="m15.7 21.82-8.26-8.26a1.5 1.5 0 1 1 2.12-2.12l.001.001 6.14 6.138 6.14-6.139a1.5 1.5 0 1 1 2.122 2.121l-8.26 8.26z" />
                        </svg>
                    </a>
                </li>
                <li class="header__search">
                    <a href="${$filePath}search.html">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path fill="currentColor"
                                d="m31.474 28.951-6.043-6.025a14.08 14.08 0 0 0 3.004-8.708A14.22 14.22 0 0 0 4.163 4.164a14.215 14.215 0 0 0-3.082 15.495 14.217 14.217 0 0 0 13.136 8.777 14.072 14.072 0 0 0 8.708-3.004l6.025 6.043a1.77 1.77 0 0 0 1.262.526 1.776 1.776 0 0 0 1.261-.526 1.77 1.77 0 0 0 .526-1.261 1.77 1.77 0 0 0-.526-1.262zM3.554 14.218a10.659 10.659 0 0 1 6.583-9.851 10.667 10.667 0 0 1 11.621 2.311 10.66 10.66 0 0 1 2.311 11.621 10.663 10.663 0 0 1-20.514-4.081z" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    <div class="menu__nav">
        <nav>
        <a id="logo-menu" href="${$filePath}index.html">
            <img src="${$filePath}static/img/Gentse Feesten Logos/GF-logo-2023-${$number}.svg" alt="Gentse Feesten logo">
        </a>
            <ul class="menu__nav-list">
                <li>
                    <a href="${$filePath}news.html">
                        Nieuws
                    </a>
                </li>
                <li class="menu__program">
                    <a class="menu__program-item" href="${$filePath}events/day.html?day=14">
                        <p>Programma</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 32"><path fill="currentColor" d="m18.524 0-4.049 4.022 8.784 8.784H0v5.677h23.259l-8.784 8.784 4.049 4.022 15.609-15.645L18.524 0z"/></svg>
                    </a>
                    <div>
                        <ul>
                            <li>
                                <a href="${$filePath}events/day.html?day=14">
                                    Vrijdag 14 juli
                                </a>
                            </li>
                            <li>
                                <a href="${$filePath}events/day.html?day=15">
                                    Zaterdag 15 juli
                                </a>
                            </li>
                            <li>
                                <a href="${$filePath}events/day.html?day=16">
                                    Zondag 16 juli
                                </a>
                            </li>
                            <li>
                                <a href="${$filePath}events/day.html?day=17">
                                    Maandag 17 juli
                                </a>
                            </li>
                            <li>
                                <a href="${$filePath}events/day.html?day=18">
                                    Dinsdag 18 juli
                                </a>
                            </li>
                            <li>
                                <a href="${$filePath}events/day.html?day=19">
                                    Woensdag 19 juli
                                </a>
                            </li>
                            <li>
                                <a href="${$filePath}events/day.html?day=20">
                                    Donderdag 20 juli
                                </a>
                            </li>
                            <li>
                                <a href="${$filePath}events/day.html?day=21">
                                    Vrijdag 21 juli
                                </a>
                            </li>
                            <li>
                                <a href="${$filePath}events/day.html?day=22">
                                    Zaterdag 22 juli
                                </a>
                            </li>
                            <li>
                                <a href="${$filePath}events/day.html?day=23">
                                    Zondag 23 juli
                                </a>
                            </li>
                            <li>
                                <a href="${$filePath}events/day.html?day=14">
                                    Programma
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#">
                        Praktisch
                    </a>
                </li>
                <li>
                    <a href="#">
                        Live parkeerinfo
                    </a>
                </li>
                <li>
                    <a href="#">
                        Hoe naar gf23?
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    <figure id="logoLetterMenu" class="menu__letter">
        <img src="${$filePath}static/img/Gentse Feesten Logos/campagne-${$number}.png" alt="Gentse Feesten letter">
    </figure>
    <a class="menu__close" id="close" href="#">
        X
    </a>
</div>`;
  }

  // BUILD UI

  function buildUI() {
    $menu.innerHTML = getHTMLForMenu();
  }

  // REGISTER LISTENERS

  function registerListeners() {
    $menuBtn.addEventListener("click", function (e) {
      e.preventDefault();
      $menu.classList.remove("close");
      buildUI();

      const $close = document.getElementById("close");
      $close.addEventListener("click", function (e) {
        e.preventDefault();
        $menu.classList.add("close");
      });
    });
  }

  // INITIALIZE

  function initialize() {
    registerListeners();
  }

  initialize();
})();
