function solve() {
    let option = document.querySelector('#selectMenuTo').value;
    let number = Number(document.querySelector('#input'));
    let result = [];
    if (option == 'binary') {
        if (number % 2 == 0) {
            number = Math.floor(number/ 2);
            if (number == 0) {
                break;
            }
            result.push(0);
        }
        result.reverse();
        console.log(result);
        document.querySelector('#result').value = push.join('');
    }
    if (option == 'hexdecimal') {
        number = 3200;
        document.querySelector('#result').value = number.toString(16);
    }

}