let table = document.querySelector('table');
const baseURL = 'https://api.punkapi.com/v2/beers'
let beer = [];
const columnNames = ['id', 'name', 'tagline', 'first brewed', 'description'];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}
function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

async function getBeer(params) {
    console.log('Fetch todo started ...')
    try {
        const url = new URL(baseURL)
        const queryParams = { page: params.page, per_page: 5 }

        url.search = new URLSearchParams(queryParams).toString();

        const responce = await fetch(url)
        const data = await responce.json()
        beer = data.map(({ id, name, tagline, first_brewed, description }) => ({ id, name, tagline, first_brewed, description }))
        generateTableHead(table, columnNames);
        generateTable(table, beer);
        console.log('Data', beer)
    } catch (e) {
        console.error(e)
    }
}

getBeer({ page: 2 });

async function getSingleBeer(id) {
    try {
        const responce = await fetch(`${baseURL}/${id}`)
        const data = await responce.json()
        console.log('Data', data)
    } catch (e) {
        console.error(e)
    }
}
getSingleBeer(1);

/* // 1) вытягивать все пиво
2) по отдельности
3) разделить по страницам 5
4) кэширование */