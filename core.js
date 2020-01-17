const table = document.querySelector('table');
const baseURL = 'https://api.punkapi.com/v2/beers'
let beer = [];
const columnNames = ['id', 'name', 'tagline', 'first brewed', 'description'];
const buttonWrapper = document.getElementById('button-wrapper');
const buttonSingle = document.getElementsByClassName('btn');
let currentButton;

async function getBeer(params) {
    try {
        const url = new URL(baseURL)
        const queryParams = { page: params.page, per_page: 5 }

        url.search = new URLSearchParams(queryParams).toString();

        const responce = await fetch(url)
        const data = await responce.json()
        beer = data.map(({ id, name, tagline, first_brewed, description }) => ({ id, name, tagline, first_brewed, description }))
        generateTableHead(table, columnNames);
        generateTable(table, beer);

    } catch (e) {
        console.error(e)
    }
}
function setActivePage(event) {
    const newClass = 'mybtn';
    if (currentButton) {
        currentButton.classList.remove(newClass);
    }
    if (event.target.innerHTML) {
        currentButton = event.target;
    } else {
        return;
    };
    currentButton.classList.add(newClass);
}

async function getSingleBeer(id) {
    try {
        const responce = await fetch(`${baseURL}/${id}`)
        const data = await responce.json()
        console.log('Data', data)
    } catch (e) {
        console.error(e)
    }
}
buttonWrapper.addEventListener('click', function (event) {
    setActivePage(event);
    getBeer({ page: event.target.innerHTML })
    parseBeer();
})


/* Создать объекты элемента пиво одного класса
Визуализировать в каталог с картинками и прочим, оформление
Чекбоксы (корзина)на каждом пиве и при выделении иконки корзины должны отобразиться элементы которые я уже выбрал */
