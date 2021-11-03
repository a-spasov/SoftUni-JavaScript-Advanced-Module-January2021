function solve(n, k) {
    let numbers = [1];
    let currentSequence = [];
    let currentNumber = 1;
    for (let i = 2; i <= n; i++) {
            currentSequence = numbers.slice(-k);
            currentNumber = currentSequence.reduce((acc, currentValue) => acc + currentValue);
            numbers.push(currentNumber);
    }
    return numbers;
}
solve (6, 3);