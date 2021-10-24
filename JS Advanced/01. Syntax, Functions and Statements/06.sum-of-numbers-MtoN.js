function solve(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let sumOfNumbers = 0;
    for (let i = num1; i <= num2; i++) {
        sumOfNumbers += i;
    }
    console.log(sumOfNumbers);
}
solve();