function solve(input) {
    let enoughOperands = true;
    function sum(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function multiply(a, b) {
        return a*b;
    }
    function division(a, b) {
        return a/b;
    }
    let result = {
        numbers: [],
        "+": sum,
        "-": subtract,
        "*": multiply,
        "/": division
    }
    for (let symbol of input) {
        if (isNaN(symbol)) {
            if (result.numbers.length < 2) {
                enoughOperands = false;
                console.log("Error: not enough operands!");
            } else {
                let lastNumbers = result.numbers.slice(result.numbers.length - 2);
                let num1 = lastNumbers[0];
                let num2 = lastNumbers[1];
                result.numbers.splice(result.numbers.length - 2);                
                result.numbers.push(result[symbol](num1, num2));
            }  
        } else {
            result.numbers.push(Number(symbol));
        }
    }
    if (result.numbers.length == 1 && enoughOperands == true) {
        console.log(result.numbers[0]);
    }
    if (result.numbers.length > 1) {
        console.log("Error: too many operands!");
    }
}
solve([5,
   
    '*',
    '-']   
   )