function solve(input) {
    let biggerElements = [];
    let biggestElement = 0;
    for (let numbers of input) {
        numbers.sort((a, b) => b - a);
        biggerElements.push(numbers[0]);
    }
    biggerElements.sort((a, b) => b - a);
    biggestElement = biggerElements[0];
    return biggestElement;
}

solve();