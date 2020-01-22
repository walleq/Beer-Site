function createList() {
    if (localStorage.getItem('tableForBasket')) {
        const generateBasketTable = JSON.parse(localStorage.getItem('tableForBasket'));
        console.log(generateBasketTable);
        const list = document.createElement('div');
        generateBasketTable.forEach(item => {
            const listItem = document.createElement('div');
            listItem.classList.add('bordered');
            const name = document.createElement('span');
            name.classList.add('name');
            const nameValue = document.createElement('span');
            nameValue.classList.add('nameValue');
            const tagline = document.createElement('span');
            const taglineValue = document.createElement('span');
            const firstBrewed = document.createElement('span');
            const firstBrewedValue = document.createElement('span');
            const image = document.createElement('img');
            name.innerHTML = ' Name: ';
            tagline.innerHTML = ' Tagline: ';
            firstBrewed.innerHTML = ' First brewed: ';
            nameValue.innerText = item.name;
            taglineValue.innerText = item.tagline;
            firstBrewedValue.innerText = item.first_brewed;
            image.innterHTML = item.image_url;
            listItem.appendChild(name);
            listItem.appendChild(nameValue);
            listItem.appendChild(tagline);
            listItem.appendChild(taglineValue);
            listItem.appendChild(firstBrewed);
            listItem.appendChild(firstBrewedValue);
            listItem.appendChild(image);
            list.appendChild(listItem);
        });
        document.getElementById('elem').appendChild(list);
    }
}
createList();





/* если есть элемент в локал сторадже, то дотсать его и распарсить через json parse,
пройти циклом по массиву и постоить дом */

/*
НА другой странице нужно выводить выбранные товары, для этого нужно создать мап из уже выбранных
Если удалить с корзины, то галочка на чекбоксе должна слететь. */