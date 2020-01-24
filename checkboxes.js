let selectedCheckBox = new Map();
const checkBoxCall = document.getElementById('checkbox');
let tableForBasket;
const toCart = document.getElementById('toCart');
const localStorageDataJSON = localStorage.getItem('tableForBasket');
let localStorageMap;

if (localStorageDataJSON) {
    const localStorageData = JSON.parse(localStorageDataJSON);
    selectedCheckBox = new Map(localStorageData.map(item => [item.id, item]));
};

function createCheckBox(idBeer) {
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('idBeer', idBeer);
    checkBox.checked = !!selectedCheckBox.get(idBeer);
    return checkBox;
}

table.addEventListener('change', function (event) {
    const currentCheckBox = event.target;
    const idBeer = currentCheckBox.getAttribute('idBeer');
    const beer = beers.find(function (beer) {
        return beer.id === parseInt(idBeer, 10);
    });
    currentCheckBox.checked ? selectedCheckBox.set(idBeer, beer) : selectedCheckBox.delete(idBeer);
    tableForBasket = Array.from(selectedCheckBox.values());
});

toCart.addEventListener('click', function () {
    localStorage.removeItem('tableForBasket');
    if (tableForBasket && tableForBasket.length) {
        localStorage.setItem('tableForBasket', JSON.stringify(tableForBasket))
    };
    window.location.href = 'basketTable.html';
})





/* console.log(selectedCheckBox.get('1') ? selectedCheckBox.get('1').name : null); */

/* преобразовать мой мэп, чтобы оставить нужные данные  */