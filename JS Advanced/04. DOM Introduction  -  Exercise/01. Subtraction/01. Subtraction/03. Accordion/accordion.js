function toggle() {
    let buttonValue = document.querySelector('.button');
    if (buttonValue.textContent == 'More') {
        console.log('yes');
        buttonValue.textContent = 'Less';
        document.querySelector('#extra').style.display = 'block';
    } else {
        buttonValue.textContent = 'More';
        document.querySelector('#extra').style.display = 'none';
    }
}