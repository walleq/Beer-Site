const removeButton = document.getElementById('elem');
const localStorageDataJSON = localStorage.getItem('tableForBasket');

removeButton.addEventListener('click', function (event) {
    let target = event.target;
    if (!target.classList.contains("remove-icon")) return;
    let cartId = document.getElementsByClassName("cart-item");
    let arrayId = Array.from(cartId);
    arrayId.forEach(item => {
        if(item.id === target.id) {
            item.parentNode.removeChild(item);
            const localStorageData = JSON.parse(localStorageDataJSON);
            let a = localStorageData.filter(item => item.id != target.id);
            console.log(a);
        }
    })
    
});


/* по клику удалять из локал стораджа */

