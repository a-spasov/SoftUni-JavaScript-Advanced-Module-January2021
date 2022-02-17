function deleteByEmail() {
    let email = document.querySelector('input').value;
    let rows = document.querySelectorAll('tr');
    for (let row of rows) {
        if (email == row.children[1].textContent) {
            row.remove();
            document.querySelector('#result').textContent = 'Deleted';
            break;
        } else {
            document.querySelector('#result').textContent = 'Not found.';
        }
    }
}