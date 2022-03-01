function addItem() {
    let optionContent = document.querySelector('#newItemText');
    let optionValue = document.querySelector('#newItemValue');
    let newOption = document.createElement('option');
    newOption.textContent = optionContent.value;
    newOption.value = optionValue.value;
    document.querySelector('#menu').appendChild(newOption);
    optionContent.value = '';
    optionValue.value = '';
}