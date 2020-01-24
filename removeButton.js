const removeButton = document.getElementById('elem');
const localStorageDataJSON = localStorage.getItem('tableForBasket');

removeButton.addEventListener('click', function (event) {
    let target = event.target;
    if (!target.classList.contains("remove-icon")) return;
    let cartId = document.getElementsByClassName("cart-item");
    let arrayId = Array.from(cartId);
    arrayId.forEach(item => {
        if (item.id === target.id) {
            item.parentNode.removeChild(item);
            const localStorageData = JSON.parse(localStorageDataJSON);
            const updatedData = localStorageData.filter((item, index) => index !== target.id);
            console.log(updatedData);
        }
    })

});


/* по клику удалять из локал стораджа */

