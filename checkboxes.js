let selectedCheckBox = new Map();
const checkBoxCall = document.getElementById('checkbox');

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
});




/* selectedCheckBox.set(event.target.parentNode.parentNode.querySelectorAll('td')[1].innerText, event.target.parentNode.parentNode.querySelectorAll('td')[2].innerText)
    } else {
        selectedCheckBox.delete(event.target.parentNode.parentNode.querySelectorAll('td')[1].innerText) */