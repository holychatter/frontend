const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let searchQueryFromUrlParams = urlParams.get('q');
function searchBarManagement(searchInputStr, searchButtonStr) {
  var searchInput = document.getElementById(searchInputStr);
  searchInput.focus();
  searchInput.value = searchQueryFromUrlParams;
  const length = searchInput.value.length;
  searchInput.setSelectionRange(length, length);
  function goOnSearchPageIfInputNotEmpty() {
    if (searchInput.value) {
      var urlizedValue = searchInput.value.replaceAll("'", " ");
      location.href = '/fr/rechercher?q=' + urlizedValue;
    }
  }
  var searchButton = document.getElementById(searchButtonStr);
  searchButton.addEventListener('click', event => {
    goOnSearchPageIfInputNotEmpty();
  });
  searchInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      goOnSearchPageIfInputNotEmpty();
    }
  });
}
