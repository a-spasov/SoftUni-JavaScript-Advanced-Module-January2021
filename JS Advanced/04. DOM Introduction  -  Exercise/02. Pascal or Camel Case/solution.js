function solve() {
    let input = document.querySelector('#text').value;
    let convention = document.querySelector('#naming-convention').value;
    let result = [];
    input = input.split(' ');
    switch (convention) {
        case 'Camel Case':
            for (let i = 0; i < input.length; i++) {
                if (i != 0) {
                    let firstLetter = input[i][0].toUpperCase();
                    let restOfWord = input[i].slice(1);
                    restOfWord = restOfWord.toLowerCase();
                    let newWord = firstLetter + restOfWord;
                    result.push(newWord);
                } else {
                    result.push(input[i].toLowerCase());
                }
            }
            break;
        case 'Pascal Case':
            for (let i = 0; i < input.length; i++) {
                let firstLetter = input[i][0].toUpperCase();
                let restOfWord = input[i].slice(1);
                restOfWord = restOfWord.toLowerCase();
                let newWord = firstLetter + restOfWord;
                result.push(newWord);
            }
            break;
    }
    if (result.length > 0) {
        document.querySelector('#result').textContent = result.join('');
    } else {
        document.querySelector('#result').textContent = 'Error!';
    }
}