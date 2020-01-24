const cartContainer = document.getElementById('elem');
const localStorageDataJSON = localStorage.getItem('tableForBasket');

if (localStorageDataJSON) {
    const localStorageData = JSON.parse(localStorageDataJSON);
    const localStorageMap = new Map(localStorageData.map(item => [item.id, item]));
    cartContainer.addEventListener('click', function (event) {
        let target = event.target;
        if (!target.classList.contains('remove-icon')) return;
        const parentId = target.getAttribute('parentId');
        cartContainer.removeChild(document.getElementById(parentId));
        localStorageMap.delete(parseInt(parentId, 10));
        const selectedBeers = Array.from(localStorageMap.values());
        localStorage.setItem('tableForBasket', JSON.stringify(selectedBeers));

        /* arrayId.forEach(item => {
            if (item.id === target.id) {
                item.parentNode.removeChild(item);
                const updatedData = localStorageData.filter((item, index) => index !== target.id);
                console.log(updatedData);
            }
        }) */

    });
};

/* по клику удалять из локал стораджа */

