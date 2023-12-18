(function () {
  function registerListeners() {
    const $click = document.getElementById("menu");
    $click.addEventListener("click", function (event) {
      event.preventDefault();
      const $menu = document.getElementById("dropdown-menu");
      $menu.classList.remove("close");
      let html = "";
      html += `
          <div class="dropdown-menu overlay-body">
              <nav>
              </nav>
              <div id="close">
                <p>X</p>
              </div>
          </div>`;

      $menu.innerHTML = html;

      const $close = document.getElementById("close");
      $close.addEventListener("click", function () {
        $menu.classList.add("close");
      });
    });
  }

  function initialize() {
    registerListeners();
  }

  initialize();
})();
