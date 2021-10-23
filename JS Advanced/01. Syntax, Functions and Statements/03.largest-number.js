function maxNumber(num1, num2, num3) {
    let maxNum = num1;
    if (maxNum < num2) {
        maxNum = num2;
    }
    if (maxNum < num3) {
        maxNum = num3;
    }
    console.log(`The largest number is ${maxNum}.`);
}
maxNumber();