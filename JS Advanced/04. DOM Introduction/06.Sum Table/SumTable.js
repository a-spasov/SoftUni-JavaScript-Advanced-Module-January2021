function sumTable() {
    let rows = document.querySelectorAll('table tr');
    let result = 0;
    for (let row of rows) {
        let value = row.children[1].textContent;
        if (!isNaN(value)) {
            result += Number(value);
        }
    }
    document.getElementById('sum').textContent = result;
}