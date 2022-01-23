function colorize() {
    let rows = document.querySelectorAll('table tr');
    let counter = 1;
    for (let row of rows) {
        if (counter % 2 == 0) {
            row.style.background = "Teal";
        }
        counter++;
    }
}