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
        $normal.classList.add("bg-red");
        $list.classList.remove("bg-red");
      } else if ($eventSearch) {
        $eventSearch.classList.remove("grid-list");
        $normal.classList.add("bg-red");
        $list.classList.remove("bg-red");
      }
    });

    $list.addEventListener("click", (e) => {
      e.preventDefault();
      if ($events) {
        $events.classList.add("grid-list");
        $list.classList.add("bg-red");
        $normal.classList.remove("bg-red");
      } else if ($eventSearch) {
        $eventSearch.classList.add("grid-list");
        $list.classList.add("bg-red");
        $normal.classList.remove("bg-red");
      }
    });
  }

  // INITIALIZE

  function initialize() {
    registerListeners();
  }

  initialize();
})();
