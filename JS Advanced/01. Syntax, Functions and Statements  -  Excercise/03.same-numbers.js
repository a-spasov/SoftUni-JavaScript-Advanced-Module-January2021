function solve(input) {
    let isSame = true;
    let sumOfDigits = 0;
    let numberAsString =input.toString();
    numberAsString = numberAsString.split("");
    let firstDigit = Number(numberAsString[0]);
    for (let currentDigit of numberAsString) {
        currentDigit = Number(currentDigit);
        if (currentDigit != firstDigit) {
            isSame = false;
        }
        sumOfDigits += currentDigit;
    }
    if (isSame) {
        console.log("true");
    } else {
        console.log("false");
    }
    console.log(sumOfDigits);
}
solve(333);