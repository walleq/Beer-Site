let selectedCheckBox = new Map();
const checkBoxCall = document.getElementById('checkbox');
let mapBasket = new Set();

function createCheckBox(idBeer) {
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('idBeer', idBeer);
    return checkBox;
}

table.addEventListener('change', function (event) {
    const currentCheckBox = event.target;
    const idBeer = currentCheckBox.getAttribute('idBeer');
    const beer = beers.find(function (beer) {
        return beer.id === parseInt(idBeer, 10);
    });
    currentCheckBox.checked ? selectedCheckBox.set(idBeer, beer) : selectedCheckBox.delete(idBeer);
     {
        
        console.log(val)
    }
});

/* for(let entry of selectedCheckBox) {
    mapBasket.add(entry[1].name);
    mapBasket.add(entry[1].tagline);
    mapBasket.add(entry[1].first_brewed);

    console.log(mapBasket)
 */


/* console.log(selectedCheckBox.get('1') ? selectedCheckBox.get('1').name : null); */

/* преобразовать мой мэп, чтобы оставить нужные данные */