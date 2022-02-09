function generateReport() {
    let columns = document.querySelectorAll('input');
    let columnIndexes = [];
    let index = 0;
    let output = [];
    for (let column of columns) {
        if (column.checked == true) {
            columnIndexes.push(index);
        }
        index++;
    }
    let rows = document.querySelectorAll('tbody tr');
    let properties = Array.from(document.querySelector('thead tr').children);
    console.log(properties[1].lastChild.name);
    for (let row of rows) {
        let result = {};
        let cellsInRow = Array.from(row.children);
        for (let cellIndex of columnIndexes) {
            cellIndex = Number(cellIndex);
            result[properties[cellIndex].lastChild.name] = cellsInRow[cellIndex].textContent;
        }
        output.push(result);
    }
    document.querySelector('#output').textContent = JSON.stringify(output);   
}