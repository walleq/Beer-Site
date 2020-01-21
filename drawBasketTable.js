const elem = document.querySelector('#elem');

function createTable(parent, cols, rows) {
    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    parent.appendChild(table);
}
createTable(elem, 3, 3);


/* selectedCheckBox.set(event.target.parentNode.parentNode.querySelectorAll('td')[1].innerText, event.target.parentNode.parentNode.querySelectorAll('td')[2].innerText)
    } else {
        selectedCheckBox.delete(event.target.parentNode.parentNode.querySelectorAll('td')[1].innerText) */

     