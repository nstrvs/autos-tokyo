import $ from "jquery";

export function search() {
  let searchLink = document.querySelectorAll(".search-link");

  searchLink.forEach(function (link) {
    link.addEventListener("click", function () {
      let searchName = link.getAttribute("search");
      link.setAttribute(
        "href",
        `https://autostokyo.webflow.io/cars?search=${searchName}`,
      );
    });
  });

  const searchBar = document.getElementById("searchBar");

  if (window.location.search !== "") {
    searchBar.value = window.location.search.replace("?search=", "");
  }
}

export function filter() {
  $(document).ready(function () {
    const searchBar = $("#searchBar").on("input", function () {
      const searchQuery = $(this).val();

      // Update URL
      if (history.pushState) {
        const newurl =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "?search=" +
          searchQuery;
        window.history.pushState({ path: newurl }, "", newurl);
      }

      filterCollectionList(searchQuery);
    });

    // Get search parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get("search");

    // Run filterCollectionList with search parameter
    filterCollectionList(searchParam);
  });

  function filterCollectionList(query) {
    $(".collection-item").each(function () {
      const itemName = $(this).data("name").toLowerCase();
      const itemType = $(this).data("type").toLowerCase();
      const itemBrand = $(this).data("brand").toLowerCase();

      if (query === null) {
        console.log("null");
      }
      if (itemName.includes(query.toLowerCase())) {
        $(this).show();
        document.getElementById("searchEmpty").style.display = "none";
      } else if (itemType.includes(query.toLowerCase())) {
        $(this).show();
        document.getElementById("searchEmpty").style.display = "none";
      } else if (itemBrand.includes(query.toLowerCase())) {
        $(this).show();
        document.getElementById("searchEmpty").style.display = "none";
      } else {
        $(this).hide();
        document.getElementById("searchEmpty").style.display = "flex";
      }
    });
  }
}
