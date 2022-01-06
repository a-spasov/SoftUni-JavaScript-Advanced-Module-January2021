function fromJSONToHTMLTable(input) {
    let result = [];
    let currentRow = "<tr>";
    result.push("<table>");
    let table = JSON.parse(input);
    for (let key of Object.keys(table[0])) {
        currentRow = currentRow.concat(`<th>${key}</th>`);
    }
    currentRow = currentRow.concat("</tr>");
    result.push(currentRow);
    for (let currentData of table) {
        currentRow = "<tr>";
        for (let value of Object.values(currentData)) {
            currentRow = currentRow.concat(`<td>${value}</td>`);
        }
        currentRow = currentRow.concat("</tr>");
        result.push(currentRow);
    }
    result.push("</table>");
    console.log(result.join("\n"));
}
fromJSONToHTMLTable('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]');