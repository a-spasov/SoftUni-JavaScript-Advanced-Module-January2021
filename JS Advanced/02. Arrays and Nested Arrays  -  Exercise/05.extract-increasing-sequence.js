function solve(input) {
    let currentMaxNumber = input[0];
    let result = [];
    for (let currentNumber of input) {
        currentNumber = Number(currentNumber);
        if (currentNumber >= currentMaxNumber) {
            result.push(currentNumber);
            currentMaxNumber = currentNumber;
        }
    }
    return result;
}
solve();