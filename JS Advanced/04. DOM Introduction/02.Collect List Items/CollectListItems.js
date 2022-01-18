function extractText() {
    let listItems = document.querySelectorAll('#items li');
    let text = [];
    for (let item of listItems) {
        text.push(item.textContent);
    }
    document.querySelector('#result').textContent = text.join('\n');
}