let beerForSearch = [];

function updateResult(query) {
    async function getFullBear() {
        try {
            const responce = await fetch(`${baseURL}`)
            const data = await responce.json();
            beerForSearch = data.map(beerData => new Beer(beerData));
            return beerForSearch;
        } catch (e) {
            console.error(e)
        }
    }
    let resultList = document.querySelector('#result-list');
    resultList.innerHTML = "";
    getFullBear();
    beerForSearch.map(function (algo) {
        query.split(" ").map(function (word) {
            if (algo.toLowerCase().indexOf(word.toLowerCase()) != -1) {
                resultList.innerHTML += `<li class="list-group-item">${algo}</li>`;
            }
        })
    })
};

