(function () {
  const $normal = document.getElementById("normal");
  const $list = document.getElementById("list");
  const $events = document.getElementById("events");

  // REGISTER LISTENERS

  function registerListeners() {
    $normal.addEventListener("click", (e) => {
      e.preventDefault();
      $events.classList.remove("grid-list");
    });

    $list.addEventListener("click", (e) => {
      e.preventDefault();
      $events.classList.add("grid-list");
    });
  }

  // INITIALIZE

  function initialize() {
    registerListeners();
  }

  initialize();
})();
