(function () {
  const API_URL = "https://www.pgm.gent/data/gentsefeesten/events_500.json";

  async function fetchData(url, callback) {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error("Error with the API.");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  function renderData(data) {
    // HIER BEZIG
  }

  function initialize() {
    fetchData(API_URL, renderData);
  }

  console.log(initialize());
})();
