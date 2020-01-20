function generateTableHead(table, data) {
    table.deleteTHead();
    const thead = table.createTHead();
    const row = thead.insertRow();
    for (let key of data) {
        const th = document.createElement('th');
        const text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}
function generateTable(table, data) {
    for (let element of data) {
        const row = table.insertRow();
        const boxCell = row.insertCell();
        boxCell.appendChild(createCheckBox());
        for (key in element) {
            const cell = row.insertCell();
            let childElement;
            if (key === 'image_url') {
                childElement = document.createElement('img');
                childElement.setAttribute('src', element[key]);
                childElement.classList.add('beer')
            } else {
                childElement = document.createTextNode(element[key]);
            }
            cell.appendChild(childElement);
        }
    }
}
