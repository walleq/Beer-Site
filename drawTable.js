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
        for (key in element) {
            const cell = row.insertCell();
            const text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}
