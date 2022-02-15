function addItem() {
    let listItemValue = document.querySelector('#newItemText').value;
    let newListItem = document.createElement('li');
    newListItem.textContent = listItemValue;
    document.querySelector('#items').appendChild(newListItem);
    document.querySelector('#newItemText').value = '';
}