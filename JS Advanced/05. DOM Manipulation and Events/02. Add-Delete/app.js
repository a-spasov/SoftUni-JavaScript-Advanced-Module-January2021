function addItem() {
    let listItemContent = document.querySelector('#newText');
    let newListItem = document.createElement('li'); 
    newListItem.textContent = listItemContent.value;
    let deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';
    newListItem.appendChild(deleteButton);
    document.querySelector('#items').appendChild(newListItem);
    document.querySelector('#newItemText').value = '';
    deleteButton.addEventListener('click', deleteListItem);
    function deleteListItem(ev) {
        ev.target.parentNode.remove();
    }
//     let newElement = document.getElementById("newText").value;
//   let list = document.getElementById("items");
//   if (newElement.length === 0) return;
//   let listItem = document.createElement("li");
//   listItem.textContent = newElement;
//   let remove = document.createElement("a");
//   let linkText = document.createTextNode("[Delete]");
// remove.appendChild(linkText);
//   remove.href = "#";
//   remove.addEventListener("click", deleteItem);

//   listItem.appendChild(remove);
//   list.appendChild(listItem);

//   function deleteItem() {
//     listItem.remove();
//   }

}