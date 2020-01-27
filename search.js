let beerForSearch = [];
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');




async function updateResult(query) {

    let resultList = document.querySelector('#result-list');
    resultList.innerHTML = "";

    try {
        const url = new URL(baseURL)
        const queryParams = { beer_name: query};

        url.search = new URLSearchParams(queryParams).toString();

        const responce = await fetch(url)
        const data = await responce.json()
        data.forEach(item => resultList.innerHTML += `<li class="list-group-item">${item.name}</li>`)
    }
    catch (e) {
        console.error(e)
    }
};
const debounce = (func, delay) => {
    let inDebounce
    return function() {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
  };
searchInput.addEventListener('input', debounce(function(event) {
    if(event.target.value) {
      updateResult(event.target.value);
    }
}, 500));

