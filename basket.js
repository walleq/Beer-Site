function createDiv() {
    return document.createElement('div');
};

function createSpan() {
    return document.createElement('span');
};

function createList() {
    if (localStorage.getItem('tableForBasket')) {
        const generateBasketTable = JSON.parse(localStorage.getItem('tableForBasket'));
        const list = document.getElementById('elem');
        generateBasketTable.forEach((item, index) => {
            const listItem = createDiv();
            const descriptionContainer = createDiv();
            const name = createSpan();
            const nameValue = createSpan();
            const tagline = createSpan();
            const taglineValue = createSpan();
            const firstBrewed = createSpan();
            const firstBrewedValue = createSpan();
            const image = document.createElement('img');
            const removeButton = createDiv();
            const nameContainer = createDiv();
            const taglineContainer = createDiv();
            const firstBrewedContainer = createDiv();

            listItem.id = index;

            removeButton.innerHTML = `<i class="fas fa-trash-alt remove-icon" id=${index}></i>`

            descriptionContainer.classList.add('description-container');
            listItem.classList.add('bordered');
            image.classList.add('imageStyle');
            listItem.classList.add('cart-item');
            removeButton.classList.add('remove-button');

            nameValue.innerText = item.name;
            taglineValue.innerText = item.tagline;
            image.setAttribute('src', item.image_url);

            firstBrewedContainer.innerHTML = `<div> <span class="textStyleHead"> First brewed: </span> <span class="textStyle"> ${item.first_brewed}</span> </div>`;
            nameContainer.innerHTML = `<div> <span class="textStyleHead"> Name: </span> <span class="textStyle"> ${item.name}</span> <div>`;
            taglineContainer.innerHTML = `<div> <span class="textStyleHead"> Tagline: </span> <span class="textStyle"> ${item.tagline}</span> <div>`;
            descriptionContainer.appendChild(nameContainer);
            descriptionContainer.appendChild(taglineContainer);
            descriptionContainer.appendChild(firstBrewedContainer);
            listItem.appendChild(descriptionContainer);
            listItem.appendChild(image);
            listItem.appendChild(removeButton);
            list.appendChild(listItem);
        });
    }
}
createList();




/* Если удалить с корзины, то галочка на чекбоксе должна слететь.  */