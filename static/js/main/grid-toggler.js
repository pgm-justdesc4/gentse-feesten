(function () {
  const $normal = document.getElementById("normal");
  const $list = document.getElementById("list");
  const $events = document.getElementById("events");
  const $eventSearch = document.getElementById("searchedEvents");

  // REGISTER LISTENERS

  function registerListeners() {
    $normal.addEventListener("click", (e) => {
      e.preventDefault();
      if ($events) {
        $events.classList.remove("grid-list");
      } else if ($eventSearch) {
        $eventSearch.classList.remove("grid-list");
      }
    });

    $list.addEventListener("click", (e) => {
      e.preventDefault();
      if ($events) {
        $events.classList.add("grid-list");
      } else if ($eventSearch) {
        $eventSearch.classList.add("grid-list");
      }
    });
  }

  // INITIALIZE

  function initialize() {
    registerListeners();
  }

  initialize();
})();
