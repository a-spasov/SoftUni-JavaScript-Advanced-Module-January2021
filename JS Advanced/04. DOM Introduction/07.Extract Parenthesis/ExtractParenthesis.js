function extract(content) {
    let text = document.getElementById(content).textContent;
    let pattern = /\(([^)]+)\)/g;
    let matches = text.match(pattern);
    let result = [];
    for (let currentLine of matches) {
        currentLine = currentLine.replace('(', '');
        currentLine = currentLine.replace(')', '');
        result.push(currentLine);
    }
    return result.join('; ');
}