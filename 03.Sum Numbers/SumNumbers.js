function calc() {
    let firstNumber = document.querySelector('#num1').value;
    let secondNumber = document.querySelector('#num2').value;
    let result = Number(firstNumber) + Number(secondNumber);
    document.querySelector('#sum').value = result;
}
